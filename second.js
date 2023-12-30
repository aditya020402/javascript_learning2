"use strict"; // treat all js code in newer version of java

// alert("hello") we are using nodejs and not browser


let useremail; // here current value is undefined 

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id===anotherId); // gives false why because symbol create unique things so they both are not equal even when the value is same

const bigNum = 12312392930n; // add n at the end 


// data types 


// number 
// bigint 
// string 
// boolean 
// null => standalone value
// undefined 
// symbol => unique 
//object 
//NaN => Not a number  

console.log(typeof("")); // returns the type of the argument

console.log(typeof(null)); // gives object
console.log(typeof(undefined)); // gives undefined 

// number -> number 
// string -> NaN
// true => 1 false =>0

// to make conversion use the data type with first character capital 
// eg: number -> Number() to convert to number 
//     string -> String() to convert to string 

// primitive: string,number,bigint,boolean,null,undefined,symbol

//non primitive: array,objects,functions 

//javascript is dynamically typed 


// the typeof non primitive types return object 


// primitive -> stack 
// non primitive -> heap 