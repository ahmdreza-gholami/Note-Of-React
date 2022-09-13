// unit 1
// ________________________________________________________________________

// hi react

// ------------------------------------------------------------------------
// unit 2
// ________________________________________________________________________

// // var , let , const
// var i = 5;
// var i = 7;
// // no problem

// let i = 5;
// let i = 7;
// // error same az const

// let i = 5;
// i = 7;
// // that's ok for let
// // not for const
// // if const is a array or object , yo can change inside it.

// // in block 
// // if use let & const in block {} , you can't use their out of block.
// // that's ok for var

// ------------------------------------------------------------------------

// // reference type = object , array
// // primitive type = all except 2 up

// let array1 = [1,2,3];
// let array2 = array1;
// array2.push(4)
// console.log(array1)
// console.log(array2)
// // number 4 is push in both array because their reference is same.

// let object1 = {name : "ahmdreza"};
// let object2 = {name : "ahmdreza"};
// console.log(object1 === object2)
// // it's false because they are have a different reference (they don't see the value)

// ------------------------------------------------------------------------

// // spread operator
// const arr1 = [1,2,3]
// const arr2 = [...arr1,5,6]
// arr2.push(4)
// // in here arr2 push 4 without arr1 push 4.
// // we just put copy of arr1 in arr2.
// console.log(arr1)
// console.log(arr2)

// // same in object
// const obj1 = {name : "milad"};
// const obj1 = {...obj1 , lastName : "azami"};
// obj2.age = 24;
// console.log(obj1)
// console.log(obj2)

// ------------------------------------------------------------------------

// // object destructuring
// const userData = {
//     name : "ahmadreza",
//     age : 21,
//     address : {
//         city : "amol",
//         street : "barzegar"
//     } 
// };

// const {name , age , address : {city , street}} = userData;
// // or
// // const {name , age , address} = userData;
// // const {city , street} = address;

// console.log(name)
// console.log(age)
// console.log(city)
// // all this destructuring for speed in coding and use object value simple.

// ------------------------------------------------------------------------

// // arrow function
// const sum = (num1 , num2) => {
//     const result = num1 + num2;
//     return result+2;
// };

// console.log(sum(5 , 3))
// // Arrow function even use for small function.

// ------------------------------------------------------------------------

// // map in array
// const numbers = [1,2,3,4];

// const newNumbers = numbers.map(item => item*2);
// console.log(newNumbers)
// // map just for array
// // it use when you want change all member of array in same way.
// // it back a array result

// ------------------------------------------------------------------------

// // import & export
// // in script.js
// const name = "ahmadreza";
// const sayHi = function() {
//     console.log("Hi");
// }
// const sum = (a , b) => a+b;

// // Named
// export {name , sayHi}

// // Default
// export default sum;
// // -----------------
// // in app.js
// // Named import 
// // import {name , sayHi} from "./script.js"

// // Default import
// // import sum from "./script.js"

// // Named & default import
// import sum , {name , sayHi} from "./script.js"

// sayHi();
// console.log(name)
// console.log(sum(2,3));

// ------------------------------------------------------------------------

// // Class
// class Vehicle {
//     // class should be named by capital first alphabet.
//     constructor(clr , brnd) {
//         // constructor must be come in first line after create class.
//         this.color = clr,
//         // this point to it parents(boss). 
//         this.model = brnd
//     }

//     speed() {
//         console.log("i go fast")
//     }
// }

// const car1 = new Vehicle("red" , "BMW");
// console.log(car1)

// const car2 = new Vehicle("white" , "Land Cruiser");
// console.log(car2)

// ------------------------------------------------------------------------

// // inheritance
// class Vehicle {
//     constructor(clr , brnd) {
//         this.color = clr,
//         this.model = brnd
//     }

//     go() {
//         console.log("i go ")
//     }
// }

// class Car extends Vehicle {
//     constructor(clr , brnd , speed) {
//         super(clr , brnd);
//         // super must coming in extends class
//         this.speed = speed
//     }

//     speed() {
//         console.log("Heh i can go fast")
//     }
// }

// const vehicle = new Vehicle("red" , "BMW");
// console.log(vehicle)

// const car = new Car("white" , "Land Cruiser" , 390);
// console.log(car)

// ------------------------------------------------------------------------
// unit 3
// ________________________________________________________________________

// for create react app
// install Node.js
// in cmd
// npm install -g create-react-app
// cd to location
// npx create-react-app name
// if didn't work try this :
// npm install -g npm@latest
// npm install node
// npm install -g yarn
// cd name
// npm start


