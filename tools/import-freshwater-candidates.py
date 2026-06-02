import html
import json
import re
from pathlib import Path
from urllib.parse import urljoin
from urllib.request import Request, urlopen


BASE_URL = "https://fishingpoint.kr/fwfishing"
OUT = Path(__file__).resolve().parents[1] / "data" / "freshwater-candidates.json"
EXCLUDED = re.compile(r"낚시터|좌대|글램핑|축제|유료|하우스")
LOCATION_HINTS = [
    re.compile(
        r"(?:경기도|강원(?:특별자치도|도)?|충청북도|충청남도|전라북도|전라남도|"
        r"경상북도|경상남도|인천(?:광역시)?|대구(?:광역시)?|부산(?:광역시)?|"
        r"서울(?:특별시)?|제주(?:특별자치도)?)"
        r"[^<\n]{0,80}?[가-힣]+리\s+\d{1,5}(?:-\d{1,5})?"
    ),
    re.compile(r"(?:[가-힣]{2,10}교권|[가-힣]{2,10}수문|금강휴게소|백양리역)"),
]


def fetch(url):
    request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urlopen(request, timeout=30) as response:
        return response.read().decode("utf-8", "ignore")


def clean(value):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", value))).strip()


def main():
    links = {}
    for page in range(1, 9):
        markup = fetch(f"{BASE_URL}?page={page}")
        for href, title in re.findall(r'<a[^>]+href="([^"]*?/fwfishing/[^"]+)"[^>]*>(.*?)</a>', markup, re.S):
            title = clean(title)
            if not title or EXCLUDED.search(title):
                continue
            links[urljoin(BASE_URL, href.split("?")[0])] = title

    candidates = []
    for url, title in sorted(links.items()):
        markup = fetch(url)
        description = re.search(r'<meta name="description" content="([^"]*)"', markup)
        text = clean(f"{title} {description.group(1) if description else ''}")
        hint = next((pattern.search(text) for pattern in LOCATION_HINTS if pattern.search(text)), None)
        if not hint:
            continue
        candidates.append(
            {
                "title": title,
                "locationHint": hint.group(0),
                "sourceUrl": url,
                "status": "좌표 검증 대기",
                "publish": False,
            }
        )

    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(candidates, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(candidates)} candidates to {OUT}")


if __name__ == "__main__":
    main()
