// <T> is just the convention <T> is type operator  - e.g. we could use <X> or <A>
const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 1000);
  
    return { ...obj, id };
  };
  
  let person1 = addID({ name: 'John', age: 40 });
  
  console.log(person1.id);   //267 (random value)
  console.log(person1.name); //John
  
//Generics allow you to have type-safety in components where the arguments and return types are unknown ahead of time.
//In TypeScript, generics are used when we want to describe a correspondence between two values

interface hasLength {
    length: number;
}
function logLengths<T extends hasLength>(a: T[]) {
    a.forEach((element) => {console.log(element.length)}
);}

let arr = [
    'This string has a length property',
    ['This', 'arr', 'has', 'length'],
    {material: "plastic", length: 30}
];

logLengths(arr); //33, 4, 30

//Generics with interfaces
//When we don't know what type a certain value in an object will be ahead of time, we can use a generic to pass in the type:
interface Person<T> {
    name: string;
    age: number;
    document: T; //generic
}
const per1 : Person<string[]> = {
    name : 'John',
    age : 48,
    document : ['passsport', 'bank statement', 'visa'],
}
const per2 : Person<string> = {
    name : 'Barbie',
    age: 56,
    document : "passport, P56"
}
console.log(per1.document);
//[ 'passsport', 'bank statement', 'visa' ]
console.log(per2.document);
//passport, P56

export{}