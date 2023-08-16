export interface RequestParameter {
  nPageIndex?: number; // 페이지 번호
  nCountPerPage?: number; // 페이지 당 데이터 건수
  type?: "XML" | "JSON"; // 반환 데이터 타입
  mngNo?: number; // 관리번호
  nameKo?: string; // 이름 (한글)
  nameCh?: string; // 이름 (한자)
  diffName?: string; // 이명
  birthday?: string; // 생일
  lastday?: string; // 사망년월일
  sex?: string; // 성별
  registerLargeDiv?: string; // 본적대분류
  registerMidDiv?: string; // 본적중분류
  judgeYear?: string; // 포상년도
  hunkuk?: string; // 훈격
  workoutAffil?: string; // 운동계열
  achivement?: string; // 공적내용
}
