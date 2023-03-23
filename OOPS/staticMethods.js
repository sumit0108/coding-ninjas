/**
 * Static Keyword- These methods call directly by class name.
 *
 * 1. If we declare more than one static method with a similar name,
 * the JavaScript always invokes the last one.
 */

// class Test {
//   static eating() {
//     console.log("Ist static method called");
//   }
//   static eat() {
//     console.log("2nd static method called");
//   }
// }
// Test.eat();

// 2.We can use this keyword to call a static method within another static method.
// class Test {
//   static eating() {
//     console.log("Ist static method called");
//   }
//   static eat() {
//     console.log("2nd static method called", this);
//     this.eating();
//   }
// }
// Test.eat();

/**
 * We cannot use this keyword directly to call a static method within the non-static method.
 * In such case, we can call the static method either using the class name or as the property
 * of the constructor.
 */
// class Test {
//   eating() {
//     console.log("non static method");
//   }
//   static eating() {
//     console.log("Ist static method called");
//   }
//   static eat() {
//     console.log("2nd static method called");
//   }
//   check() {
//     console.log("check method called");
//     this.eating();
//   }
// }
// let test = new Test();
// test.check();
