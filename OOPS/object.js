/**
 * There are 3 ways to create objects.
 * 1.By object literal
 * 2.By creating instance of Object directly (using new keyword)
 * 3.By using an object constructor (using new keyword)
 */
//1. By object literal
let objL = { 1: 1, b: 2 };

// 2.By creating instance of Object directly
let obj = new Object();
obj.a = 10;
obj.b = 10;
obj.func = (a, b) => a + b;

// console.log(obj.func(20, 3));

//3. By using an object constructor - we can create objects of functions in javascript.

function test(c, d) {
  this.c = c;
  this.d = d;
  function demo() {
    console.log("demo called");
  }
  test.demo = demo;
}

test(2, 3);
test.demo();
console.log(test.prototype);
// let objF = new test(2, 3);
// console.log(test.demo());

// function initValidation() {
//   // irrelevant code here
//   function validate(_block) {
//     console.log("test", _block);
//   }
//   initValidation.validate = validate;
// }
// initValidation();
// initValidation.validate("hello");
