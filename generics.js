// <T> is just the convention <T> is type operator  - e.g. we could use <X> or <A>
const addID = (obj) => {
    let id = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { id });
};
let person1 = addID({ name: 'John', age: 40 });
console.log(person1.id);    //267 (random value)
console.log(person1.name);  //John

function logLengths(a) {
    a.forEach((element) => { console.log(element.length); });
}
let arr = [
    'This string has a length property',
    ['This', 'arr', 'has', 'length'],
    { material: "plastic", length: 30 }
];
logLengths(arr); //33, 4, 30

const per1 = {
    name: 'John',
    age: 48,
    document: ['passsport', 'bank statement', 'visa'],
};
const per2 = {
    name: 'Barbie',
    age: 56,
    document: "passport, P56"
};
console.log(per1.document); //[ 'passsport', 'bank statement', 'visa' ]
console.log(per2.document); //passport, P56
