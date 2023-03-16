// let obj = { 1: "a", 2: "b", 3: "c" };

// let arr = Object.values(obj);
// console.log(arr);
// for (let e of arr) {
//   console.log(e);
// }

function func([a, b]) {
  console.log(a);
}

let obj = { 1: "a", 2: "b", 3: "c" };
let arr = Object.entries(obj);
func(arr[0]);

// let arr = Object.entries(obj);

// let [a, b, c] = arr;
