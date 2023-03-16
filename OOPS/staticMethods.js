class MyClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  show() {
    console.log("show called");
  }

  static func() {
    console.log("func called");
  }
}

/**
 *
 * We can create two methods with same name but one should be static and another one is non-static
 *
 */

let obj = new MyClass(1, 2);
// obj.func(); // This line will cause an error. Because, static methods calls only by class name
MyClass.func();
