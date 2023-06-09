class Person {
    readonly name : string;    //this property is immutable, It can only be read.
    private isCool : boolean;  //can only access or modify from methods within the class.
    protected email : string;  //can access or modify from this class or subclasses
    public pets : number;      //can access or modify from anywhere.

    constructor(n: string, c: boolean, e: string, p: number) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p
    }
    sayHello() {
        return `Hi, My name is ${this.name}. I have ${this.pets} pet.`
    }
}
const person1 = new Person("Darshan", false, "d@d.com", 1);
const person2 = new Person("Raman", true, "r@r.com", 0);
console.log(person1.sayHello());
//Hi, My name is Darshan. I have 1 pet.

let People : Person[] = [person1, person2];
console.log(People);
/* [
  Person { name: 'Darshan', isCool: false, email: 'd@d.com', pets: 1 },
  Person { name: 'Raman', isCool: true, email: 'r@r.com', pets: 0 }
]*/
console.log(person1.name); //Darshan

//person1.name = 'James'; // Error: read only
//console.log(person1.isCool); // Error: private property - only accessible within Person class
//console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses

console.log(person1.pets); // Public property - so no problem

//shorter way
class erson {
    constructor(
      readonly name: string,
      private isCool: boolean,
      protected email: string,
      public pets: number
    ) {}
  
    sayMyName() {
      console.log(`Your not Heisenberg, you're ${this.name}`);
    }
  }
  
  const erson1 = new erson('Danny', false, 'dan@e.com', 1);
  console.log(erson1.name); // Danny

  class Programmer extends Person {
    programmmingLanguage : string[];

    constructor(n: string, c: boolean, e: string, p: number, pl: string[]){
        //The super call must apply for parameters of base {Person} class
        super(n, c, e, p);
        this.programmmingLanguage = pl ;
    } 
  }

  