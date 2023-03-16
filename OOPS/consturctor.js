// class MyClass {
//   constructor() {
//     console.log("Hello World");
//   }
// }

// let obj = new MyClass();

class MyClass {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  func() {
    console.log("func called");
  }
}

let obj = new MyClass(2, 3);
obj.func();
// console.log(obj.d);
