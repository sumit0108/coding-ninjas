let obj = {
  banana: "fruit",
  apple: "fruit",
  pineapple: "fruit",
  mango: "fruit",
  potato: "veg",
};

Object.entries(obj).forEach(([key, value]) => {
  if (value !== "fruit") {
    delete obj[key];
  }
});

console.log(obj);

// let arr = Object.entries(obj);
// console.log(arr);

// let result = arr.filter((e) => {
//   return e[1] == "fruit";
// });
// // console.log(org);

// let obj1 = {};

// for (let ar of result) {
//   obj1[ar[0]] = ar[1];
// }
// console.log(obj1);
