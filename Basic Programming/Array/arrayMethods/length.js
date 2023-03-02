// let a = [1, 2, 3];
// console.log(a.length);

// let arr = [1, "a", [], "b", {}, "c", { a: "" }];
// console.log(Array.isArray());
// arr = arr.filter((e) => typeof e === "object" && !Array.isArray(e));
// console.log(arr);

// //

let input = 10;

let arry = [10, 20, 2, 3, 4];
let k = input % arry.length;
let count = 0;

let len = arry.length;

let temp = [];
if (!k == 0) {
  // [ 20, 2, 3, 4, 10 ]

  for (let i = arry.length - k; i < arry.length; i++) {
    count++;
    // shift krni h value
    temp.push(arry[i]);
  }

  for (let i = arry.length - k - 1; i >= 0; i--) {
    count++;
    arry[--len] = arry[i];
  }

  for (let i = 0; i < temp.length; i++) {
    count++;
    arry[i] = temp[i];
  }
}
console.log(count);
console.log(arry);
