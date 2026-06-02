const guideState = { category: "knots", selectedId: "improved-clinch" };
const NS = "http://www.w3.org/2000/svg";

function svgMarkup(content, label) {
  return `<figure class="guide-figure"><svg viewBox="0 0 320 230" role="img" aria-label="${label}">${content}</svg><figcaption>${label}</figcaption></figure>`;
}

function label(x, y, text, anchor = "start") {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="svg-label">${text}</text>`;
}

function number(x, y, value) {
  return `<circle cx="${x}" cy="${y}" r="11" class="svg-number"/><text x="${x}" y="${y + 4}" text-anchor="middle" class="svg-number-text">${value}</text>`;
}

function renderKnotDiagram(id) {
  const ring = '<circle cx="248" cy="112" r="22" class="svg-ring"/>';
  if (id === "fg") {
    return svgMarkup(`
      ${label(22, 28, "PE 원줄")} ${label(232, 28, "쇼크리더")}
      <path d="M20 52 H285" class="svg-leader"/>
      <path d="M65 36 C82 52 82 66 98 52 S114 38 130 52 S146 66 162 52 S178 38 194 52 S210 66 226 52" class="svg-line"/>
      ${number(54, 92, 1)} ${label(74, 96, "리더를 따라 교차 감기 12~20회")}
      <path d="M96 126 C120 106 146 146 170 126 C194 106 218 146 242 126" class="svg-line"/>
      ${number(54, 132, 2)} ${label(74, 136, "하프히치로 고정")}
      <path d="M62 180 H266" class="svg-leader"/><path d="M112 166 Q132 190 152 166 Q172 190 192 166" class="svg-line"/>
      ${number(54, 182, 3)} ${label(74, 207, "젖힌 뒤 강하게 조이고 마감")}
    `, "FG 노트 연결 구조");
  }
  if (id === "palomar") {
    return svgMarkup(`
      ${ring}<path d="M28 88 H222 M28 136 H222" class="svg-line"/>
      ${number(38, 54, 1)} ${label(58, 58, "줄을 두 겹으로 접어 고리에 통과")}
      <path d="M72 174 C102 142 138 206 168 174 C190 150 212 156 230 174" class="svg-line"/>
      ${number(38, 174, 2)} ${label(58, 212, "한 번 묶고 고리를 루어 전체에 넘기기")}
    `, "팔로마 노트 연결 구조");
  }
  if (id === "uni") {
    return svgMarkup(`
      ${ring}<path d="M24 112 H226" class="svg-leader"/>
      <path d="M42 142 C76 168 108 168 136 142 C110 118 82 118 56 142 M66 142 Q82 126 98 142 T130 142" class="svg-line"/>
      ${number(38, 54, 1)} ${label(58, 58, "고리에 통과 후 고리 만들기")}
      ${number(38, 194, 2)} ${label(58, 198, "고리 안으로 5~7회 감고 당기기")}
    `, "유니 노트 연결 구조");
  }
  return svgMarkup(`
    ${ring}<path d="M24 112 H226" class="svg-leader"/>
    <path d="M76 80 Q94 112 112 80 T148 80 T184 80" class="svg-line"/>
    <path d="M184 80 C198 92 204 118 182 136 C150 158 126 132 150 116" class="svg-line"/>
    ${number(38, 54, 1)} ${label(58, 58, "고리에 넣고 원줄에 5~7회 감기")}
    ${number(38, 192, 2)} ${label(58, 196, "틈과 새 고리를 통과해 천천히 조이기")}
  `, "개량 클린치 노트 연결 구조");
}

function renderRigDiagram(item) {
  const parts = item.parts || ["낚싯대·릴", "원줄", "채비 연결부", "바늘 또는 루어"];
  const startY = 24;
  const spacing = Math.min(34, 172 / Math.max(parts.length - 1, 1));
  const nodes = parts.map((part, index) => {
    const y = startY + spacing * index;
    const line = index < parts.length - 1 ? `<line x1="84" y1="${y + 10}" x2="84" y2="${y + spacing - 10}" class="svg-leader"/>` : "";
    const shape = /봉돌|싱커|묶음추/.test(part)
      ? `<path d="M74 ${y - 8} H94 L100 ${y} L94 ${y + 8} H74 L68 ${y} Z" class="svg-weight"/>`
      : /찌/.test(part)
        ? `<ellipse cx="84" cy="${y}" rx="9" ry="15" class="svg-float"/>`
        : /바늘|훅/.test(part)
          ? `<path d="M78 ${y - 10} V${y + 5} Q78 ${y + 15} 92 ${y + 10}" class="svg-hook"/>`
          : /에기|웜|지그/.test(part)
            ? `<path d="M70 ${y} Q84 ${y - 13} 100 ${y} Q84 ${y + 13} 70 ${y} Z" class="svg-lure"/>`
            : `<circle cx="84" cy="${y}" r="8" class="svg-node"/>`;
    return `${line}${shape}${label(112, y + 4, part)}`;
  }).join("");
  return svgMarkup(`${label(22, 17, "연결 순서", "start")}${nodes}`, `${item.title} 연결 도식`);
}

function renderGuideDiagram(item) {
  return item.category === "knots" ? renderKnotDiagram(item.id) : renderRigDiagram(item);
}

function renderGuide() {
  const category = fishingGuideCategories.find((item) => item.id === guideState.category);
  const items = fishingGuideItems.filter((item) => item.category === guideState.category);
  document.getElementById("guideCategoryFilters").innerHTML = fishingGuideCategories.map((item) => `
    <button class="guide-category ${item.id === guideState.category ? "active" : ""}" data-guide-category="${item.id}" type="button">
      <i>${item.icon}</i><span>${item.label}</span>
    </button>
  `).join("");
  document.getElementById("guideCategoryTitle").textContent = category.label;
  document.getElementById("guideCategoryDescription").textContent = category.description;
  document.getElementById("guideCardGrid").innerHTML = items.map((item) => `
    <button class="guide-card ${item.id === guideState.selectedId ? "active" : ""}" data-guide-item="${item.id}" type="button">
      <span class="guide-card-top"><span class="guide-card-tag">${item.level}</span><span class="guide-card-time">${item.duration}</span></span>
      <h3>${item.title}</h3><p>${item.summary}</p>
    </button>
  `).join("");
  document.querySelectorAll("[data-guide-category]").forEach((button) => button.addEventListener("click", () => {
    guideState.category = button.dataset.guideCategory;
    guideState.selectedId = fishingGuideItems.find((item) => item.category === guideState.category).id;
    renderGuide();
  }));
  document.querySelectorAll("[data-guide-item]").forEach((button) => button.addEventListener("click", () => {
    guideState.selectedId = button.dataset.guideItem;
    renderGuide();
  }));
  renderGuideDetail();
}

function renderGuideDetail() {
  const item = fishingGuideItems.find((entry) => entry.id === guideState.selectedId);
  const sources = (item.sources || []).map((source) => `<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`).join("");
  const videoQuery = fishingGuideVideoQueries[item.id] || `${item.title} 낚시 방법`;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(videoQuery)}`;
  document.getElementById("guideDetail").innerHTML = `
    <p class="eyebrow">${item.level} · ${item.duration}</p>
    <h2>${item.title}</h2>
    <p class="guide-detail-summary">${item.summary}</p>
    ${renderGuideDiagram(item)}
    <p class="guide-use">언제 쓰나요? ${item.when}</p>
    <section class="guide-video">
      <div><b>영상으로 따라 해보기</b><span>${videoQuery}</span></div>
      <a href="${youtubeUrl}" target="_blank" rel="noopener noreferrer">YouTube 영상 찾기</a>
    </section>
    <h3>순서와 핵심 개념</h3>
    <ol class="guide-steps">${item.steps.map((step, index) => `<li><b>${index + 1}</b><span>${step}</span></li>`).join("")}</ol>
    <h3>현장 팁</h3>
    <ul class="guide-tips">${item.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
    ${sources ? `<h3>참고 자료</h3><div class="guide-sources">${sources}</div>` : ""}
  `;
}

renderGuide();
