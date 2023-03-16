// function func() {
//   this.a = 5;
//   this.b = 10;
// }

// function func2() {
//   this.c = 20;
// }

// let obj = new func();
// func.prototype.c = func2;
// let obj2 = new func.prototype.c();
// console.log(obj.a + obj.b);
// console.log(obj2.c);

// function primeNumber(a) {
//   // let r;
//   if (a <= 1) {
//     return `${a} is not a prime number`;
//   }
//   for (let i = 2; i < a; i++) {
//     r = a % i;
//     if (r == 0) {
//       return `This is not a Prime Number`;
//     } else {
//       return `This is a prime number`;
//     }
//   }
//   // return r == 0 ? `this is not a prime number` : `This is a prime number`;
// }

// console.log(primeNumber(1));

function isPrime(n) {
  let result = false;

  for (let a = 2; a <= Math.sqrt(n); a++) {
    if (n % a === 0) {
      result = false;
      break;
    }
    result = true;
  }

  return result;
}

console.log(isPrime(1010101010));
