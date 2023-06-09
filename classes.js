var Person = /** @class */ (function () {
    function Person(n, c, e, p) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }
    Person.prototype.sayHello = function () {
        return "Hi, My name is ".concat(this.name, ". I have ").concat(this.pets, " pet.");
    };
    return Person;
}());
var person1 = new Person("Darshan", false, "d@d.com", 1);
var person2 = new Person("Raman", true, "r@r.com", 0);
console.log(person1.sayHello());
var People = [person1, person2];
console.log(People);
console.log(person1.name); //Darshan
person1.name = 'James'; // Error: read only
console.log(person1.isCool); // Error: private property - only accessible within Person class
console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(person1.pets); // Public property - so no problem
//shorter way
var erson = /** @class */ (function () {
    function erson(name, isCool, email, pets) {
        this.name = name;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    erson.prototype.sayMyName = function () {
        console.log("Your not Heisenberg, you're ".concat(this.name));
    };
    return erson;
}());
var erson1 = new Person('Danny', false, 'dan@e.com', 1);
console.log(erson1.name); // Danny
