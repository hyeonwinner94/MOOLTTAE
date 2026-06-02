// Curated natural freshwater fishing areas.
// Coordinates are reference pins, not a guarantee that every nearby bank is open.
const freshwaterFishingSpots = [
  {
    id: "fresh-curated-hyochon", name: "양주 효촌저수지", region: "수도권", area: "경기 양주시 남면",
    lat: 37.87422, lng: 126.9672481, difficulty: "중급", level: "medium", fish: ["붕어"],
    type: "저수지", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "생자리 포인트 조황이 소개된 양주권 무료 노지 저수지입니다.",
    tip: "저수지 중심 기준점입니다. 연안 진입로와 사유지 여부는 현장에서 확인하세요.",
    curated: true, freshwater: true, warning: "저수지 수역 기준점입니다. 출입 가능한 연안은 현장 표지판을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%96%91%EC%A3%BC-%ED%9A%A8%EC%B4%8C%EC%A0%80%EC%88%98%EC%A7%80-%EC%83%9D%EC%9E%90%EB%A6%AC%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%A1%B0%ED%99%A9%EC%A0%95%EB%B3%B4/" }]
  },
  {
    id: "fresh-curated-mangsil", name: "강화 망실지", region: "수도권", area: "인천 강화군 양도면",
    lat: 37.6364967, lng: 126.4641083, difficulty: "초급", level: "easy", fish: ["붕어"],
    type: "저수지", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "마릿수 붕어 조황으로 소개된 강화도 무료 노지 소류지입니다.",
    tip: "소류지 주변 농로 통행을 방해하지 않도록 주차 위치를 확인하세요.",
    curated: true, freshwater: true, warning: "농업용 저수지는 현장 상황에 따라 출입이 제한될 수 있습니다.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%84%9C%EC%9A%B8%EA%B7%BC%EA%B5%90-%EA%B0%95%ED%99%94%EB%8F%84-%EB%A7%9D%EC%8B%A4%EC%A7%80-%EB%A7%88%EB%A6%BF%EC%88%98-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%88%98%EB%8F%84%EA%B6%8C-%EB%AC%B4%EB%A3%8C/" }]
  },
  {
    id: "fresh-curated-dogo", name: "아산 도고저수지", region: "충청권", area: "충남 아산시 신유리",
    lat: 36.7433748, lng: 126.9116489, difficulty: "중급", level: "medium", fish: ["붕어"],
    type: "저수지", season: "겨울·봄", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "수몰나무 주변 붕어와 겨울 얼음낚시 조황이 소개된 저수지입니다.",
    tip: "얼음낚시는 결빙 두께와 지자체 통제 여부를 먼저 확인하세요.",
    curated: true, freshwater: true, warning: "얼음 위 진입은 안전 확인 없이는 금지입니다.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%B6%A9%EB%82%A8-%EC%95%84%EC%82%B0-%EB%8F%84%EA%B3%A0%EC%A7%80-%EC%96%BC%EC%9D%8C%EB%82%9A%EC%8B%9C-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EB%AC%B4%EB%A3%8C-%EB%85%B8%EC%A7%80-%EB%82%9A%EC%8B%9C%ED%84%B0/" }]
  },
  {
    id: "fresh-curated-baekgok", name: "진천 백곡저수지", region: "충청권", area: "충북 진천군 건송리",
    lat: 36.869998, lng: 127.4050994, difficulty: "초급", level: "easy", fish: ["빙어", "붕어"],
    type: "저수지", season: "겨울", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "겨울 빙어낚시와 얼음낚시 조황이 소개된 진천권 저수지입니다.",
    tip: "결빙 상태는 매년 달라집니다. 현장 통제선이 있으면 진입하지 마세요.",
    curated: true, freshwater: true, warning: "얼음 위 진입은 현장 안전 확인이 필수입니다.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%B6%A9%EB%B6%81-%EC%A7%84%EC%B2%9C-%EB%B0%B1%EA%B3%A1%EC%A0%80%EC%88%98%EC%A7%80-%EB%B9%99%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%96%BC%EC%9D%8C%EB%82%9A%EC%8B%9C-%EB%B9%99%EC%96%B4%EB%82%9A%EC%8B%9C%EC%B1%84%EB%B9%84-%EB%AF%BC%EB%AC%BC%EB%82%9A%EC%8B%9C-%EC%A1%B0%ED%99%A9/" }]
  },
  {
    id: "fresh-curated-sangcheon", name: "가평 상천저수지", region: "수도권", area: "경기 가평군 상천리",
    lat: 37.7685332, lng: 127.4752034, difficulty: "중급", level: "medium", fish: ["배스"],
    type: "저수지", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "가평권 배스 포인트로 소개된 산지 저수지입니다.",
    tip: "연안 캐스팅 지점과 주차 가능 구간은 현장에서 확인하세요.",
    curated: true, freshwater: true, warning: "배스는 생태계교란 생물입니다. 관련 처리 규정을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EA%B0%80%ED%8F%89%EB%B0%B0%EC%8A%A4-%EA%B2%BD%EA%B8%B0%EB%8F%84%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%83%81%EC%B2%9C%EC%A0%80%EC%88%98%EC%A7%80-%EC%B2%AD%ED%8F%89/" }]
  },
  {
    id: "fresh-curated-geumgwang", name: "안성 금광저수지", region: "수도권", area: "경기 안성시 금광면",
    lat: 36.9924769, lng: 127.3318561, difficulty: "중급", level: "medium", fish: ["배스", "붕어"],
    type: "저수지", season: "가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "가을 배스 조황과 붕어낚시가 함께 소개된 안성권 저수지입니다.",
    tip: "넓은 수역이므로 이동 전 접근 가능한 연안을 확인하세요.",
    curated: true, freshwater: true, warning: "수역 중심 좌표입니다. 사유지와 통제 구간을 피하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EA%B8%88%EA%B4%91%EC%A7%80-%EA%B0%80%EC%9D%84-%EB%B0%B0%EC%8A%A4%EB%82%9A%EC%8B%9C-%EB%91%90-%EC%9E%90%EB%A6%BF-%EC%88%98-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EA%B3%B5%EA%B0%9C/" }]
  },
  {
    id: "fresh-curated-wolsan", name: "청도 월산지", region: "경상권", area: "경북 청도군 풍각면 월봉리",
    lat: 35.6036323, lng: 128.5891721, difficulty: "중급", level: "medium", fish: ["붕어"],
    type: "저수지", season: "가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "가을 토종붕어 조황이 소개된 청도권 저수지입니다.",
    tip: "농업용 저수지 주변 농로와 경작지 진입에 주의하세요.",
    curated: true, freshwater: true, warning: "수역 기준점입니다. 현장 출입 가능 구간을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/ep45-%EA%B0%80%EC%9D%84%EC%9D%98-%EC%A0%88%EC%A0%95-%EC%B2%AD%EB%8F%84-%EC%9B%94%EC%82%B0%EC%A7%80/" }]
  },
  {
    id: "fresh-curated-danseok", name: "양평 단석저수지", region: "수도권", area: "경기 양평군 양동면 단석리",
    lat: 37.4024593, lng: 127.7377555, difficulty: "중급", level: "medium", fish: ["붕어", "배스"],
    type: "저수지", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 저수지 좌표",
    desc: "대물 붕어와 배스 포인트로 소개된 양평권 저수지입니다.",
    tip: "원문에 단석리 447-1 주소 단서가 있습니다. 실제 자리 선택은 연안 상태를 확인하세요.",
    curated: true, freshwater: true, warning: "수역 기준점입니다. 경작지와 사유지를 침범하지 마세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%96%91%ED%8F%89-%EB%8B%A8%EC%84%9D%EC%A7%80-%EB%82%9A%EC%8B%9C-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EA%B8%B0%EB%A1%9D%EA%B0%B1%EC%8B%A0-4%EC%A7%9C-%EB%B6%95%EC%96%B4/" }]
  },
  {
    id: "fresh-curated-gulpocheon", name: "계양 굴포천", region: "수도권", area: "인천 계양구 계양3동",
    lat: 37.5773407, lng: 126.7753154, difficulty: "초급", level: "easy", fish: ["붕어"],
    type: "하천", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 하천 좌표",
    desc: "서울 근교 무료 노지 붕어 포인트로 소개된 굴포천 구간입니다.",
    tip: "도심 하천은 구간별 통제와 보행 동선이 다릅니다. 현장 안내를 우선하세요.",
    curated: true, freshwater: true, warning: "하천 구간 기준점입니다. 낚시 금지 표지와 보행자 동선을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%9D%B8%EC%B2%9C-%EA%B3%84%EC%96%91-%EA%B5%B4%ED%8F%AC%EC%B2%9C-%EB%AC%B4%EB%A3%8C-%EB%85%B8%EC%A7%80-%EB%B6%95%EC%96%B4-%EB%82%9A%EC%8B%9C%ED%84%B0-%EC%84%9C%EC%9A%B8%EA%B7%BC%EA%B5%90/" }]
  },
  {
    id: "fresh-curated-naegacheon", name: "강화 망월수로·내가천", region: "수도권", area: "인천 강화군 내가면",
    lat: 37.7257756, lng: 126.3896422, difficulty: "초급", level: "easy", fish: ["붕어", "잉어"],
    type: "수로", season: "가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 수로 좌표",
    desc: "붕어와 잉어 조황이 소개된 강화도 망월수로 내가천 구간입니다.",
    tip: "수로는 농번기 수위와 배수 상태가 크게 달라집니다.",
    curated: true, freshwater: true, warning: "농수로 기준점입니다. 농기계 통행과 수문 주변 안전에 주의하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EA%B0%95%ED%99%94%EB%8F%84-%EB%A7%9D%EC%9B%94%EC%88%98%EB%A1%9C%EB%82%B4%EA%B0%80%EC%B2%9C-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%9E%89%EC%96%B4%EB%82%9A%EC%8B%9C-5%EC%A7%9C-%EC%9E%89%EC%96%B4-%EC%84%9C%EC%9A%B8%EA%B7%BC%EA%B5%90-%EB%AC%B4%EB%A3%8C/" }]
  },
  {
    id: "fresh-curated-samheungcheon", name: "강화 삼흥천수로", region: "수도권", area: "인천 강화군 양도면",
    lat: 37.6894191, lng: 126.3972061, difficulty: "초급", level: "easy", fish: ["붕어"],
    type: "수로", season: "겨울", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 하천 좌표",
    desc: "저수온기 붕어 포인트로 소개된 강화도 삼흥천 수로입니다.",
    tip: "수로변 농로 주차와 결빙 구간에 주의하세요.",
    curated: true, freshwater: true, warning: "수로 구간 기준점입니다. 현장 수위와 통행을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%A0%80%EC%88%98%EC%98%A8%EA%B8%B0-%EB%B6%95%EC%96%B4-%EB%B3%BC%EC%88%98%EC%9E%88%EB%8A%94-%EA%B0%95%ED%99%94%EB%8F%84-%EC%82%BC%ED%9D%A5%EC%B2%9C%EC%88%98%EB%A1%9C/" }]
  },
  {
    id: "fresh-curated-gongneung", name: "파주 공릉천 쪽수로", region: "수도권", area: "경기 파주시 교하동",
    lat: 37.7485628, lng: 126.7683529, difficulty: "초급", level: "easy", fish: ["붕어"],
    type: "수로", season: "봄·가을", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 자전거길 출입로",
    desc: "생자리 붕어 마릿수 조황이 소개된 공릉천 쪽수로 탐색 기준점입니다.",
    tip: "자전거길 출입로 기준 핀입니다. 보행자와 자전거 통행을 방해하지 마세요.",
    curated: true, freshwater: true, warning: "출입로 기준점입니다. 실제 낚시 가능 구간은 현장 안내를 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%83%9D%EC%9E%90%EB%A6%AC-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%98%A4%EB%9E%9C%EB%A7%8C%EC%97%90-%EB%A7%88%EB%A6%BF%EC%88%98-%EC%86%90%EB%A7%9B/" }]
  },
  {
    id: "fresh-curated-okdong", name: "영월 옥동천", region: "강원권", area: "강원 영월군 김삿갓면 옥동리",
    lat: 37.1248507, lng: 128.5779348, difficulty: "중급", level: "medium", fish: ["송어", "꺽지", "피라미"],
    type: "하천", season: "봄·여름", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 하천 좌표",
    desc: "송어와 꺽지 루어낚시가 소개된 영월 옥동천 구간입니다.",
    tip: "계류 낚시는 미끄럼 방지화와 구명 장비를 준비하세요.",
    curated: true, freshwater: true, warning: "하천 수위와 금어기, 금지 체장을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%98%81%EC%9B%94-%EC%98%A5%EB%8F%99%EC%B2%9C-%EC%86%A1%EC%96%B4%EB%82%9A%EC%8B%9C-%EA%BA%BD%EC%A7%80%EB%82%9A%EC%8B%9C/" }]
  },
  {
    id: "fresh-curated-jeongan", name: "공주 정안천", region: "충청권", area: "충남 공주시 정안천",
    lat: 36.5634995, lng: 127.1227832, difficulty: "초급", level: "easy", fish: ["붕어"],
    type: "하천", season: "오름수위", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 하천 좌표",
    desc: "오름수위 붕어 출조 포인트로 소개된 공주 정안천 구간입니다.",
    tip: "강우 직후에는 유속과 범람 위험을 먼저 확인하세요.",
    curated: true, freshwater: true, warning: "하천 수위가 빠르게 바뀔 수 있습니다.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EA%B3%B5%EC%A3%BC-%EC%A0%95%EC%95%88%EC%B2%9C-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%98%A4%EB%A6%84%EC%88%98%EC%9C%84-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%B6%9C%EC%A1%B0/" }]
  },
  {
    id: "fresh-curated-pyeongchang", name: "평창강", region: "강원권", area: "강원 평창군",
    lat: 37.34229, lng: 128.3720748, difficulty: "숙련", level: "hard", fish: ["쏘가리", "송어"],
    type: "호수·강", season: "봄·가을", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 강 좌표",
    desc: "쏘가리와 무지개송어 루어 포인트로 소개된 평창강 탐색 기준점입니다.",
    tip: "강 전체를 가리키는 기준점입니다. 여울과 접근로는 현장에서 확인하세요.",
    curated: true, freshwater: true, warning: "강 수위, 금어기와 금지 체장을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EA%B0%95%EC%9B%90%EB%8F%84-%ED%8F%89%EC%B0%BD%EA%B0%95-%EC%8F%98%EA%B0%80%EB%A6%AC%EB%82%9A%EC%8B%9C-%EB%AC%B4%EC%A7%80%EA%B0%9C%EC%86%A1%EC%96%B4-%EB%A3%A8%EC%96%B4%EB%82%9A%EC%8B%9C-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EC%B6%94%EC%B2%9C/" }]
  },
  {
    id: "fresh-curated-hongcheon", name: "홍천강 견지낚시 구간", region: "강원권", area: "강원 홍천군",
    lat: 37.6819063, lng: 127.7312267, difficulty: "중급", level: "medium", fish: ["누치", "피라미"],
    type: "호수·강", season: "여름", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 강 좌표",
    desc: "소매곡교와 하이트여울 견지낚시 조황이 소개된 홍천강 탐색 기준점입니다.",
    tip: "강 전체 기준점입니다. 원문에 소개된 여울 접근로를 현장에서 확인하세요.",
    curated: true, freshwater: true, warning: "여울 진입 전 유속과 수심을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%ED%99%8D%EC%B2%9C%EA%B0%95-%EA%B2%AC%EC%A7%80%EB%82%9A%EC%8B%9C-%EC%A1%B0%ED%99%A9-%EC%86%8C%EB%A7%A4%EA%B3%A1%EA%B5%90-%ED%95%98%EC%9D%B4%ED%8A%B8%EC%97%AC%EC%9A%B8-%EA%B2%AC%EC%A7%80%EB%82%9A%EC%8B%9C-%EB%AF%BC%EB%AC%BC%EB%82%9A%EC%8B%9C/" }]
  },
  {
    id: "fresh-curated-gunchuk", name: "소양호 인제 군축교권", region: "강원권", area: "강원 인제군 인제읍",
    lat: 38.0389531, lng: 128.1539076, difficulty: "중급", level: "medium", fish: ["붕어", "떡붕어"],
    type: "호수·강", season: "오름수위", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 군축교 좌표",
    desc: "오름수위 떡붕어와 캠낚 포인트로 소개된 소양호 군축교권입니다.",
    tip: "교량 기준점입니다. 수위에 따라 물가 접근선이 크게 달라집니다.",
    curated: true, freshwater: true, warning: "교량 주변 주정차와 수위 변화를 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%86%8C%EC%96%91%ED%98%B8-%EC%9D%B8%EC%A0%9C-%EC%8B%A0%EB%82%A8-%EA%B5%B0%EC%B6%95%EA%B5%90-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-%EC%98%A4%EB%A6%84%EC%88%98%EC%9C%84-%EB%96%A1%EB%B6%95%EC%96%B4-4%EC%A7%9C/" }]
  },
  {
    id: "fresh-curated-jumi", name: "이천 복하천 주미교권", region: "수도권", area: "경기 이천시 호법면 주미리",
    lat: 37.218466, lng: 127.427269, difficulty: "초급", level: "easy", fish: ["붕어"],
    type: "하천", season: "봄·가을", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 주미교 좌표",
    desc: "대물 붕어 무료 노지로 소개된 복하천 주미교 주변입니다.",
    tip: "교량 기준점이라 초행 탐색이 쉽습니다. 하천 제방 차량 통행을 방해하지 마세요.",
    curated: true, freshwater: true, warning: "교량 주변 안전과 하천 수위를 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%84%9C%EC%9A%B8%EA%B7%BC%EA%B5%90-%EC%9D%B4%EC%B2%9C-%EB%B3%B5%ED%99%94%EC%B2%9C-%EC%A3%BC%EB%AF%B8%EA%B5%90%EA%B6%8C-%EB%AC%B4%EB%A3%8C%EB%85%B8%EC%A7%80-%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C-4%EC%A7%9C%EB%B6%95%EC%96%B4%EA%B0%80-%EB%82%98%EC%98%A4%EB%8A%94/" }]
  },
  {
    id: "fresh-curated-baegyang", name: "북한강 백양리역권", region: "강원권", area: "강원 춘천시 남산면",
    lat: 37.8308075, lng: 127.5891833, difficulty: "초급", level: "easy", fish: ["누치", "피라미"],
    type: "호수·강", season: "여름", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 백양리역 좌표",
    desc: "전철로 접근 가능한 북한강 견지낚시 포인트로 소개된 백양리역권입니다.",
    tip: "역을 기준으로 물가 접근로를 확인하세요. 유속이 빠르면 진입하지 마세요.",
    curated: true, freshwater: true, warning: "역 기준점입니다. 수변 접근 가능 여부와 유속을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EA%B0%95%EC%B4%8C-%EB%B0%B1%EC%96%91%EB%A6%AC%EC%97%AD-%EC%A7%80%ED%95%98%EC%B2%A0%ED%83%80%EA%B3%A0-%EB%B6%81%ED%95%9C%EA%B0%95-%EA%B2%AC%EC%A7%80%EB%82%9A%EC%8B%9C-%EB%8F%84%EC%A0%84-%EB%8C%80%EB%AC%BC-%EB%88%84%EC%B9%98%EB%82%9A%EC%8B%9C%EB%A7%8C%EC%9B%90%EC%9D%98/" }]
  },
  {
    id: "fresh-curated-geumgang-rest", name: "금강휴게소 금강변", region: "충청권", area: "충북 옥천군 동이면 조령리",
    lat: 36.2792558, lng: 127.6719517, difficulty: "초급", level: "easy", fish: ["피라미"],
    type: "호수·강", season: "여름", tide: "진입 기준점", coordinateConfidence: "진입 기준점 · OSM 금강휴게소 좌표",
    desc: "차박과 아이들 체험 낚시가 가능한 곳으로 소개된 금강휴게소 금강변입니다.",
    tip: "휴게소 기준점입니다. 쓰레기는 반드시 되가져가세요.",
    curated: true, freshwater: true, warning: "휴게소 수변 기준점입니다. 현장 안전선과 수상레저 동선을 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%EC%B0%A8%EB%B0%95-%EC%BA%A0%ED%95%91-%EB%82%9A%EC%8B%9C%EA%B0%80-%EA%B0%80%EB%8A%A5%ED%95%9C-%EA%B8%88%EA%B0%95%ED%9C%B4%EA%B2%8C%EC%86%8C-%ED%94%BC%EB%9D%BC%EB%AF%B8%EB%82%9A%EC%8B%9C-%ED%8F%AC%EC%9D%B8%ED%8A%B8-%EB%AA%A8%EB%93%A0%EA%B2%8C/" }]
  },
  {
    id: "fresh-curated-pyeongtaek", name: "평택호·진위천 백봉리수로", region: "수도권", area: "경기 평택시",
    lat: 36.935879, lng: 126.9840035, difficulty: "중급", level: "medium", fish: ["붕어"],
    type: "호수·강", season: "겨울", tide: "수역 기준점", coordinateConfidence: "수역 기준점 · OSM 평택호 좌표",
    desc: "겨울 붕어 포인트로 소개된 평택호 진위천 백봉리수로 탐색 기준점입니다.",
    tip: "평택호 중심 기준점입니다. 백봉리수로 접근 위치는 현장에서 추가 확인하세요.",
    curated: true, freshwater: true, warning: "넓은 수역의 탐색 기준점입니다. 정확한 연안 진입로를 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: "https://fishingpoint.kr/fwfishing/%ED%8F%89%ED%83%9D%ED%98%B8-%EC%A7%84%EC%9C%84%EC%B2%9C-%EB%B0%B1%EB%B4%89%EB%A6%AC%EC%88%98%EB%A1%9C-%ED%83%90%EC%82%AC%EA%B2%A8%EC%9A%B8%EC%8B%9C%EC%A6%8C-%EC%B5%9C%EA%B3%A0-%ED%8F%AC%EC%9D%B8%ED%8A%B8%EB%82%B4%EB%A6%BC%EB%82%9A%EC%8B%9C%EB%B6%95%EC%96%B4%EB%82%9A%EC%8B%9C%EC%A0%84%EC%B8%B5%EB%82%9A%EC%8B%9C%EC%A4%91%EC%B8%B5%EB%82%9A%EC%8B%9C/" }]
  }
];
