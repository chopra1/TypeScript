"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));  // 7

function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper('Myself'));

function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
signUpUser("chetan", "c@c.com", false);
signUpUser("Himanshu", "h@history.com");
//syntax
//let loginUser = (name, email, isPaid) => {
//}
var heroes = ["thor", "spiter-man", "iron-man"];
heroes.map(function (hero) { return "Hero is  ".concat(hero); });
function consoleErr(errMessage) {
    console.log(errMessage);
}
function handleErr(errmsg) {
    throw new Error(errmsg);
}
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); }
};
console.log(sayStuff.sayHi("Chetan")); //Hi Chetan
console.log(sayStuff.sayBye("Pasta")); //Bye Pasta

var circle = function (diameter) {
    return "The circumference is " + diameter * Math.PI;
};
console.log(circle(10)); //The circucmference is 31.41592653589793
