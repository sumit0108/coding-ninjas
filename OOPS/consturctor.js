// class MyClass {
//   constructor() {
//     console.log("Hello World");
//   }
// }

// let obj = new MyClass();

class MyClass {
  constructor(a) {
    this.a = a;
  }
}

let obj = new MyClass(9);
console.log(obj.a);
