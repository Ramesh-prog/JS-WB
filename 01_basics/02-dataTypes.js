//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*
-> to be able to operate on variables, it is important to know something about the types of data is called datatypes.
-> javascript has 8 datatypes 

1. number => 2 to power 53
2. bigint => big integer number are stored
3. string => ""
4. boolean => true/false
5. null => standalone value(empty value)
6. undefined
7. symbol => unique
8. object 
*/
console.log(typeof age); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// we can use the javascript typeof operator to find the type of a javascript variable.
