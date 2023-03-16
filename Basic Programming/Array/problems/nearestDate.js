// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler
// const dates = ["11/03/1966","19/03/1996","05/07/2006","22/03/2045","30/03/2996"];
// yogesh.kumar@okoders.com

const dates = [
  "11/03/1966",
  "19/03/1996",
  "05/07/2006",
  "22/03/2045",
  "30/03/2996",
];
let nearestDate = "";
let NegnearestDate = -1000;
let PosnearestDate = 1000;
let minDifference = Infinity;
dates.forEach((date) => {
  const year = parseInt(date.slice(-4));
  const difference = year - 2023;
  //  console.log(Math.max(NegnearestDate,difference))
  if (difference < 0) {
    NegnearestDate = Math.max(NegnearestDate, difference);
    NegnearestDate = date;
  } else {
    PosnearestDate = Math.min(PosnearestDate, difference);
    PosnearestDate = date;
  }
});
console.log(NegnearestDate); // Output: "22/03/2045"
console.log(PosnearestDate); // Output: "22/03/2045"
