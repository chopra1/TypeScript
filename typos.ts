type User  = {
    name: string;
    email: string;
    isActive: boolean;
    readonly _id: string;
    creditCardDedails?: number;
}

function createUser(user : User):User{
    return {name: "Nayak", email: "naya@gmail.com", isActive: false, _id: "1234"}
}
createUser({name: "", email: "", isActive: false, _id:"1234"})

let myUser: User = {
    name: "Jay",
    email: "h@h.com",
    isActive : false,
    _id : "1234",
    } 

myUser.email = "h@gmail.com";
//myUser._id = "abcd";

type cardNumber = {
    cardNumber : bigint;
}

type cardDate = {
    cardDate : Date;
}

type cardDetails = cardNumber & cardDate & {
    cvv : number;
}

//type Alliases
type StringOrNumber = string | number ;
type Personobject = {
    name : string;
    id : StringOrNumber;
}
const person1 : Personobject = {
    name: "Hommy",
    id: 1
}
const person2 : Personobject = {
    name: "ack",
    id : "ack-i2"
}
const sayHello = (person: Personobject) => "Hii " + person.name;
const sayGoodBye = (person: Personobject) => "Good Bye " + person.name;
console.log(sayHello(person1));    //Hi Hommy
console.log(sayGoodBye(person2));  //Good Bye Jack

//extending a type using intersection
type Animal = {
    name : string;
}
type Bear = Animal & {
    color: string;
}
const bear : Bear = { name: "Husky", color: 'Brown' }

export{}