export const daysInMonth: number[] = [
  0,
  31, // =>  JAN
  28, // =>  FEB
  31, // =>  MAR
  30, // =>  APR
  31, // =>  MAY
  30, // =>  JUN
  31, // =>  JUL
  31, // =>  AUG
  30, // =>  SEP
  31, // =>  OCT
  30, // =>  NOV
  31, // =>  DEC
];
export const daysInMonthLeap: number[] = [
  0,
  31, // =>  JAN
  29, // =>  FEB
  31, // =>  MAR
  30, // =>  APR
  31, // =>  MAY
  30, // =>  JUN
  31, // =>  JUL
  31, // =>  AUG
  30, // =>  SEP
  31, // =>  OCT
  30, // =>  NOV
  31, // =>  DEC
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

export const getMonthName = (month: number) => {
  return {
    1: "JAN",
    2: "FEB",
    3: "MAR",
    4: "APR",
    5: "MAY",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SEP",
    10: "OCT",
    11: "NOV",
    12: "DEC",
  }[month];
};
