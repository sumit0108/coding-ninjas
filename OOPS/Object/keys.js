let obj = { 1: "a", 2: "b", 3: "c" };

let arr = Object.keys(obj);
console.log(arr);
for (let e of arr) {
  console.log(obj[e]);
}
