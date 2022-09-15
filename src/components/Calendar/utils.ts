export const daysInMonth: number[] = [
  0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];
export const daysInMonthLeap: number[] = [
  0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];
export const daysInMonthMin = 28;
export const daysInMonthMax = 31;
export const monthMax = 12;
export const monthMin = 1;
export const dayMin = 1;
export const daysInWeek = 7;

export const getDayName = (num: number) => {
  return {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  }[num];
};
