let arr = [1, 2, 3];
let brr = [4, 5, 6];
let crr = [7, 8, 9];
// delete crr[2];

let result = arr.concat(brr, crr);
let a = result.pop();
console.log(a);

// The concat() method can also take any type as arguments:

let strArray = [1, 2, 3];

let strArrResult = strArray.concat("sourabh", 1, true, {});
console.log(strArrResult);
