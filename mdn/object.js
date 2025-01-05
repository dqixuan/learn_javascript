/*
2025-01-04
 */

// 对象是一系列属性的集合。
// An object property name can be any Javascript string or symbol, including an empty string.
// You can not use dot notation to access a property whose name is not a valid Javascript identifier.

// access property of object: dot notation, square bracket
let myCar = {};

myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

myCar["year"] = 1999;
console.log("myCar:", myCar);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const newCarByFunction = new Car("Eagle", "Talon TSi", 1993)
console.log("newCarByFunction: ",newCarByFunction);

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

const randPerson = new Person("Rand Mackinnon", 33, "M")
const kenPerson = new Person("Ken Jones", 39, "M")


function CarWithOwner(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}


//--------------------below is edited in 2025-01-05

const CarOfKen = new CarWithOwner("Ken Jones", 39, "M", kenPerson)
console.log("The name of the car owner: ",CarOfKen.owner.name);

// add a property to a previously defined object. Don`t affect any other same object.
CarOfKen.color = "black"
console.log("CarOfKen", CarOfKen)



// 对象中未赋值的字段是 undefined

// const myObject = {
//   property1: value1,
//   2: value2,
//   "property n": value3,
// }
// console.log(myObject);

const myHonda = {
  color: "red",
  wheels: 4,
  engine : {
    cylinders: 4,
    size: 2.2,
  },
}
console.log(myHonda);

// Using the object.create() method creates objects
const Animal = {
  type: "Invertebrates",
  displayType() {
    console.log("Animal:", this.type);
  }
}
const animal1 = Object.create(Animal);
animal1.displayType()
const fish = Object.create(Animal);
fish.type = "Fish";
fish.displayType()

const myObj = {};
const str = "my string";
const random = Math.random();
const anotherObj = {};

myObj.type = "dot syntax for a key named type";
myObj["has space"] = "The key has a space";
myObj[str] = "The key is a variable str";  // The variable must be passed by bracket notation.
myObj[random] = "The key is random number";
myObj[anotherObj] = "The key is an object";
myObj[""] = "The key is an empty string";

console.log("myObj:", myObj);
/*
myObj: {
  type: 'dot syntax for a key named type',
  'has space': 'The key has a space',
  'my string': 'The key is a variable str',
  '0.554021893603216': 'The key is random number',
  '[object Object]': 'The key is an object',
  '': 'The key is an empty string'
}
 */

// enumerate properties of an object 1) for in  2)objects.Keys  3)Object.getOwnPropertyNames

// 1) for in
function showProperties(obj) {
  for(let p in obj) {
    console.log(p,":", obj[p]);
  }
}
showProperties(myObj)

// 2) Object.keys()  返回了数组
console.log("Object.key():", Object.keys(myObj));
let result;
Object.keys(myObj).forEach(key => {
  result += `${myObj}.${key}: ${myObj[key]}`;
})
console.log("result:", result);

console.log("getOwnPropertyNames:", Object.getOwnPropertyNames(myObj));

// delete properties
const deletingProperty = {};
deletingProperty.a = 5;
deletingProperty.b = 6;

console.log("a" in deletingProperty);
delete deletingProperty.a;
console.log("a" in deletingProperty);

