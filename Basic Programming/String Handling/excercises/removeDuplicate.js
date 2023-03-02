let str = "abaccde";
let result = "";

let arr = new Array(26);

// n*n complexity

for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  if (result.includes(ch)) {
    continue;
  }
  result = result + ch;
}
console.log(result);

// 2n complexity

for (let i = 0; i < str.length; i++) {
  let ch = str.charCodeAt(i);
  arr[ch - 97] = ch;
  console.log(arr);
}

for (let a of arr) {
  if (a != undefined) result = result.concat(String.fromCharCode(a));
}

console.log(result);

//
