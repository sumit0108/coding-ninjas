let str = "())()()";
let result = 0;
let count = 0;
let flag = false;

for (let i = 1; i < str.length; i++) {
  //   let ch = str.charAt(i - 1);
  let ch2 = str.charAt(i);
  if (ch2 == ")") {
    if (str.charAt(i - 1) == "(") {
      count++;
      i++;
      flag = true;
    }
    continue;
  }

  if (flag) {
    result = Math.max(result, count);
    count = 0;
    flag = false;
  }
}

result = Math.max(result, count);
console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let [a, ...b] = arr;
// console.log(a);
// console.log(b);
