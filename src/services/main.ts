class ParameterError extends Error {}

export const 오늘은광복절입니까 = (currentDatetime: Date) => {
  const month = currentDatetime.getMonth() + 1;
  const date = currentDatetime.getDate();

  return month === 8 && date === 15;
};

export const createRandomRangedNumber: (
  ...args: [number] | [number, number]
) => number = (...args) => {
  if (args.length === 1) {
    const end = args[0];

    if (end <= 1)
      throw new ParameterError("First parameter must be bigger than 1.");

    return Math.floor(Math.random() * (end - 1)) + 1;
  }

  if (args.length === 2) {
    const [start, end] = args;

    if (end <= start)
      throw new ParameterError(
        "Second parameter must be bigger than first parameter."
      );

    return Math.floor(Math.random() * (end - start)) + start;
  }

  throw new ParameterError("Parameters length must be 1 or 2.");
};
