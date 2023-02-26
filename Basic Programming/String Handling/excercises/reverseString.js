let str = "deepak";
let result = "";
let i = 0;
let j = str.length - 1;
let arr = str.split("");
let count = 0;

while (i < j) {
  let c = arr[i];
  arr[i] = arr[j];
  arr[j] = c;
  i++;
  count++;
  j--;
}
console.log(arr.toString().replaceAll(",", ""), count);
