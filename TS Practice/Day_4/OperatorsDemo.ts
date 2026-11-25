// Learning about Operators in Typescript

let a:number=10;
let b:number=20;

// single statement to define multiple variable

let c:number=30, d:number=40;

// Airthematic Operations
console.log("-*-*-*-*-*Airthematic Operations*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-")
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(5**2);
// Assignment Operators 
a=10;
b=5;

// a=a+b;
// a+=b; // different way of doing the same thing.

console.log("-*-*-*-*-*Assignment Operations*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-")
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

// Relational operators - returns true or false inshort boolean values
//  > < >= <= == != ===(strict equality)
console.log("-*-*-*-*-*Relational Operators*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-")
a=10;
b=20;


console.log(a>b);  // false
console.log(a<b);  // true
console.log(a<=b); // true
console.log(a>=b); // false
console.log(a==b); // false
console.log(a!=b); // true

console.log("difference between == and === : interview question");

let num3:any=10; // number type
let num4:any="10" // string type

console.log(num3==num4); // only compares value
console.log(num3===num4); // compare values along with datatypes

// Logical operators - returns true or false inshort boolean values
// &&  || !
// can be used only between boolean variables
// returns either true or false
console.log("-*-*-*-*-*Logical Operators*-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-")

// b1   b2     &&    ||   !b1
//---------------------------
// T    T       T    T     F
// T    F       F    T
// F    T       F    T     T
// F    F       F    T


let b1:boolean=true;
let b2:boolean=false;

console.log(b1&&b2); // false
console.log(b1||b2); // true
console.log(!b1); // false
console.log(!b2); //true

// combination of logical and relational operator
console.log("-*-*-*-*-*Mix of Logical and Relational Operators*-*-*-*-*-*-*-*-*-*-**-*-*-*")
console.log(20>5 && 10>5);  // true
console.log(10<20 || 5>10); // true
//
