// class MyClass {
//   constructor() {
//     console.log("Hello World");
//   }
// }

// let obj = new MyClass();

class MyClass {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  func(d) {
    this.d = d;
  }
}

let obj = new MyClass(9, "deepak", "sumit");
obj.func("Sourabh");
console.log(obj.d);
