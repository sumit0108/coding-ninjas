/**
 * Encapsulation -The JavaScript Encapsulation is a process of binding the data (i.e. variables)
 *  with the functions acting on that data. It allows us to control the data and validate it.
 *
 * -- To achieve an encapsulation in JavaScript:
 *      1. Use var keyword to make data members private.
 *      2. Use setter methods to set the data and getter methods to get that data.
 *
 *
 */

class School {
  constructor() {
    var name;
    var address;
  }
  getStudentName() {
    return this.name;
  }
  setStudentName(name) {
    this.name = name;
  }
}

let school = new School();
school.setStudentName("sourabh");
console.log(school.name);
