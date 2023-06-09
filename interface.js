//Interface will defin ehow an object should look.
//Interfaces are very similar to type aliases, and in many cases you can use either.
//The key distinction is that type aliases cannot be reopened to add new properties, vs an interface which is always extendable.
//As a rule of thumb, the TypeScript docs recommend using interfaces to define objects, until you need to use the features of a type.
const chetan = { name: "Chetan", email: "c@c.com", _dBid: 1100123,
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (couponname, off) => {
        return 10;
    }
};
//update the value
chetan.email = "chetan@gmail.com";

function sayHi(person) {
    console.log(`Hi ${person.name}.`);
}
sayHi({ name: "Maulik", age: 25 });
const bear = { name: "Winny", color: "yellow", tail: true };
const dog = { name: "Hikey", tail: true };
//Differences Between Extends And Implements. "extends" is used to create a subclass that inherits properties and methods 
//from a parent class, while "implements" is used to create a class that implements an interface.

class Person {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    format() {
        return this.username.toLocaleLowerCase();
    }
}
//Must be object that implements the hasFormatter Interface
let person1;
let person2;
person1 = new Person("Danny", "password123");
person2 = new Person("Jane", "typeScripter1990");
console.log(person1.format()); //danny

let people = [];
people.push(person1);
people.push(person2);

console.log(people);
//output:
// [
//     Person { username: 'Danny', password: 'password123' },
//     Person { username: 'Jane', password: 'typeScripter1990' }
//   ]