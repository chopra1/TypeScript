//Narrowing in TypeScript
//In a TypeScript program, a variable can move from a less precise type to a more precise type.
//Here's a simple example showing how TypeScript narrows down the less specific type of string | number to more specific 
//types when we use if-statements with typeof:
function addAnother(val) {
    if (typeof val === 'string') {
        return val.concat(' ' + val);
    }
    return val + val;
}
console.log(addAnother('Woohoo')); //Woohoo Woohoo
console.log(addAnother(10)); //20

function getSpeedRatio(v) {
    if (v.type === 'Train') {
        return v.topSpeed / v.carriages;
    }
    v.topSpeed / v.windSpan;
}
var bigTrain = {
    topSpeed: 500,
    carriages: 20,
    type: "Train"
};
console.log(getSpeedRatio(bigTrain));  //20

function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    } //padding is number
    return padding + input;
} //padding is string
function printAll(strs) {
    if (typeof strs && strs === "object") { //gotten rid of the error above by checking if strs is truthy.
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
//One last word on narrowing by truthiness is that Boolean negations with ! filter out from negated branches.
function multiplyAll(value, factor) {
    if (!value) {
        return value;
    }
    else {
        return value.map(function (x) { return x * factor; });
    }
}
//Equality narrowing
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(container, factor) {
    if (container.value != null) {
        console.log(container.value);
        container.value *= factor;
    }
}
