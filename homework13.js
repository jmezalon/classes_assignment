// # Class Exercises
//
// 1.
//   * Create a Human class that takes in a name and age.
//   * Add the function `ageOneYear` that ages the human.
//   * Add the function `eating`, that logs "mmm, mmm, mmm, I'm love'n it".
//   * Create an instance of the Human class.
//     * console log your humans age
//     * call ageOneYear on your human
//     * console log their age again.
//     * call eating on your human.

class Human {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  ageOneYear() {
    this.age++
    return this.age
  }
  eating() {
    return "mmm, mmm, mmm, i'm loving it!"
  }
}
let jean = new Human("Jean", 27)
jean.age;
jean.ageOneYear();
jean.eating();


// 2.
// Write a class Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.
//
// Give the Vector two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```

class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(v) {
    let sumX = this.x + v.x;
    let sumY = this.y + v.y;
    return `X: ${sumX}, Y: ${sumY}`
  }
  minus(v) {
    let minX = this.x - v.y;
    let minY = this.y - v.y;
    return `X: ${minX}, Y: ${minY}`
  }
  length() {
    return Math.hypot(this.x, this.y)
  }
 }
let v4 = new Vector(2,6);
let v3 = new Vector(3,4);
let v2 = new Vector(5,7);
let v1 = new Vector(9,4);

v2.plus(v1));
v2.minus(v1));
v4);
v3.length());
