function addTwo(num:number):number{
    return num + 2;
}
console.log(addTwo(5))

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper('Myself')

function signUpUser(name:string, email:string, isPaid:boolean=false){}
signUpUser("chetan", "c@c.com", false);
signUpUser("Himanshu", "h@history.com");

//syntax
//let loginUser = (name, email, isPaid) => {
//}

const heroes = ["thor", "spiter-man", "iron-man"]
heroes.map((hero): string => {return `Hero is  ${hero}`})   

function consoleErr(errMessage:string):void {
    console.log(errMessage);
}

function handleErr(errmsg:string):never {
    throw new Error(errmsg);
}

//function property with function signature
interface Speech {
    sayHi(name: string): string;       //normal
    sayBye: (name:string) => string;   //es6
}

let sayStuff: Speech = {
    sayHi: function(name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name:string) => `Bye ${name}`
}
console.log(sayStuff.sayHi("Chetan")); //Hi Chetan
console.log(sayStuff.sayBye("Pasta")); //Bye Pasta

const circle = (diameter : number): string => {
    return "The circumference is " + diameter * Math.PI; 
}
console.log(circle(10)); //The circucmference is 31.41592653589793

export{}