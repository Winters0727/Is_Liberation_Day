import { 오늘은광복절입니까, createRandomRangedNumber } from "./main";

describe("오늘은광복절입니까", () => {
  test("8월 15일(광복절)일 경우, true를 반환한다.", () => {
    const Dday = new Date("2023-08-15");

    const isDday = 오늘은광복절입니까(Dday);

    expect(isDday).toBe(true);
  });

  test("8월 15일(광복절)이 아닐 경우, false를 반환한다.", () => {
    const NotDday = new Date("2023-08-22");

    const isDday = 오늘은광복절입니까(NotDday);

    expect(isDday).toBe(false);
  });
});

describe("createRandomRangedNumber", () => {
  test("end=10일 경우, randomNumber의 값은 1 이상 10이하다.", () => {
    const randomNumber = createRandomRangedNumber(10);

    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });

  test("start=20, end=30일 경우, randomNumber의 값은 20 이상 30이하다.", () => {
    const randomNumber = createRandomRangedNumber(20, 30);

    expect(randomNumber).toBeGreaterThanOrEqual(20);
    expect(randomNumber).toBeLessThanOrEqual(30);
  });

  test("end=0일 경우, 에러를 반환한다.", () => {
    expect(() => createRandomRangedNumber(0)).toThrowError(
      new Error("First parameter must be bigger than 1.")
    );
  });

  test("start=7, end=6일 경우, 에러를 반환한다.", () => {
    expect(() => createRandomRangedNumber(7, 6)).toThrowError(
      "Second parameter must be bigger than first parameter."
    );
  });
});
