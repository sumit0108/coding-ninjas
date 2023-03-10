// const arr = [1, 2, 3, "3"];

// // for of loops returns the indexes of the arrray
// for (let i of arr) {
//   console.log(i);
// }

// // for in loops returns the indexes of the arrray
// for (let i in arr) {
//   console.log(arr[i]);
// }

// arr[1] = 3;
// // arr = [1, 2, 3, 4];

// for (let i of arr) {
//   console.log(i);
// }
// // const pool concept not applicable here.
// let arrr = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let myArr = new Array(1, 2, 3);
// let a = 39;
// console.log("myArr", typeof a);
let array = [1, 2, 3];
let result = [];

for (let index = array.length - 1; index >= 0; index--) {
  result[0] = array[array.length - 1];
  result.push(array[index]);
}
let x = "true";
x = !!x;
console.log(x, "result");
