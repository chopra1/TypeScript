"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "Nayak", email: "naya@gmail.com", isActive: false, _id: "1234" };
}
createUser({ name: "", email: "", isActive: false, _id: "1234" });

var myUser = {
    name: "Jay",
    email: "h@h.com",
    isActive: false,
    _id: "1234",
};
myUser.email = "h@gmail.com";

var person1 = {
    name: "Hommy",
    id: 1
};
var person2 = {
    name: "Jack",
    id: "ack-i2"
};
var sayHello = function (person) { return "Hii " + person.name };
var sayGoodBye = function (person) { return "Good Bye " + person.name };
console.log(sayHello(person1));    //Hi Hommy
console.log(sayGoodBye(person2));  //Good Bye Jack
