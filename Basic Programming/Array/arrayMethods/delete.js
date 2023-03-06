let arr = [1, 2, 3, 4];
delete arr[1];

console.log(arr[1]);
let result = arr.filter((e) => {
  return e != undefined;
});
console.log(result);
