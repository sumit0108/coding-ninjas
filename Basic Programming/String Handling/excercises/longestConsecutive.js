let str = "adefjahgjhd";
let result = 1;
let count = 1;
let flag = false;
let prev;
let next;
for (let index = 1; index < str.length; index++) {
  if (!flag) {
    result = Math.max(result, count);
    count = 1;
  }

  prev = str.charCodeAt(index - 1);
  next = str.charCodeAt(index);

  if (prev + 1 === next) {
    flag = true;
    count++;
    continue;
  }
  flag = false;
}
result = Math.max(result, count);
console.log(result);
