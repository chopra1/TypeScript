//Narrowing in TypeScript
//In a TypeScript program, a variable can move from a less precise type to a more precise type.
//Here's a simple example showing how TypeScript narrows down the less specific type of string | number to more specific 
//types when we use if-statements with typeof:

function addAnother( val: string | number) {
    if (typeof val === 'string'){
        return val.concat(' ' + val)
    }
    return val + val;
}
console.log(addAnother('Woohoo')) //Woohoo Woohoo
console.log(addAnother(10));      //20

interface Vehicle {
    topSpeed : number;
}
interface Train extends Vehicle {
    carriages : number;
    type : 'Train';
}
interface Plane extends Vehicle {
    windSpan : number;
    type : 'Plane';
}
type TrainOrPlane = Train | Plane;

function getSpeedRatio(v : TrainOrPlane) {
    if(v.type === 'Train') {
        return v.topSpeed / v.carriages;
    }
    v.topSpeed / v.windSpan;
}

let bigTrain : Train = {
    topSpeed : 500,
    carriages : 20,
    type : "Train"
}
console.log(getSpeedRatio(bigTrain));  //25

function padLeft(padding: number | string , input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }  //padding is number
    return padding + input;
}  //padding is string

function printAll(strs: string | string[] | null) {
    if(typeof strs && strs === "object"){  //gotten rid of the error above by checking if strs is truthy.
        for (const s of strs){
            console.log(s);
        }
    }else if(typeof strs === "string"){
        console.log(strs)
    }
}

//One last word on narrowing by truthiness is that Boolean negations with ! filter out from negated branches.
function multiplyAll(
    value: number[] | undefined,
    factor: number
    ): number[] | undefined {
        if (!value) {
            return value;
        } else {
            return value.map((x) => x * factor);
        }
    }  

//Equality narrowing
function example( x: string | number , y: string | boolean) {
    if ( x === y ) {
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

//loose equality
interface Container {
    value: number | null | undefined;
}
function multiplyValue(container: Container, factor: number){
    if (container.value != null){
        console.log(container.value);
        container.value *= factor;
    }    
}