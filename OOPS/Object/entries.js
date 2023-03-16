let obj = { 1: "a", 2: "b", 3: "c" };

let arr = Object.entries(obj);
console.log(arr);
for (let e of arr) {
  console.log(e[0]);
}
