// let str = "1111111111";
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// str = str.replace("1", "0000000000");
// let str2 = "1111111111";
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// str2 = str2.replace(1, str);
// console.log(str2.length);

// let str = "aaa_bbb-ccc";
// console.log(str.replace(/[-_]/g, " "));

// const myString = "The color of color the sky  is blue.";
// const newString = myString.replace(/[colorsky]/g, "colour");
// console.log(newString); // "The colour of the sky is blue."

let strr = "lkjsjlkjlkd34897893y4";
console.log(strr.replace(/[1-9a-z]/g, "0"));

for (let i = 0; i < strr.length; i++) {
  let ch = strr.charCodeAt(i);
  if (ch > 47 && ch < 58) {
    console.log(String.fromCharCode(ch));
  }
}
