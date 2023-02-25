let str = "JavaScript";
let result = "";

let i = 0;
let j = 1;

let count = 0;

while (j < str.length) {
  count++;
  let start = str.charAt(i);
  let end = str.charAt(j);
  result = result.concat(start, " ", end, " ");
  i += 2;
  j += 2;
}

console.log(result.trim());
console.log(result.trim().length);
console.log(count);

// let str = "JavaScript";
// let finalSrting = "";
// console.log(str.charAt());

// for (let i = str.length; i < 0; i) {
//   let c = str.charAt(i);
//   finalSrting = finalSrting.concat(c, " ");
// }
// console.log(finalSrting);
