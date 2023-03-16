// 43, 5, 53, 34, 232, 3
// 28, 34, 5, 534, 5334,3434

let arr = [3, 5, 53, 34, 232, 3];
console.log(arr.sort((a, b) => a - b));
console.log(arr[arr.length - 2]);

// let result = -1000;
// let high = -1000;

// for (let i = 0; i < arr.length; i++) {
//   result = high;
//   high = Math.max(high, arr[i]);
// }

// console.log(result);
