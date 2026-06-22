import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";

const dataFiles = [
  "official-spots.js",
  "banakpo-spots.js",
  "danfish-spots.js",
  "freshwater-spots.js",
  "national-freshwater-spots.js",
  "daeho-freshwater-spots.js",
  "osm-freshwater-spots.js",
  "app.js"
];

function noop() {}
function elementStub() {
  return {
    value: "",
    textContent: "",
    innerHTML: "",
    className: "",
    dataset: {},
    style: {},
    content: { cloneNode: () => ({ querySelector: () => elementStub() }) },
    classList: { add: noop, remove: noop, toggle: noop },
    appendChild: noop,
    insertAdjacentHTML: noop,
    addEventListener: noop,
    setAttribute: noop,
    querySelector: () => elementStub(),
    querySelectorAll: () => [],
    scrollIntoView: noop
  };
}

const context = {
  console,
  URL,
  URLSearchParams,
  fetch,
  setTimeout,
  clearTimeout,
  localStorage: { getItem: () => null, setItem: noop },
  window: {
    setTimeout,
    clearTimeout,
    matchMedia: () => ({ matches: false }),
    location: { search: "" }
  },
  document: {
    getElementById: () => elementStub(),
    querySelector: () => elementStub(),
    querySelectorAll: () => [],
    createElement: () => elementStub()
  },
  navigator: {},
  L: {
    map: () => ({
      setView() { return this; },
      getCenter() { return { lat: 35.86, lng: 127.82 }; },
      getZoom() { return 7; },
      flyTo: noop,
      on: noop,
      addLayer: noop,
      hasLayer: () => false,
      invalidateSize: noop,
      getLayers: () => ({ setAt: noop })
    }),
    canvas: () => ({}),
    control: { zoom: () => ({ addTo: noop }) },
    tileLayer: () => ({ addTo: noop }),
    circleMarker: () => ({
      addTo() { return this; },
      bindTooltip() { return this; },
      on: noop,
      remove: noop,
      setRadius: noop,
      setStyle: noop,
      openTooltip() { return this; }
    })
  }
};

function offsetCoordinate(lat, lng, meters, bearingDegrees) {
  const bearing = bearingDegrees * Math.PI / 180;
  const north = Math.cos(bearing) * meters;
  const east = Math.sin(bearing) * meters;
  const nextLat = lat + north / 111320;
  const nextLng = lng + east / (111320 * Math.cos(lat * Math.PI / 180));
  return {
    lat: Number(nextLat.toFixed(6)),
    lng: Number(nextLng.toFixed(6))
  };
}

function cleanTechniqueLabel(label) {
  return label.replace(/\s*(포인트|후보)$/g, "").trim();
}

function chooseDistance(spot, techniqueKey, index) {
  if (techniqueKey === "boat") return 520 + (index % 5) * 45;
  if (/해변|백사장|갯벌|모래/.test(`${spot.type} ${spot.name} ${spot.bottom || ""}`)) return 260 + (index % 4) * 35;
  if (/방파제|항구|선착장|포구/.test(`${spot.type} ${spot.name}`)) return 140 + (index % 4) * 30;
  return 190 + (index % 4) * 40;
}

function chooseBearing(spot, techniqueKey, index) {
  const seeds = {
    lure: 45,
    surf: 130,
    float: 320,
    gure: 35,
    blackPorgy: 285,
    eging: 70,
    light: 15,
    seabass: 250,
    boat: 90
  };
  const base = seeds[techniqueKey] || 45;
  const text = `${spot.region} ${spot.area} ${spot.name}`;
  const regionalShift = text.includes("동해") ? 80 : text.includes("서해") ? -35 : text.includes("제주") ? 25 : 0;
  return (base + regionalShift + (index % 7) * 17 + 360) % 360;
}

function buildCandidate(spot, preset, fit, index) {
  const { lat, lng } = offsetCoordinate(
    spot.lat,
    spot.lng,
    chooseDistance(spot, preset.key, index),
    chooseBearing(spot, preset.key, index)
  );
  const label = cleanTechniqueLabel(preset.label);
  const fish = (spot.fish || []).filter((name) => preset.fish.includes(name));
  const candidateFish = fish.length ? fish : preset.fish.slice(0, 3);
  return {
    id: `tech-${preset.key}-${spot.id}`,
    name: `${spot.name} ${label} AI 추정 후보`,
    region: spot.region,
    area: spot.area,
    lat,
    lng,
    difficulty: "현장 확인",
    level: fit.score >= 18 ? "hard" : fit.score >= 14 ? "medium" : "easy",
    fish: candidateFish,
    type: "AI 지형 추정 후보",
    season: spot.season || "현장 확인",
    tide: "출조 전 현장 확인",
    desc: `${spot.name} 주변 지형 단서와 ${preset.label} 점수 ${fit.score}점을 바탕으로 새로 만든 후보 좌표입니다.`,
    tip: `기준 포인트에서 가까운 주변 후보입니다. 실제 진입로, 수심, 암초, 갯벌, 양식장, 금지구역, 사유지 여부는 MEIS·해도·현장에서 반드시 확인하세요. 주요 근거: ${fit.reasons.join(" · ") || "유형·어종 기반 자동 분석"}.`,
    source: "AI 지형 추정",
    sourceCode: `${preset.key}-${spot.id}`,
    checkedAt: "2026-06-22",
    catalog: true,
    catalogName: "AI 추정",
    techniqueCandidate: true,
    baseSpotId: spot.id,
    baseSpotName: spot.name,
    coordinateConfidence: "AI 추정 좌표 · 출조 전 검증 필요",
    warning: "AI가 생성한 후보 좌표입니다. 실제 낚시 가능 지점으로 확정하지 말고 현장 안전과 출입 가능 여부를 먼저 확인하세요.",
    sources: [
      { label: "기준 포인트 원문", url: spot.sources?.[0]?.url || "https://www.meis.go.kr/map/oemsBaseMap.do#" },
      { label: "MEIS 해양환경 정보지도", url: "https://www.meis.go.kr/map/oemsBaseMap.do#" }
    ],
    aiTechnique: preset.label,
    aiScore: fit.score,
    aiReasons: fit.reasons
  };
}

const source = (await Promise.all(dataFiles.map((file) => readFile(file, "utf8")))).join("\n") +
  "\nglobalThis.__moolttae = { seaSpots, fishingTechniquePresets, getTechniqueFit };";

vm.createContext(context);
context.techniqueCandidateSpots = [];
vm.runInContext(source, context);

const { seaSpots, fishingTechniquePresets, getTechniqueFit } = context.__moolttae;
const candidates = [];
const seen = new Set();

for (const preset of fishingTechniquePresets) {
  const pool = seaSpots
    .filter((spot) => Number.isFinite(spot.lat) && Number.isFinite(spot.lng))
    .map((spot) => ({ spot, fit: getTechniqueFit(spot, preset.key) }))
    .filter(({ fit }) => fit.score >= Math.max(preset.min + 2, 12))
    .sort((a, b) => b.fit.score - a.fit.score || `${a.spot.name}`.localeCompare(`${b.spot.name}`, "ko"))
    .slice(0, preset.key === "light" || preset.key === "surf" ? 32 : 42);

  pool.forEach(({ spot, fit }, index) => {
    const key = `${preset.key}|${spot.id}`;
    if (seen.has(key)) return;
    seen.add(key);
    candidates.push(buildCandidate(spot, preset, fit, index));
  });
}

const output = `// Generated by tools/generate-technique-candidates.mjs.\n` +
  `// AI-inferred candidate coordinates. Verify access and safety before fishing.\n` +
  `const techniqueCandidateSpots = ${JSON.stringify(candidates, null, 2)};\n`;

await writeFile("technique-candidates.js", output, "utf8");
console.log(`Generated ${candidates.length} AI technique candidate points`);
