const ADULT_AGE = 18;
export const isAdult = (age) => age >= ADULT_AGE;

const DRINKING_AGE = 21;
export const canDrink = (age) => age >= DRINKING_AGE;

const SENIOR_AGE = 65;
export default (age) => age >= SENIOR_AGE;