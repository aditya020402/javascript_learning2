//date and time 

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23); // the index is starting from 0 for months 
console.log(myCreatedDate.toDateString());

let dates = new Date("2023-01-23");
console.log(dates);

let dates1 = new Date("01-14,2023");
console.log(dates1);

console.log(dates1.getTime());// gets in milli seconds 

let ts = Date.now(); // get the current date
// console.log(ts.getTime());
console.log(Math.floor(ts/1000));


// getting different parts of the date

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());