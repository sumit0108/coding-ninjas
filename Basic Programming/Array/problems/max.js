let arr = [2, 5, 1002, 10, 3, 98, 50909];
let result = -1000;

for (let i = 0; i < arr.length; i++) {
  result = Math.max(result, arr[i]);
}

console.log(result);
