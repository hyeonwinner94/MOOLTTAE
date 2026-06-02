// Daeho Bay curation. Entry pins are reference locations, not guaranteed bank access.
const daehoFreshwaterFishingSpots = [
  {
    id: "fresh-daeho-main-bass", name: "대호만 본류 배스 탐사권", region: "충청권", area: "충남 당진시·서산시 대호지",
    lat: 36.9415413, lng: 126.505281, difficulty: "중급", level: "medium", fish: ["배스"],
    type: "호수·강", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 대호지 수역 좌표",
    desc: "대물 배스 루어 조황이 소개된 대호만 본류 탐사 기준점입니다.",
    tip: "넓은 본류의 대표 좌표입니다. 바람 방향과 수위에 따라 연안 탐색 구간을 조정하세요.",
    curated: true, freshwater: true, warning: "본류 대표 좌표입니다. 실제 연안 진입로, 농로 통행과 낚시 금지 표지를 현장에서 확인하세요.",
    sources: [{ label: "낚시포인트 대호만 배스 원문", url: "https://fishingpoint.kr/fwfishing/%EC%B6%A9%EB%82%A8-%EB%8B%B9%EC%A7%84-%EB%8C%80%ED%98%B8%EB%A7%8C-%EB%B0%B0%EC%8A%A4-%EB%A3%A8%EC%96%B4%EB%82%9A%EC%8B%9C-%EB%8C%80%EB%AC%BC-%EB%B0%B0%EC%8A%A4-%ED%8F%AC%EC%9D%B8%ED%8A%B8/" }]
  },
  {
    id: "fresh-daeho-daesan-canal", name: "대호만 대산수로권", region: "충청권", area: "충남 서산시 대산읍",
    lat: 36.942386, lng: 126.4271704, difficulty: "중급", level: "medium", fish: ["붕어", "배스"],
    type: "수로", season: "봄·가을", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 대산리 마을 좌표",
    desc: "붕어 조황 원문과 대호만 배스 자료에서 함께 확인되는 대산수로 탐색권입니다.",
    tip: "대산리 마을 기준점입니다. 대산0번·1번수로 등 실제 탐색 구간은 현장 수위와 농로 접근 상태를 확인하세요.",
    curated: true, freshwater: true, warning: "마을 기준점입니다. 농로 주차, 수문 시설 접근 제한과 사유지를 확인하세요.",
    sources: [
      { label: "낚시포인트 대산수로 원문", url: "https://fishingpoint.kr/fwfishing/%EC%84%9C%EC%82%B0-%EB%8C%80%ED%98%B8%EB%A7%8C-%EB%8C%80%EC%82%B0%EC%88%98%EB%A1%9C-%EB%AF%BC%EB%AC%BC-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%86%90%EB%A7%9B%ED%84%B0-%EC%A1%B0%ED%99%A9-%EC%A0%95%EB%B3%B4/" },
      { label: "낚시춘추 대호 유망 배스터 자료", url: "https://m.fishingseasons.co.kr/news_Detail.asp?b_no=13085" }
    ]
  },
  {
    id: "fresh-daeho-doiri", name: "대호만 도이리권", region: "충청권", area: "충남 당진시 대호지면 도이리",
    lat: 36.93202, lng: 126.53971, difficulty: "중급", level: "medium", fish: ["붕어", "배스"],
    type: "수로", season: "봄·가을", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 도이리 마을 좌표",
    desc: "붕어 출조 기록이 공개된 대호만 도이리 일대 탐색 기준점입니다.",
    tip: "도이리 마을 기준점입니다. 실제 연안 포인트는 수초대와 농로 접근 상태를 보며 추가 탐색하세요.",
    curated: true, freshwater: true, warning: "마을 기준점입니다. 농기계 통행과 사유지를 방해하지 않도록 주의하세요.",
    sources: [{ label: "낚시포인트 도이리 원문", url: "https://fishingpoint.kr/fwfishing/%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EB%8C%80%ED%98%B8%EB%A7%8C-%EB%8F%84%EC%9D%B4%EB%A6%AC-carp-fishing-daeho-bay-daiguri/" }]
  }
];
