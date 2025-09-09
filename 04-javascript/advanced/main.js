// **********nested functions*******

let a = 10;
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner();
}

outer();

// **********closures**********

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();

// ********function currying******

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);

// ******this**********

function sayMyName(name) {
  console.log(`My name is ${name}`);
}

sayMyName(`Tea`);

globalThis.name = "Superman";

// 1. implicit binding

const person = {
  name: "Test name",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();

// 2. explicit binding

function sayMyName() {
  console.log(`My name is ${this.name}`);
}

sayMyName.call(person);

// 3. new binding

function Person(name) {
  // this = {}
  this.name = name;
}

const p1 = new Person("New person 1");
const p2 = new Person("New person2");

console.log(p1.name, p2.name);

// 4. default binding

sayMyName();

// *********prototype********

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const p3 = new Person("Bruce", "Wayne");
const p4 = new Person("Clark", "Kent");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(p3.getFullName());
console.log(p4.getFullName());

function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime");
};

SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("New", "Batman");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());

// ********* classes **********

// class Person {
//   constructor(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
//   }
//   sayMyName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const classPerson1 = new Person("Class", "Test");
// console.log(classPerson1.sayMyName());

// class SuperHero extends Person {
//   constructor(fName, lName) {
//     super(fName, lName);
//     this.isSuperHero = true;
//   }

//   fightCrime() {
//     console.log("Fighting crime");
//   }
// }

// const batman = new SuperHero("Bruce", "Wayne");
// console.log(batman.sayMyName());

// ********iterables & iterators*********

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step === 1) {
          return { value: "Hello", done: false };
        } else if (step === 2) {
          return { value: "World", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}

//****** generators *********

function normalFunction() {
  console.log("Hello1");
  console.log("World1");
}

normalFunction();

function* generatorFunction() {
  yield "Hi";
  yield "Again";
}

const result = generatorFunction();
for (const word of result) {
  console.log(word);
}
