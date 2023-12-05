// console.log(2>1); // true
// console.log(2 >= 19);  // false
// console.log(2 < 1);  // false
// console.log(2 == 1); //false
// console.log(2 != 1);  // true

// console.log("2" > 1) // true
// console.log("02" > 1) //true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0)   
// The reasons is that an equality check == and comparision > < > = < = work differently.
// the comparision convert null to a number, treating is as 0,Thats why (3) null >= 0 is true and (1) null > 0 is false.
// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);