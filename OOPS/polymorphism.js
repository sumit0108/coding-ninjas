/**
 * Polymorphism - It is a mechanism in which a single entity can behave in different ways accordingly.
 * for e.g - a male can behave as  a father , as a son, as a husband etc.
 *
 * Overloading - we can have multiple method with same method in single class.
 *
 * Overriding - when we have same method in parent and child class with same signature is known as overriding.
 *
 * In Javascript overloading is not possible.
 */
// Non Static Method
// class Test {
//   demo() {
//     console.log("demo 2nd");
//   }
// }

// class SubTest extends Test {
//   demo() {
//     console.log("demo overrode method");
//     super.demo();
//   }
// }

// let s = new SubTest();
// s.demo();

// Static Method
class Test {
  static demo() {
    console.log("demo 2nd");
  }
}

class SubTest extends Test {
  static demo() {
    console.log("demo overrode method");
    super.demo();
  }
}

SubTest.demo();
