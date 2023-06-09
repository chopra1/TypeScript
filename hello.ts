console.log("Hello World!");
//HEllo World!

function welcome(name:string, date:Date){
    console.log(`Hello ${name} , Today is ${date.toDateString()}`);
}
welcome('Michael', new Date()); //
//Hello Michael , Today is Tue Jan 06 2023

let greetings : string = "Hello Chetan";
console.log(greetings.toUpperCase());
//HELLO CHETAN

let userID : number = 1234;
console.log(userID.toPrecision());
//toPrecion() formats a number to specified length.
//1234 

let isLoggedIn : Boolean = false;
console.log(isLoggedIn.valueOf()); //false
//The valueOf() method returns the primitive value of a string.
//The valueOf() method does not change the original string.
//The valueOf() method can be used to convert a string object into a string.

export{}