const name = "aditya"
const repoCount = 22 

// string interpolation
console.log(`Hello my name is ${name} and repo count is ${repoCount} `)

const name1 = new String("aditya");

// string methods 



console.log(name1.length);

//extracting substring 

// 1)slice -> slice(start,end);
// 2)substring -> substring(start,end);
// 3)substr -> substr(start,length);


// replace (only once)

let f = "my name is aditya";
let nf = f.replace("aditya","nisha");

console.log(nf);

// replace serveral instance 

let f1 = "my name is aditya, and aditya likes to code";

let nf1 = f1.replace(/aditya/g,"nisha");

console.log(nf1);

// or use replace all method were we can mention the regular expression we want to be removed or replaced

let nf2 = f1.replaceAll("aditya","nisha");
console.log(nf2);


// convert to upper or lowercase 

console.log(f.toUpperCase());
console.log(f.toLowerCase());

// to concat strings mostly use string interpolation

console.log(nf1.concat(nf2));


// methods to remove blank spaces 

// 1) trimStart();
// 2) trim();
// 3)trimEnd();

// methods to do padding 
// 1)padStart();
// 2)padEnd();


// toString() method is used to convert the number to a string 

// charAt(index) => returns the character at this particular index in string

//convert string to array 

const first = "a,b,c,d,e,f";

const arr = first.split(",");
console.log(arr);


