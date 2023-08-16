export interface Activist {
  MNG_NO: number; // 관리 번호
  NAME_KO: string; // 이름 (한글)
  NAME_CH: string; // 이름 (한자)
  DIFF_NAME: string; // 이명
  BIRTHDAY: string; // 생일
  BIRTHDAY_SL_NM: string; // 생년월일 구분
  BIRTHDAY_EXT_NM: string; // 추가 생년월일
  LASTDAY: string; // 사망년월일
  LASTDAY_SL_NM: string; // 사망년월일 구분
  LASTDAY_EXT_NM: string; // 추가 사망년월일
  SEX: string; // 성별
  REGISTER_LARGE_DIV: string; // 본적대분류
  REGISTER_MID_DIV: string; // 본적중분류
  REGISTER_SMALL_DIV: string; // 본적소분류
  JUDGE_YEAR: string; // 포상년도
  HUNKUK: string; // 훈격
  WORKOUT_AFFIL: string; // 운동계열
  ACHIVEMENT: string; // 공적내용
}

export interface ActivistResponse {
  TOTAL_COUNT: number;
  PAGE_INDEX: number;
  PAGE_COUNT: number;
  ITEMS: Activist[];
}
