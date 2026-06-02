const curatedSpots = [
  { id: 1, name: "궁평항 방파제", region: "서해", area: "경기 화성", lat: 37.1157, lng: 126.6836, difficulty: "초급", level: "easy", fish: ["우럭", "망둥어", "숭어"], type: "방파제", season: "연중", tide: "간조 전후", desc: "수도권에서 가볍게 떠나기 좋은 생활 낚시 포인트.", tip: "방파제 안쪽은 발판이 안정적입니다. 주말에는 오전 일찍 도착하는 편이 좋습니다." },
  { id: 2, name: "안면도 영목항", region: "서해", area: "충남 태안", lat: 36.4001, lng: 126.4206, difficulty: "초급", level: "easy", fish: ["우럭", "노래미", "갑오징어"], type: "항구", season: "봄·가을", tide: "중들물", desc: "잔잔한 항구와 갯바위 포인트를 함께 즐길 수 있어요.", tip: "가을에는 에기 채비를 챙겨 갑오징어를 노려보세요. 선착장 통행은 방해하지 않도록 주의합니다." },
  { id: 3, name: "군산 비응항", region: "서해", area: "전북 군산", lat: 35.9422, lng: 126.5277, difficulty: "중급", level: "medium", fish: ["감성돔", "우럭", "농어"], type: "방파제", season: "봄·가을", tide: "초들물", desc: "긴 방파제를 따라 다양한 어종을 만나는 서해의 관문.", tip: "외항 쪽은 조류가 빠른 날이 있습니다. 구명조끼를 착용하고 테트라포드 진입은 피하세요." },
  { id: 4, name: "격포항 북방파제", region: "서해", area: "전북 부안", lat: 35.6231, lng: 126.4695, difficulty: "중급", level: "medium", fish: ["감성돔", "학꽁치", "우럭"], type: "방파제", season: "가을·겨울", tide: "중날물", desc: "노을이 아름답고 겨울 학꽁치 소식이 반가운 곳.", tip: "방파제 끝은 바람이 강할 수 있습니다. 짐은 가볍게, 미끄럼 방지 신발은 꼭 준비하세요." },
  { id: 5, name: "구룡포 장길리", region: "동해", area: "경북 포항", lat: 35.9972, lng: 129.5657, difficulty: "중급", level: "medium", fish: ["벵에돔", "볼락", "무늬오징어"], type: "갯바위", season: "여름·가을", tide: "초들물", desc: "맑은 물색과 아기자기한 여밭이 매력적인 동해 포인트.", tip: "파도가 높은 날에는 갯바위에 접근하지 마세요. 해 질 무렵 볼락 루어도 재미있습니다." },
  { id: 6, name: "울진 후포항", region: "동해", area: "경북 울진", lat: 36.6794, lng: 129.4534, difficulty: "초급", level: "easy", fish: ["볼락", "가자미", "도다리"], type: "항구", season: "연중", tide: "무관", desc: "가족과 함께 찾기 좋은 넓고 편안한 항구 포인트.", tip: "항구 주변 편의시설이 잘 갖춰져 있습니다. 야간에는 집어등을 활용한 볼락 낚시도 좋습니다." },
  { id: 7, name: "강릉 주문진항", region: "동해", area: "강원 강릉", lat: 37.8944, lng: 128.8337, difficulty: "초급", level: "easy", fish: ["고등어", "전갱이", "도다리"], type: "항구", season: "여름·가을", tide: "무관", desc: "가벼운 카드 채비로 손맛을 보기 좋은 동해 대표 항구.", tip: "회유 어종 소식은 시기에 따라 크게 달라집니다. 현지 낚시점에서 최근 조황을 먼저 확인하세요." },
  { id: 8, name: "기장 대변항", region: "남해", area: "부산 기장", lat: 35.2246, lng: 129.2283, difficulty: "초급", level: "easy", fish: ["전갱이", "볼락", "갈치"], type: "항구", season: "여름·가을", tide: "중들물", desc: "부산 도심에서 가까워 퇴근 후에도 들르기 좋은 항구.", tip: "야간 낚시가 인기입니다. 주변 상가와 주민에게 방해가 되지 않도록 소음과 쓰레기에 유의하세요." },
  { id: 9, name: "거제 구조라", region: "남해", area: "경남 거제", lat: 34.8062, lng: 128.6909, difficulty: "숙련", level: "hard", fish: ["감성돔", "벵에돔", "무늬오징어"], type: "갯바위", season: "봄·가을", tide: "중들물", desc: "섬과 여밭이 빚어낸 풍경 속에서 진한 손맛을 기대해요.", tip: "갯바위 진입 전 물때와 퇴로를 확인하세요. 혼자보다는 경험자와 동행하는 것을 권합니다." },
  { id: 10, name: "통영 척포", region: "남해", area: "경남 통영", lat: 34.8096, lng: 128.3637, difficulty: "숙련", level: "hard", fish: ["감성돔", "볼락", "무늬오징어"], type: "갯바위", season: "봄·가을", tide: "초들물", desc: "한려수도의 섬을 바라보며 낚시하는 조용한 갯바위.", tip: "포인트별로 진입 난이도가 다릅니다. 현장 상황이 좋지 않다면 무리하지 말고 항구권으로 이동하세요." },
  { id: 11, name: "제주 김녕항", region: "제주", area: "제주 구좌", lat: 33.5572, lng: 126.7362, difficulty: "중급", level: "medium", fish: ["벵에돔", "무늬오징어", "독가시치"], type: "방파제", season: "연중", tide: "중들물", desc: "에메랄드빛 바다와 검은 현무암이 어우러진 제주 포인트.", tip: "제주 바람은 빠르게 바뀝니다. 출조 전 풍속을 확인하고 높은 너울에는 낚시를 쉬어가세요." },
  { id: 12, name: "제주 신창 풍차해안", region: "제주", area: "제주 한경", lat: 33.3455, lng: 126.1742, difficulty: "숙련", level: "hard", fish: ["벵에돔", "한치", "무늬오징어"], type: "갯바위", season: "여름·가을", tide: "중날물", desc: "풍차 아래로 펼쳐지는 제주 서쪽 바다의 거친 매력.", tip: "해안 산책로 인근은 낚시 가능 구역을 확인하세요. 미끄러운 현무암과 갑작스러운 너울에 주의합니다." }
];

function normalizeFishList(fishList = []) {
  const aliases = {
    "\ub113\uce58": "\uad11\uc5b4",
    "\ud559\uacf5\uce58": "\ud559\uaf41\uce58",
    "\ub9dd\ub465\uc774": "\ub9dd\ub465\uc5b4",
    "\ub9dd\ub461\uc5b4": "\ub9dd\ub465\uc5b4",
    "\uc950\ub178\ub798\ubbf8": "\ub178\ub798\ubbf8",
    "\uc3e8\ubc45\uc774": "\uc3e8\ubca0\uc774",
    "\ubc45\uc5b4\ub3d4": "\ubcb5\uc5d0\ub3d4"
  };
  const invalidPattern = /\ubb3c\ub54c|\ud3b8\uc758|\uac04\uc870|\ub9cc\uc870|\ub4e4\ubb3c|\ub0a0\ubb3c|\uc2dd\ub2f9|\ubbfc\ubc15|\ubaa8\ub798|\ud574\uc9c8|\ub3d9\ud2c0|\uc785\uc9c8|\ud604\uc9c0 \ud655\uc778/;

  return [...new Set(fishList
    .flatMap((name) => `${name}`.split(/\s*\/\s*/))
    .map((name) => name.replace(/\s+(?:\ubb3c\ub54c|\ud3b8\uc758)\s*:.*$/, "").trim())
    .map((name) => aliases[name] || name)
    .filter((name) => name && !invalidPattern.test(name)))];
}

const seaSpots = [...officialFishingSpots, ...banakpoFishingSpots, ...danfishFishingSpots]
  .map((spot) => ({ ...spot, fish: normalizeFishList(spot.fish) }));
const freshwaterSpots = [...freshwaterFishingSpots, ...nationalFreshwaterFishingSpots, ...daehoFreshwaterFishingSpots, ...osmFreshwaterExplorationSpots]
  .map((spot) => ({ ...spot, fish: normalizeFishList(spot.fish) }));
let spots = seaSpots;
const MAX_LIST_ITEMS = 180;
const primaryFish = ["\uc6b0\ub7ed", "\uad11\uc5b4", "\uc804\uac31\uc774", "\uac10\uc131\ub3d4", "\ub18d\uc5b4", "\ubcfc\ub77d", "\ucc38\ub3d4", "\ubcb5\uc5d0\ub3d4", "\uac11\uc624\uc9d5\uc5b4", "\uace0\ub4f1\uc5b4", "\uc0bc\uce58", "\uac08\uce58"];
const freshwaterPrimaryFish = ["붕어", "잉어", "배스", "쏘가리", "송어", "누치", "피라미", "빙어", "장어", "꺽지"];

const fishSeasonMonths = {
  "\uac10\uc131\ub3d4": [3, 4, 5, 6, 10, 11],
  "\uad11\uc5b4": [5, 6, 9, 10, 11],
  "\ub18d\uc5b4": [5, 6, 7, 8, 9],
  "\ub3c4\ub2e4\ub9ac": [3, 4, 5],
  "\ubc29\uc5b4": [11, 12, 1],
  "\ubcfc\ub77d": [11, 12, 1, 2, 3],
  "\ubcb5\uc5d0\ub3d4": [6, 7, 8, 9, 10],
  "\ubb34\ub2ac\uc624\uc9d5\uc5b4": [5, 6, 9, 10, 11],
  "\uc0bc\uce58": [5, 9, 10, 11],
  "\uc6b0\ub7ed": [3, 4, 5, 6, 10, 11, 12],
  "\uc804\uac31\uc774": [6, 7, 8, 9, 10],
  "\uace0\ub4f1\uc5b4": [6, 7, 8, 9, 10],
  "\uac11\uc624\uc9d5\uc5b4": [4, 5, 9, 10, 11],
  "\uac08\uce58": [7, 8, 9, 10, 11],
  "\uac08\uce58(\ud480\uce58)": [7, 8, 9, 10, 11],
  "\ud559\uaf41\uce58": [10, 11, 12, 1, 2],
  "\uac00\uc790\ubbf8": [11, 12, 1, 2, 3],
  "\ud638\ub798\uae30": [11, 12, 1, 2]
};

const state = {
  mode: "sea",
  region: null,
  fish: null,
  fishQuery: "",
  category: null,
  difficulty: null,
  month: null,
  bestOnly: false,
  source: null,
  query: "",
  favoritesOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("moolttae-favorites") || "[]")),
  selectedId: null
};

const difficultyLabel = { easy: "초급", medium: "중급", hard: "숙련" };
const markerMap = new Map();
const map = L.map("map", { zoomControl: false }).setView([35.86, 127.82], 7);
const catalogRenderer = L.canvas({ padding: 0.5, tolerance: 12 });
L.control.zoom({ position: "bottomright" }).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

const weatherCodeLabels = {
  0: ["☀", "맑음"],
  1: ["🌤", "대체로 맑음"],
  2: ["⛅", "구름 조금"],
  3: ["☁", "흐림"],
  45: ["☁", "안개"],
  48: ["☁", "서리 안개"],
  51: ["🌦", "이슬비"],
  53: ["🌦", "이슬비"],
  55: ["🌧", "강한 이슬비"],
  61: ["🌧", "비"],
  63: ["🌧", "비"],
  65: ["🌧", "강한 비"],
  71: ["🌨", "눈"],
  73: ["🌨", "눈"],
  75: ["🌨", "강한 눈"],
  80: ["🌦", "소나기"],
  81: ["🌦", "소나기"],
  82: ["🌧", "강한 소나기"],
  95: ["⛈", "뇌우"],
  96: ["⛈", "우박 뇌우"],
  99: ["⛈", "강한 우박 뇌우"]
};
let weatherTimer;
let weatherRequestId = 0;

function scheduleWeatherUpdate() {
  window.clearTimeout(weatherTimer);
  weatherTimer = window.setTimeout(updateWeatherForMapCenter, 450);
}

async function updateWeatherForMapCenter() {
  const requestId = ++weatherRequestId;
  const { lat, lng } = map.getCenter();
  const weatherTitle = document.getElementById("weatherTitle");
  const weatherDetails = document.getElementById("weatherDetails");
  const weatherIcon = document.getElementById("weatherIcon");
  weatherTitle.textContent = "지도 중심 날씨";
  weatherDetails.textContent = "갱신 중";
  weatherIcon.textContent = "◌";

  const weatherUrl = new URL("https://api.open-meteo.com/v1/forecast");
  weatherUrl.search = new URLSearchParams({
    latitude: lat.toFixed(4),
    longitude: lng.toFixed(4),
    current: "temperature_2m,weather_code,wind_speed_10m",
    wind_speed_unit: "ms",
    timezone: "auto"
  });
  const marineUrl = new URL("https://marine-api.open-meteo.com/v1/marine");
  marineUrl.search = new URLSearchParams({
    latitude: lat.toFixed(4),
    longitude: lng.toFixed(4),
    current: "wave_height",
    timezone: "auto"
  });

  try {
    const [weatherResponse, marineResponse] = await Promise.all([
      fetch(weatherUrl),
      state.mode === "sea" ? fetch(marineUrl) : Promise.resolve(null)
    ]);
    if (!weatherResponse.ok) throw new Error("Weather request failed");
    const weather = await weatherResponse.json();
    const marine = marineResponse?.ok ? await marineResponse.json() : null;
    if (requestId !== weatherRequestId) return;
    const current = weather.current || {};
    const [icon, label] = weatherCodeLabels[current.weather_code] || ["◌", "날씨 확인"];
    const temperature = Number.isFinite(current.temperature_2m) ? `${current.temperature_2m.toFixed(1)}°C` : "기온 확인 중";
    const wind = Number.isFinite(current.wind_speed_10m) ? `바람 ${current.wind_speed_10m.toFixed(1)}m/s` : "바람 확인 중";
    const wave = Number.isFinite(marine?.current?.wave_height) ? ` · 파고 ${marine.current.wave_height.toFixed(1)}m` : "";
    weatherIcon.textContent = icon;
    weatherTitle.textContent = `${label} · ${temperature}`;
    weatherDetails.textContent = `${wind}${wave}`;
  } catch {
    if (requestId !== weatherRequestId) return;
    weatherIcon.textContent = "◌";
    weatherTitle.textContent = "날씨 확인 지연";
    weatherDetails.textContent = "지도를 이동하면 다시 시도합니다";
  }
}

function getMarkerColor(spot) {
  const { level } = getAnalyzedDifficulty(spot);
  if (level === "hard") return "#cf765e";
  if (level === "medium") return "#d6a54d";
  return "#65a66d";
}

function getAnalyzedDifficulty(spot) {
  const level = spot.level || "medium";
  const label = difficultyLabel[level] || "중급";
  if (spot.difficulty && !["현장 확인", "현지 확인"].includes(spot.difficulty)) {
    return { level, label, inferred: false, note: spot.difficulty !== label ? spot.difficulty : "" };
  }

  const value = `${spot.type || ""} ${spot.name} ${spot.traffic || ""}`;
  const depths = [...`${spot.depth || ""}`.matchAll(/\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
  const maxDepth = depths.length ? Math.max(...depths) : 0;
  const needsBoat = /선상|선박|배편|도선|낚싯배|출항/.test(value);
  const rocky = /갯바위|암초|여밭|직벽|간출암|섬/.test(value);
  const accessible = /해변|백사장|선착장|잔교|포구|내항/.test(value);
  const breakwater = /방파제|방조제|외항/.test(value);

  if (needsBoat || rocky || maxDepth >= 12) return { level: "hard", label: "숙련", inferred: true };
  if (breakwater || maxDepth >= 7) return { level: "medium", label: "중급", inferred: true };
  if (accessible) return { level: "easy", label: "초급", inferred: true };
  return { level: "medium", label: "중급", inferred: true };
}

function getMonthOpportunity(spot, month) {
  if (!month) return { fish: [], explicit: false, score: 0, best: false };
  const profile = getMonthProfile(spot).find((item) => item.month === Number(month));
  const score = profile.fish.length + (profile.explicit ? 2 : 0);
  return { ...profile, score, best: profile.explicit || profile.fish.length >= 4 };
}

function isMappableSpot(spot) {
  return Number.isFinite(spot.lat) && Number.isFinite(spot.lng);
}

function createMarkers() {
  spots.forEach((spot) => {
    if (!isMappableSpot(spot)) return;
    const marker = L.circleMarker([spot.lat, spot.lng], {
      renderer: catalogRenderer,
      radius: spot.discovery ? 5 : spot.catalog ? 6 : 7,
      color: "#fff",
      weight: spot.catalog ? 1 : 2,
      fillColor: getMarkerColor(spot),
      fillOpacity: spot.discovery ? 0.58 : spot.catalog ? 0.78 : 0.9
    }).addTo(map);
    marker.bindTooltip(spot.name, { direction: "top", offset: [0, -8] });
    marker.on("click", () => selectSpot(spot.id, false));
    markerMap.set(spot.id, { marker });
  });
}

function clearMarkers() {
  markerMap.forEach(({ marker }) => marker.remove());
  markerMap.clear();
}

function renderFishOptions() {
  const list = document.getElementById("fishOptions");
  list.innerHTML = "";
  [...new Set(spots.flatMap((spot) => spot.fish))].sort((a, b) => a.localeCompare(b, "ko")).forEach((fish) => {
    const option = document.createElement("option");
    option.value = fish;
    list.appendChild(option);
  });
}

function setMode(mode) {
  state.mode = mode;
  spots = mode === "freshwater" ? freshwaterSpots : seaSpots;
  resetFilters();
  state.selectedId = null;
  document.getElementById("detailPanel").classList.remove("open");
  document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
  document.querySelector(".fish-filter-group").classList.remove("is-hidden");
  document.querySelector(".season-filter-group").classList.toggle("is-hidden", mode === "freshwater");
  document.getElementById("brandSubtitle").textContent = mode === "freshwater" ? "민물 노지 큐레이션 지도" : "바다낚시 포인트 지도";
  document.getElementById("introDescription").textContent = mode === "freshwater" ? "교차 확인한 큐레이션과 전국 수역 탐색 후보를 함께 살펴보세요." : "바다의 결을 따라 나만의 포인트를 찾아보세요.";
  document.getElementById("mapLabelTitle").textContent = mode === "freshwater" ? "민물 노지 큐레이션" : "대한민국 바다";
  document.getElementById("mapLabelDescription").textContent = mode === "freshwater" ? "큐레이션과 OSM 수역 탐색 후보를 구분해 표시합니다" : "지도를 움직여 포인트를 탐색하세요";
  clearMarkers();
  createMarkers();
  renderFishOptions();
  render();
  map.setView(mode === "freshwater" ? [36.2, 127.9] : [35.86, 127.82], 7);
}

function renderChips() {
  const regions = [...new Set(spots.map((spot) => spot.region))];
  renderChipGroup("regionFilters", regions, "region");
  renderChipGroup("fishFilters", state.mode === "sea" ? primaryFish : freshwaterPrimaryFish, "fish");
  renderChipGroup("categoryFilters", state.mode === "sea" ? ["방파제·방조제", "섬·갯바위", "항구·선착장", "기타"] : ["저수지", "수로", "하천", "호수·강"], "category");
  renderChipGroup("difficultyFilters", ["초급", "중급", "숙련"], "difficulty");
  renderChipGroup("sourceFilters", state.mode === "sea" ? ["바낚포", "DanFish", "공공데이터"] : ["큐레이션", "수역 탐색"], "source");
}

function getSpotCategory(spot) {
  if (spot.freshwater) return spot.type;
  const value = `${spot.type || ""} ${spot.name}`;
  if (value.includes("방파제") || value.includes("방조제")) return "방파제·방조제";
  if (
    value.includes("섬") ||
    value.includes("도") ||
    value.includes("갯바위") ||
    value.includes("바위") ||
    value.includes("여")
  ) {
    return "섬·갯바위";
  }
  if (value.includes("항") || value.includes("선착장") || value.includes("포구")) return "항구·선착장";
  return "기타";
}

function getSpotSource(spot) {
  if (spot.discovery) return "수역 탐색";
  if (spot.freshwater) return "큐레이션";
  if (spot.catalogName === "DanFish") return "DanFish";
  if (spot.catalog) return "바낚포";
  if (spot.official) return "공공데이터";
  return "공공데이터";
}

function renderChipGroup(containerId, values, key) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  values.forEach((value) => {
    const button = document.createElement("button");
    button.className = `chip ${state[key] === value ? "active" : ""}`;
    button.type = "button";
    button.textContent = value;
    button.addEventListener("click", () => {
      state[key] = state[key] === value ? null : value;
      render();
    });
    container.appendChild(button);
  });
}

function filteredSpots() {
  const query = state.query.trim().toLowerCase();
  return spots.filter((spot) => {
    const matchesQuery = !query || `${spot.name} ${spot.area} ${spot.fish.join(" ")}`.toLowerCase().includes(query);
    const matchesRegion = !state.region || spot.region === state.region;
    const matchesFish = !state.fish || spot.fish.includes(state.fish);
    const matchesFishQuery = !state.fishQuery || spot.fish.some((name) => name.includes(state.fishQuery));
    const matchesCategory = !state.category || getSpotCategory(spot) === state.category;
    const matchesDifficulty = !state.difficulty || getAnalyzedDifficulty(spot).label === state.difficulty;
    const monthOpportunity = getMonthOpportunity(spot, state.month);
    const matchesMonth = !state.month || (state.bestOnly ? monthOpportunity.best : monthOpportunity.fish.length > 0);
    const matchesSource = !state.source || getSpotSource(spot) === state.source;
    const matchesFavorite = !state.favoritesOnly || state.favorites.has(spot.id);
    return matchesQuery && matchesRegion && matchesFish && matchesFishQuery && matchesCategory && matchesDifficulty && matchesMonth && matchesSource && matchesFavorite;
  });
}

function renderCards(filtered) {
  const list = document.getElementById("spotList");
  const template = document.getElementById("spotCardTemplate");
  list.innerHTML = "";
  filtered.slice(0, MAX_LIST_ITEMS).forEach((spot) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector(".spot-card");
    card.dataset.id = spot.id;
    card.classList.toggle("selected", state.selectedId === spot.id);
    node.querySelector(".region-badge").textContent = `${spot.region} · ${spot.area}`;
    const difficulty = node.querySelector(".difficulty");
    const analyzedDifficulty = getAnalyzedDifficulty(spot);
    difficulty.textContent = `${analyzedDifficulty.label}${analyzedDifficulty.inferred ? " · 자동 분석" : ""}`;
    difficulty.classList.add(analyzedDifficulty.level);
    node.querySelector("h2").textContent = spot.name;
    node.querySelector(".spot-description").textContent = spot.desc;
    node.querySelector(".spot-meta").innerHTML = `<span>${spot.type}</span><span>${spot.season}</span><span>${spot.fish[0] || "어종 확인 필요"}</span>${spot.discovery ? '<span class="catalog-badge">탐색 후보</span>' : ""}${spot.curated ? '<span class="official-badge">좌표 확인</span>' : ""}${spot.official ? `<span class="official-badge">${spot.freshwater ? "큐레이션" : "공공데이터"}</span>` : ""}${spot.catalog ? `<span class="catalog-badge">${spot.catalogName || "바낚포"}</span>` : ""}`;
    node.querySelector(".spot-card-main").addEventListener("click", () => selectSpot(spot.id, true));
    const saveButton = node.querySelector(".save-button");
    saveButton.classList.toggle("saved", state.favorites.has(spot.id));
    saveButton.textContent = state.favorites.has(spot.id) ? "♥" : "♡";
    saveButton.addEventListener("click", () => toggleFavorite(spot.id));
    list.appendChild(node);
  });
  if (!filtered.length) {
    list.innerHTML = state.mode === "freshwater"
      ? '<p class="result-notice">조건에 맞는 승인 노지 포인트가 없습니다. 지역, 어종 또는 유형 필터를 조금 넓혀보세요.</p>'
      : '<p style="padding:18px 4px;color:#71878a;font-size:12px;">조건에 맞는 포인트가 없습니다. 필터를 조금 넓혀보세요.</p>';
  } else if (filtered.length > MAX_LIST_ITEMS) {
    list.insertAdjacentHTML("beforeend", `<p class="result-notice">${filtered.length.toLocaleString()}개 중 ${MAX_LIST_ITEMS}개를 표시합니다. 지역이나 검색어로 범위를 좁혀보세요.</p>`);
  }
}

function renderMarkers(filtered) {
  const visibleIds = new Set(filtered.map((spot) => spot.id));
  spots.forEach((spot) => {
    const markerEntry = markerMap.get(spot.id);
    if (!markerEntry) return;
    const { marker } = markerEntry;
    const layers = [marker];
    if (visibleIds.has(spot.id)) {
      layers.forEach((layer) => {
        if (!map.hasLayer(layer)) layer.addTo(map);
      });
      marker.setRadius(state.selectedId === spot.id ? 9 : spot.discovery ? 5 : spot.catalog ? 6 : 7);
      marker.setStyle({ fillColor: state.selectedId === spot.id ? "#1d5960" : getMarkerColor(spot) });
    } else {
      layers.forEach((layer) => {
        if (map.hasLayer(layer)) layer.remove();
      });
    }
  });
}

function render() {
  const filtered = filteredSpots();
  document.getElementById("resultCount").textContent = filtered.length;
  const favoriteToggle = document.getElementById("favoriteToggle");
  favoriteToggle.classList.toggle("active", state.favoritesOnly);
  favoriteToggle.textContent = state.favoritesOnly ? "♥ 저장 포인트" : "♡ 저장만 보기";
  const bestToggle = document.getElementById("bestToggle");
  bestToggle.classList.toggle("active", state.bestOnly);
  bestToggle.textContent = state.bestOnly ? "★ 베스트만 보기" : "☆ 베스트만 보기";
  renderChips();
  renderCards(filtered);
  renderMarkers(filtered);
}

function selectSpot(id, flyTo) {
  const spot = spots.find((item) => item.id === id);
  state.selectedId = id;
  render();
  if (flyTo && isMappableSpot(spot)) map.flyTo([spot.lat, spot.lng], Math.max(map.getZoom(), 10), { duration: 0.7 });
  document.querySelector(`[data-id="${id}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  const detail = document.getElementById("detailPanel");
  detail.classList.add("open");
  detail.setAttribute("aria-hidden", "false");
  const mapSource = spot.curated ? [{ label: "OSM 좌표 확인", url: `https://www.openstreetmap.org/?mlat=${spot.lat}&mlon=${spot.lng}#map=15/${spot.lat}/${spot.lng}` }] : [];
  const sourceLinks = [...(spot.sources || []), ...mapSource].map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`).join("");
  const monthProfile = getMonthProfile(spot);
  const analyzedDifficulty = getAnalyzedDifficulty(spot);
  document.getElementById("detailContent").innerHTML = `
    <p class="detail-kicker">${spot.region} · ${spot.area}</p>
    <h2>${spot.name}</h2>
    <p class="detail-summary">${spot.desc}</p>
    ${spot.official ? `<p class="source-note">${spot.freshwater ? "공식 수계 데이터" : "공공데이터"} · ${spot.source} · ${spot.sourceCode}</p>` : ""}
    ${spot.curated ? `<p class="source-note">민물 노지 큐레이션 · ${spot.coordinateConfidence}</p>` : ""}
    ${spot.discovery ? `<p class="source-note">민물 수역 탐색 후보 · ${spot.coordinateConfidence}</p>` : ""}
    ${spot.catalog ? `<p class="source-note">${spot.catalogName || "바낚포"} 원문 수집 · 포인트 ${spot.sourceCode} · 확인일 ${spot.checkedAt}</p>` : ""}
    ${spot.warning ? `<div class="detail-warning">${spot.warning}</div>` : ""}
    <div class="detail-grid">
      <div class="detail-stat"><span>난이도</span><strong>${analyzedDifficulty.label}${analyzedDifficulty.inferred ? " · 자동 분석" : ""}${analyzedDifficulty.note ? ` · ${analyzedDifficulty.note}` : ""}</strong></div>
      <div class="detail-stat"><span>포인트</span><strong>${spot.type}</strong></div>
      <div class="detail-stat"><span>${spot.freshwater ? "확인 항목" : "추천 물때"}</span><strong>${spot.tide}</strong></div>
    </div>
    <section class="detail-section">
      <h3>만날 수 있는 어종</h3>
      <div class="fish-list">${spot.fish.length ? spot.fish.map((fish) => `<span>${fish}</span>`).join("") : `<span>${spot.freshwater ? "어종 정보 준비 중 · 현장 확인 필요" : "현지 선사 확인 필요"}</span>`}</div>
    </section>
    <section class="detail-section">
      <h3>포인트 메모</h3>
      <div class="detail-tip">${spot.tip}</div>
    </section>
    ${spot.catalog ? `<section class="detail-section"><h3>원문 기반 상세 정보</h3><div class="catalog-grid">${spot.depth ? `<span><b>수심</b>${spot.depth}</span>` : ""}${spot.bottom ? `<span><b>바닥 재질</b>${spot.bottom}</span>` : ""}${spot.rig ? `<span><b>채비</b>${spot.rig}</span>` : ""}${spot.bait ? `<span><b>미끼</b>${spot.bait}</span>` : ""}${spot.traffic ? `<span><b>교통·특징</b>${spot.traffic}</span>` : ""}</div></section>` : ""}
    ${sourceLinks ? `<section class="detail-section"><h3>확인한 출처</h3><div class="source-links">${sourceLinks}</div></section>` : ""}
  `;
}

function getMonthProfile(spot) {
  const explicitMonths = new Set(spot.explicitMonths || []);
  const profiles = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const fish = spot.monthlyFish?.[month] || spot.fish.filter((name) => (fishSeasonMonths[name] || []).includes(month));
    return { month, fish, explicit: explicitMonths.has(month) };
  });
  const topScore = Math.max(...profiles.map(({ fish }) => fish.length), 1);
  return profiles.map((profile) => ({ ...profile, peak: profile.fish.length >= Math.max(3, topScore - 1) }));
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  localStorage.setItem("moolttae-favorites", JSON.stringify([...state.favorites]));
  render();
}

function resetFilters() {
  state.region = null;
  state.fish = null;
  state.fishQuery = "";
  state.category = null;
  state.difficulty = null;
  state.month = null;
  state.bestOnly = false;
  state.source = null;
  state.query = "";
  state.favoritesOnly = false;
  document.getElementById("searchInput").value = "";
  document.getElementById("fishSearchInput").value = "";
  document.getElementById("monthFilter").value = "";
  render();
}

document.getElementById("searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});
document.getElementById("resetButton").addEventListener("click", resetFilters);
document.querySelectorAll("[data-reset]").forEach((button) => {
  button.addEventListener("click", () => {
    state[button.dataset.reset] = null;
    if (button.dataset.reset === "fish") {
      state.fishQuery = "";
      document.getElementById("fishSearchInput").value = "";
    }
    if (button.dataset.reset === "month") {
      state.bestOnly = false;
      document.getElementById("monthFilter").value = "";
    }
    render();
  });
});
document.getElementById("favoriteToggle").addEventListener("click", () => {
  state.favoritesOnly = !state.favoritesOnly;
  render();
});
document.getElementById("fishSearchInput").addEventListener("input", (event) => {
  state.fishQuery = event.target.value.trim();
  render();
});
document.getElementById("monthFilter").addEventListener("change", (event) => {
  state.month = event.target.value || null;
  if (!state.month) state.bestOnly = false;
  render();
});
document.getElementById("bestToggle").addEventListener("click", () => {
  if (!state.month) {
    state.month = String(new Date().getMonth() + 1);
    document.getElementById("monthFilter").value = state.month;
  }
  state.bestOnly = !state.bestOnly;
  render();
});
document.getElementById("closeDetail").addEventListener("click", () => {
  document.getElementById("detailPanel").classList.remove("open");
  document.getElementById("detailPanel").setAttribute("aria-hidden", "true");
});
document.getElementById("locateButton").addEventListener("click", () => {
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    map.flyTo([coords.latitude, coords.longitude], 11, { duration: 0.8 });
    L.circleMarker([coords.latitude, coords.longitude], {
      radius: 7, color: "#fff", weight: 3, fillColor: "#2c7880", fillOpacity: 1
    }).addTo(map).bindTooltip("현재 위치").openTooltip();
  });
});

const monthFilter = document.getElementById("monthFilter");
for (let month = 1; month <= 12; month += 1) {
  monthFilter.insertAdjacentHTML("beforeend", `<option value="${month}">${month}월</option>`);
}

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

const appShell = document.querySelector(".app-shell");
const isMobileLayout = window.matchMedia("(max-width: 780px)").matches;
const panelStorageKey = isMobileLayout ? "moolttae-mobile-panels" : "moolttae-panels";
const panelState = JSON.parse(localStorage.getItem(panelStorageKey) || (isMobileLayout ? '{"filters":true,"results":false}' : '{"filters":false,"results":false}'));

function renderPanelState() {
  appShell.classList.toggle("filters-collapsed", panelState.filters);
  appShell.classList.toggle("results-collapsed", panelState.results);
  document.querySelectorAll(".panel-toggle").forEach((button) => {
    const collapsed = panelState[button.dataset.panelToggle];
    button.setAttribute("aria-expanded", String(!collapsed));
  });
  localStorage.setItem(panelStorageKey, JSON.stringify(panelState));
  window.setTimeout(() => map.invalidateSize(), 220);
}

document.querySelectorAll("[data-panel-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.panelToggle;
    panelState[key] = !panelState[key];
    renderPanelState();
  });
});

createMarkers();
renderFishOptions();
render();
renderPanelState();
map.on("moveend", scheduleWeatherUpdate);
scheduleWeatherUpdate();

const initialMode = new URLSearchParams(window.location.search).get("mode");
if (initialMode === "freshwater") setMode("freshwater");
