// JavaScript Basics - Lesson 10
// Dates

console.log("---- Lesson 10 ----");

const today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

const birthday = new Date("2006-05-12");
console.log(birthday);

console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

const deadline = new Date("2026-12-31");

if (today < deadline) {
  console.log("The deadline is still ahead.");
} else {
  console.log("The deadline has passed.");
}

const startDate = new Date("2026-01-01");
const endDate = new Date("2026-01-10");
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const differenceInMilliseconds = endDate - startDate;
const differenceInDays = differenceInMilliseconds / millisecondsPerDay;

console.log(`Days between dates: ${differenceInDays}`);

function getCurrentYear() {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

console.log(getCurrentYear());

function isAdultByBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  const ageFromYear = currentYear - birthYear;
  return ageFromYear >= 18;
}

console.log(isAdultByBirthYear(2005));
console.log(isAdultByBirthYear(2012));

// Practice solution
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());

const nextBirthday = new Date("2026-12-15");

if (now < nextBirthday) {
  console.log("Birthday is coming");
} else {
  console.log("Birthday has passed");
}

