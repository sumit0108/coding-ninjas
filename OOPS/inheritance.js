/**
 * Inheritance - It used for the code reusability.
 *
 * super() - It must present in child class constructor.
 *         - It can be anywhere in the constructor but in JAVA it must be in the first line of constructor.
 *
 * NOTE - super() can be anywhere in construtcor but if there is this keyword
 *        then it must be before this keyword.
 *
 * super keyword can be use for ?
 * - to call the parent constructor
 * - to give a parent function call
 *
 * How can we access the parent's class data members ?
 * - We cannot access parent's data members through super keyword instead we have to use this keyword
 *   Because data members does not visible for super. Here in js, when super() call executed after
 *   that js compiler make all the data members available inside child object. That's why
 *   we access those through this keyword.
 *
 * - For ex :
 *      Assume, parent has a data member called name;
 *      So, inside child class, the call should be : this.name;
 *
 */

class Fruit {
  static a = "abc";
  constructor(treeName) {
    this.treeName = treeName;
  }
  static buy() {
    console.log("buy method called");
  }

  static eat() {
    console.log("eating method called");
  }
}

class Mango extends Fruit {
  constructor() {
    super("Mango Tree");
    this.price = 20;
    this.name = "Mango";
  }

  static buy() {
    super.buy();
    console.log("buying mango");
  }

  getDetails() {
    Mango.buy();
    // super.buy();
    return `Tree Name - ${this.treeName}\nName - ${this.name}\nPrice - ${this.price} `;
  }
}

let mg = new Mango();

console.log(mg.getDetails());
