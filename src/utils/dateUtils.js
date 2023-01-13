export const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

export const makeDate = (date) => new Date(date);

export const getWeekday = (date) => date.getUTCDay() || 7;

export const addDays = (date, days) => makeDate(date.getTime() + days * MILLISECONDS_IN_DAY);

export const addMonths = (date, months) => makeDate(makeDate(date).setUTCMonth(date.getUTCMonth() + months));

export const getFirstDateOfMonth = (date) => makeDate(makeDate(makeDate(date).setUTCDate(1)).setUTCHours(0, 0, 0, 0));

export const getLastDateOfMonth = (date) => addDays(getFirstDateOfMonth(addMonths(date, 1)), -1);

export const formatAsIsoDate = (date) => new Date(date).toISOString().substring(0, 10);

export const formatAsLocalDate = (date) =>
  new Date(date).toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
