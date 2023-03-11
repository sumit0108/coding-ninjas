/**
 * We can only define methods in a class.
 * i.e. we can't define methods with function keyword.
 */

class MyClass {
  sumitSet(a, b) {
    this.a = a;
    this.b = b;
  }
  sum() {
    return this.a + this.b;
  }
  returnType() {
    //return value is undefined
    console.log(arguments[1]);
  }
}
let myref = new MyClass();
myref.sumitSet(10, 20);
let sum = myref.sum();
let returns = myref.returnType(10, 12, 23);
console.log(returns);
