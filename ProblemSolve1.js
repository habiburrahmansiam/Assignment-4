// Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo ";
// 1 sloved 


// On one single line, declare three variables with the following names and values:
let firstName = "John", lastName = "Doe", age = 35;
// 2 sloved 


// Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 
let x = 10;
let y = 5;
let int = x * y;// what will be the value of x ? 
console.log(int)
// 3 sloved 



// Use comments to describe the correct data type of the following variables:

let length = 16; // Number ? 
let lastNam = "Johnson"; // string? 

const z = {
    firstName: "John",
    lastName: "Doe"
};    // object ? 

console.log(z)
// 4 sloved


// Execute the function named myFunction.

function myFunction() {
    alert("Hello World!");
}
console.log(myFunction())// call the function and see the output 
// 5 solve


// 1. Create an object called person with name = John, age = 50, Then,
// access the object to alert("John is 50").

const obj = {
    fname: 'John',
    age: 50
}
console.log(obj.fname + " is " + obj.age)
console.log(`${obj.fname} is ${obj.age}`)
// 6 solve

//  The <button> element should do something when someone clicks on it. Try to fix it!
function thisFunction() {
    alert("Hello Alert!")
}
// 7 solve

// 1. Alert the number of items in an array, using the correct Array property: 

const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length)
// 8 solve

// 1. Use the correct Math method to create a random number.
let num = Math.random();
document.write(num);

// 2. Use the correct Math method to return the largest number of 10 and 20.
let largest = Math.max(10, 20);
console.log(largest);

// 3. Use the correct Math method to get the square root of 9.
let sqrtValue = Math.sqrt(9);
console.log(sqrtValue);
// 9 solve



// Choose the correct comparison operator to alert true, when x is greater than y.
let s = 10;
let h = 5;

if (s > h) {
    alert(true)
} else {
    alert(false)
}


// . Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough"


let old = 21;

if (old >= 18) {
    console.log('You Are Younger ')
} else {
    console.log('You Are Children')

}
// 10 solve