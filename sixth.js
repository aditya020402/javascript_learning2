// __proto__
//Infinity,MAX_VALUE,MIN_VALUE

const score = 100;
console.log(score);
const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(1));

const oth = 123.1231231;
console.log(oth.toPrecision(4));

const hund = 1000000;
console.log(hund.toLocaleString('en-IN'));


//Math functions 

// Math.abs(),Math.min(),Math.max(),Math.round(),Math.ceil(),Math.floor(),Math.random(),

// to get values between min and max 

const max = 10;
const min = 20;

console.log(Math.random()*(max-min+1) + min );




