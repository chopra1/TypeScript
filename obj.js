//object types
function printCoordinates(pt) {
    console.log("The co-ordinate x value is " + pt.x);  //The co-ordinate x value is 12
    console.log("the co-ordinates y value is " + pt.y); //The co-ordinates y value is 34
}
printCoordinates({ x: 12, y: 34 });
//Optional properties
function printName(obj) {
    //console.log(obj.last.toUpperCase());  error - undefined
    var _a;
    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ first: "Mark" });
printName({ first: "Alice", last: "Allison" });

//function with union types
function printId(id) {
    console.log("Your ID is " + id);
    //console.log("Your id is " + id.toUpperCase());
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(123);

function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello " + x.join("and Welcome"));
    }
    else {
        console.log("Hello and welcome " + x);
    }
    return x.slice(0, 3);
    //If every member in a union has a property in common, you can use that property without narrowing:
}

const user = {
    name: "hitesh", email: "h@h.com", isActive: true
};
function creataUser({ name: string, isPaid: boolean }) { }
let newUser = { name: "Chandan", isPaid: false, email: "chandu@g.com" };
creataUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 0 };
}
createCourse();
let person1 = {
    name: "Mark",
    location: "Germany",
    isProgrammer: false
};
let person2 = {
    name: "Denny",
    location: "England",
    isProgrammer: true
};
console.log(person1);
console.log(person2);
//object could be defined anonymously
function sayHi(person) {
    console.log(`Hi ${person.name}`);
}
sayHi({ name: "Bhavesh", age: 36 });