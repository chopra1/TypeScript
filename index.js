var user = {
    name: "Hemal",
    id: 1,
    // username : "Hemal"
}; //done
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var person = new UserAccount("Happy", 2);
function getLength(obj) {
    return obj.length;
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
var point = { x: 11, y: 12 };
logPoint(point);
var point1 = { x: 12, y: 34, z: 54 };
logPoint(point1);
var point2 = { x: 34 };
//logPoint(point2); //error
var point3 = { x: 56, y: true };
//logPoint(point3); //error
var ViewPoint = /** @class */ (function () {
    function ViewPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return ViewPoint;
}());
var newViewPoint = new ViewPoint(45, 67);
//no matter how objects or class conform the shape if the objects or class has all the required properties, TypeScript will say they match.
logPoint(newViewPoint); //output 45, 67
//datatype (any)
// Any is the TypeScript escape clause. You can use any to either declare a section of your code to be dynamic and
// JavaScript like with the trade-off of type safety. or to work around limitations in the type system.
//A good case of any is JSON parsing
var myObj = JSON.parse("{}");

function debug(value)
debug("a string");
debug(23);
debug({ color: "blue" });
swap(pair);
// The call to swap is allowed because the argument can be matched by replacing the first any in pair with number and the second `any` with string.
// Unknown is a sibling type to any,
// if any is about saying "I know what's best",
// then unknown is a way to say "I'm not sure what is best, so you need to tell TS the type" example:unknown-and-never.
//Type Assertions
var myCanvas = document.getElementById("main_canvas"); //OR
var canvas = document.getElementById("main_canvas");
//Literal types
var constantString = "Hello World";
// Because `con stantString` can only represent 1 possible string, it has a literal type representation
constantString;
//literal Inference
//const req = { url: "https://example.com" , method: "GET" as "GET"};
//handleRequest(req.url , req.method as "GET");
//There are two ways to work around this.
//You can change the inference by adding a type assertion in either location:
// Change 1:
//const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
//handleRequest(req.url, req.method as "GET");
//Try Change 1 means “I intend for req.method to always have the literal type "GET"”.
// Change 2 means “I know for other reasons that req.method has the value "GET"“. You can use as const to convert the entire object to be type literals:
//const req = { url: "https://example.com", method: "GET" } as const;
//handleRequest(req.url, req.method);
//The (as const) suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number. 
//Non-null Assertion Operator (Postfix !)
//TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. 
//Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:
function liveDangerously(x) {
    console.log(x.toFixed(2));
}
liveDangerously(123.4576);
