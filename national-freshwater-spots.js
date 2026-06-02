// Nationwide natural freshwater curation.
// Coordinates are OSM reference pins. Always verify access restrictions on site.
const nationalFreshwaterFishingSpots = [
  { id: "fresh-national-wangsuk", name: "남양주 왕숙천", region: "수도권", area: "경기 남양주시", lat: 37.7050463, lng: 127.1696799, level: "easy", fish: ["붕어"], type: "하천", season: "가을", desc: "가을 붕어 조황이 소개된 남양주권 하천입니다.", sourceSlug: "경기도-남양주-왕숙천-가을-붕어낚시-무료낚시포인트" },
  { id: "fresh-national-namhan", name: "남한강 원투낚시권", region: "수도권", area: "경기 여주시 일대", lat: 37.0625166, lng: 127.8828389, level: "easy", fish: ["붕어", "잉어"], type: "호수·강", season: "봄·가을", desc: "원투낚시와 캠핑낚시 조황이 소개된 남한강 수계입니다.", sourceSlug: "서울근교-남한강-원투낚시-캠핑낚시-차박캠핑-무료노지-민물낚시-캠핑" },
  { id: "fresh-national-hantan", name: "한탄강 쏘가리 탐사권", region: "수도권", area: "경기 연천군 일대", lat: 38.2424281, lng: 127.2573429, level: "hard", fish: ["쏘가리"], type: "호수·강", season: "봄·여름", desc: "쏘가리 루어 조황이 소개된 한탄강 수계입니다.", sourceSlug: "한탄강-쏘가리-루어낚시-조황-포인트-추천" },
  { id: "fresh-national-giljeong", name: "강화 길정지", region: "수도권", area: "인천 강화군 길상면", lat: 37.6557632, lng: 126.4710252, level: "medium", fish: ["배스"], type: "저수지", season: "봄·여름", desc: "배스 루어 조황이 소개된 강화권 저수지입니다.", sourceSlug: "서울근교-강화-길정지-민물-루어-배스낚시-폭염에-낚시가" },
  { id: "fresh-national-misan", name: "안성 미산저수지", region: "수도권", area: "경기 안성시 양성면", lat: 37.1326256, lng: 127.2570356, level: "easy", fish: ["배스"], type: "저수지", season: "봄·여름", desc: "맑은 물 배스 루어 조황이 소개된 안성권 저수지입니다.", sourceSlug: "서울근교-안성-미산저수지-배스낚시-물이-맑아-다슬기-사는곳" },
  { id: "fresh-national-chilgok", name: "안성 칠곡저수지", region: "수도권", area: "경기 안성시 원곡면", lat: 37.0470731, lng: 127.153506, level: "easy", fish: ["배스"], type: "저수지", season: "봄·여름", desc: "배스 루어 조황이 소개된 안성권 저수지입니다.", sourceSlug: "수도권-안성-칠곡저수지-배스낚시-루어낚시" },
  { id: "fresh-national-deokwoo", name: "화성 덕우저수지", region: "수도권", area: "경기 화성시 봉담읍", lat: 37.1706035, lng: 126.9308023, level: "easy", fish: ["배스"], type: "저수지", season: "봄·여름", desc: "서울 근교 배스 루어 조황이 소개된 화성권 저수지입니다.", sourceSlug: "서울근교-화성-덕우저수지-배스낚시" },
  { id: "fresh-national-namyang", name: "화성 남양호", region: "수도권", area: "경기 화성시 장안면", lat: 37.0474419, lng: 126.8732832, level: "medium", fish: ["붕어"], type: "호수·강", season: "연중", desc: "준척급 붕어 조황과 겨울 얼음낚시가 소개된 화성권 호수입니다.", sourceSlug: "화성-남양호-붕어낚시-아침낚시-준척-월척급-붕어낚시-민물낚시" },
  { id: "fresh-national-gapyeong", name: "가평천 꺽지 탐사권", region: "수도권", area: "경기 가평군", lat: 37.8950384, lng: 127.50653, level: "medium", fish: ["꺽지", "동자개"], type: "하천", season: "봄·여름", desc: "돌틈낚시와 구멍치기 조황이 소개된 가평천입니다.", sourceSlug: "가평천-돌틈낚시-구멍치기낚시-잡은-꺽지-동자개-돌고기로-어죽라면" },
  { id: "fresh-national-imjin", name: "임진강 탐사권", region: "수도권", area: "경기 파주시 일대", lat: 37.8882564, lng: 126.7482781, level: "medium", fish: ["가물치", "장어"], type: "호수·강", season: "여름·가을", desc: "가물치와 장어 생활낚시 조황이 소개된 임진강 수계입니다.", sourceSlug: "서울근교-임진강-가물치낚시-장어낚시-생활낚시-포인트" },
  { id: "fresh-national-soyang", name: "소양호 쏘가리 탐사권", region: "강원권", area: "강원 춘천시 일대", lat: 37.9926504, lng: 128.0533419, level: "hard", fish: ["쏘가리"], type: "호수·강", season: "봄·여름", desc: "소양댐 중류 쏘가리 루어 조황이 소개된 소양호 수계입니다.", sourceSlug: "소양호-쏘가리낚시-포인트-탐사-소양댐-중류-쏘가리-루어낚시" },
  { id: "fresh-national-uiam", name: "춘천 의암호", region: "강원권", area: "강원 춘천시", lat: 37.8780071, lng: 127.7000523, level: "medium", fish: ["빙어"], type: "호수·강", season: "겨울", desc: "겨울 빙어낚시 조황이 소개된 춘천권 호수입니다.", sourceSlug: "춘천-의암호-빙상경기장-빙어낚시-조황" },
  { id: "fresh-national-paro", name: "파로호 장어 탐사권", region: "강원권", area: "강원 화천군 일대", lat: 38.1442141, lng: 127.9081864, level: "hard", fish: ["장어"], type: "호수·강", season: "여름·가을", desc: "장어낚시 출조 기록이 소개된 파로호 수계입니다.", sourceSlug: "20210923-파로호-17차-장어낚시" },
  { id: "fresh-national-inpyeong", name: "서산 인평저수지", region: "충청권", area: "충남 서산시 팔봉면", lat: 36.7612854, lng: 126.3476365, level: "medium", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "수로 대물 붕어 조황이 소개된 서산권 저수지입니다.", sourceSlug: "서산-인평저수지-붕어낚시-무료-노지-붕어낚시터-인평지-수로" },
  { id: "fresh-national-sapgyo", name: "삽교호 소반리권", region: "충청권", area: "충남 당진시 우강면", lat: 36.8620572, lng: 126.8361862, level: "easy", fish: ["붕어"], type: "호수·강", season: "봄·가을", desc: "차박과 붕어낚시 조황이 소개된 삽교호 수계입니다.", sourceSlug: "충남-당진-삽교호-소반리권-붕어낚시-차박-캠핑-낚시" },
  { id: "fresh-national-chukdong", name: "서천 축동저수지", region: "충청권", area: "충남 서천군", lat: 36.1063446, lng: 126.8051707, level: "medium", fish: ["붕어"], type: "저수지", season: "연중", desc: "야간과 겨울 붕어 조황이 소개된 서천권 저수지입니다.", sourceSlug: "서천-축동지축동저수지-붕어낚시-야간붕어낚시-민물낚시-겨울낚시" },
  { id: "fresh-national-pungjeon", name: "서산 풍전저수지", region: "충청권", area: "충남 서산시", lat: 36.7791885, lng: 126.4235257, level: "medium", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "옥수수 미끼 월척급 붕어 조황이 소개된 서산권 저수지입니다.", sourceSlug: "서산-풍전저수지-붕어낚시-낮낚시-옥수수미끼에-4짜급-붕어-조과" },
  { id: "fresh-national-dugye", name: "대전 두계천", region: "충청권", area: "대전광역시 유성구", lat: 36.2575422, lng: 127.281989, level: "easy", fish: ["붕어"], type: "하천", season: "봄·가을", desc: "노지 붕어낚시 조황이 소개된 대전권 하천입니다.", sourceSlug: "대전-두계천-낚시-노지-무료-민물낚시터-차대고-바로" },
  { id: "fresh-national-byeongcheon", name: "병천천 환희교권", region: "충청권", area: "충북 청주시 오창읍", lat: 36.6849818, lng: 127.339656, level: "easy", fish: ["붕어"], type: "하천", season: "봄·가을", desc: "환희교 일대 노지 조황이 소개된 병천천입니다.", sourceSlug: "청주-병천천-환희교-노지-무료-낚시터", entry: true },
  { id: "fresh-national-janggok", name: "태안 장곡저수지", region: "충청권", area: "충남 태안군 안면읍", lat: 36.4355032, lng: 126.3808496, level: "medium", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "혹부리 붕어 조황이 소개된 안면도권 저수지입니다.", sourceSlug: "태안-안면도-장곡저수지-붕어낚시-민물낚시-혹부리붕어낚시" },
  { id: "fresh-national-busa", name: "서천 부사호 수로권", region: "충청권", area: "충남 서천군", lat: 36.184813, lng: 126.5315947, level: "medium", fish: ["붕어", "잉어"], type: "수로", season: "봄·가을", desc: "대물 붕어와 잉어 조황이 소개된 부사호 수로권입니다.", sourceSlug: "충남-서천-부사호-수로-대물-붕어-잉어-낚시" },
  { id: "fresh-national-cheontae", name: "홍성 천태저수지", region: "충청권", area: "충남 홍성군", lat: 36.51816, lng: 126.7466952, level: "medium", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "계곡형 저수지 대물 붕어 조황이 소개된 홍성권 저수지입니다.", sourceSlug: "홍성-천태저수지-무료낚시터-계곡형저수지-붕어낚시-대물포인트" },
  { id: "fresh-national-chopyeong", name: "진천 초평저수지", region: "충청권", area: "충북 진천군", lat: 36.8221291, lng: 127.5039772, level: "medium", fish: ["배스"], type: "저수지", season: "봄·여름", desc: "배스 루어 출조 기록이 소개된 진천권 저수지입니다.", sourceSlug: "초평저수지-용덕저수지-비오는날-초평집좌대-수상좌대-방갈로-배스낚시-루어낚시" },
  { id: "fresh-national-oksan", name: "부여 옥산지", region: "충청권", area: "충남 부여군 옥산면", lat: 36.1971639, lng: 126.7291544, level: "medium", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "붕어 출조 기록이 소개된 부여권 저수지입니다.", sourceSlug: "부여-옥산지-출조" },
  { id: "fresh-national-nakdong", name: "낙동강 붕어 탐사권", region: "경상권", area: "경북 구미시 일대", lat: 36.1145814, lng: 128.3966332, level: "medium", fish: ["붕어"], type: "호수·강", season: "봄·가을", desc: "대물 붕어 조황이 소개된 낙동강 수계입니다.", sourceSlug: "낙동강-붕어낚시-4짜붕어-민물낚시-노지낚시터-대물-붕어낚시-조과정보" },
  { id: "fresh-national-namsan", name: "밀양 남산저수지", region: "경상권", area: "경남 밀양시", lat: 35.4316525, lng: 128.7332504, level: "easy", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "소류지 붕어 조황이 소개된 밀양권 저수지입니다.", sourceSlug: "밀양-남산저수지남산지-붕어낚시-무료-민물낚시-소류지-노지낚시터-조황" },
  { id: "fresh-national-buya", name: "청도 부야지", region: "경상권", area: "경북 청도군", lat: 35.6699768, lng: 128.7839473, level: "medium", fish: ["붕어"], type: "저수지", season: "봄·가을", desc: "대물 한방터 붕어 조황이 소개된 청도권 소류지입니다.", sourceSlug: "경북-청도-부야지-붕어낚시-민물낚시-소류지-대물-한방터" },
  { id: "fresh-national-gyeseong", name: "창녕 계성천 화영수로", region: "경상권", area: "경남 창녕군", lat: 35.4015664, lng: 128.4912021, level: "easy", fish: ["붕어"], type: "수로", season: "봄·가을", desc: "화영수로 붕어 조황이 소개된 계성천 수계입니다.", sourceSlug: "창녕-화영수로-붕어낚시-계성천-무료-노지-낚시터" },
  { id: "fresh-national-seomjin", name: "섬진강 남도대교권", region: "전라권", area: "전남 구례군 간전면", lat: 35.1857224, lng: 127.623112, level: "medium", fish: ["은어", "피라미"], type: "호수·강", season: "여름", desc: "은어와 피라미 견지낚시 조황이 소개된 섬진강 남도대교권입니다.", sourceSlug: "섬진강-은어낚시-견지낚시-피라미-대박-남도대교-포인트-낚시", entry: true },
  { id: "fresh-national-yeongam", name: "영암호 수로권", region: "전라권", area: "전남 영암군", lat: 34.6813294, lng: 126.4834807, level: "medium", fish: ["붕어"], type: "수로", season: "봄·가을", desc: "월척 붕어 조황이 소개된 영암호 수로권입니다.", sourceSlug: "영암호-수로-대물-월척-붕어낚시-마릿수-조과-정보" }
].map((spot) => {
  const confidence = spot.entry ? "진입 기준점 · OSM 교량 또는 접근 기준 좌표" : "수역 기준점 · OSM 수역 좌표";
  return {
    ...spot,
    difficulty: spot.level === "easy" ? "초급" : spot.level === "hard" ? "숙련" : "중급",
    tide: spot.entry ? "진입 기준점" : "수역 기준점",
    coordinateConfidence: confidence,
    tip: spot.entry
      ? "교량 또는 접근 기준점입니다. 실제 낚시 가능한 연안과 주차 위치는 현장에서 확인하세요."
      : "수역 대표 기준점입니다. 실제 낚시 가능한 연안과 진입로는 현장에서 확인하세요.",
    curated: true,
    freshwater: true,
    warning: "자연 노지 수역입니다. 출입 제한, 낚시 금지 구역, 수위, 기상과 사유지 여부를 현장에서 확인하세요.",
    sources: [{ label: "낚시포인트 원문", url: `https://fishingpoint.kr/fwfishing/${spot.sourceSlug}/` }]
  };
});
