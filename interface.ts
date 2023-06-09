//Interface will define how an object should look.
//Interfaces are very similar to type aliases, and in many cases you can use either.
//The key distinction is that type aliases cannot be reopened to add new properties, vs an interface which is always extendable.
//As a rule of thumb, the TypeScript docs recommend using interfaces to define objects, until you need to use the features of a type.

interface WorkLog {
    name : string,
    email: string,
    _dBid : number,
    work ?: string,
    startTrial(): string, //function
    getCoupon(couponname: string , value: number): number
}

interface Responsibility extends WorkLog {
    role : "Admin" | "Tl" | "Learner"
}

const chetan : Responsibility = {
    name: "Chetan" , 
    email: "c@c.com" , 
    _dBid: 1100123 , 
    githubToken : "github" ,
    role : "Learner" ,
    startTrial: () => {
    return "trial started"
    },
    getCoupon: (couponname: "discout",
    off: 10) => {
    return 10
    }
}

//Reopening of the interface
interface WorkLog {
    githubToken : string
}

//update the value
chetan.email = "chetan@gmail.com";

interface Client {
    name : string
    age: number
}
function sayHi(person: Client){
    console.log(`Hi ${person.name}.`);  
}
sayHi({ name: "Maulik", age: 25});
//Hi Maulik

//Extending Interface
interface Animal {
    name : string;
}
interface Bear extends Animal {
    color : string;
}
const bear : Bear = { name: "Winny", color: "yellow", tail: true }
//can extend interface with more properties
interface Animal {
    tail: boolean;
}
const dog: Animal = { name: "Hikey", tail: true };

//We can tell the class that it may contain certain properties and methods by implementing an interface
interface HasFormatter {
    format() : string;
}
//Differences Between Extends And Implements. "extends" is used to create a subclass that inherits properties and methods 
//from a parent class, while "implements" is used to create a class that implements an interface.
class Person implements HasFormatter {
    constructor( public username: string, protected password : string ) {}

    format(): string {
        return this.username.toLocaleLowerCase();
    }
}
//Must be object that implements the hasFormatter Interface
let person1 : HasFormatter;
let person2 : HasFormatter;

person1 = new Person("Danny", "password123");
person2 = new Person("Jane", "typeScripter1990");

console.log(person1.format()) //danny

let people : HasFormatter[] = [];
people.push(person1);
people.push(person2);
console.log(people)
//[
//    Person { username: 'Danny', password: 'password123' },
//    Person { username: 'Jane', password: 'typeScripter1990' }
//]

export{}