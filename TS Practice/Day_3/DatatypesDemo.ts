
/* 
1. Primitive datatypes - Built in  - single value storage
number
string
boolean
null
undefined


2. Non Primitive datatypes  - objects - multiple value storage

array
class
function
interface
tuples


*/


// 1. Number Type - represents floating and integer.

/* let age:number=18;
let price=25.5;
let balance:bigint=98959222222898989n; // A number is only exact up to 9007199254740991 (Number.MAX_SAFE_INTEGER).
//  Beyond that limit, TypeScript has a separate type called bigint, written with an n at the end:

console.log("-----------------------------------")
console.log(typeof age);
console.log("Age : " +age);
console.log("-----------------------------------")
console.log(typeof price);
console.log("Price : " +price);
console.log("-----------------------------------")
console.log(typeof balance);
console.log("Balance : "+balance);


console.log("////////////////////////////////////////////////////////////////////////////////////"); */


// 2. String Type - represents textual data
// single quote , doublequote and back tick
/* 
let fname:string = "John";
let lname:string="Davis";

let greeting:string="Hello" + fname+lname;
console.log(greeting);

let greeting1:string="Hello " + fname+ " "+lname;
console.log(greeting1);


let greeting2:string=`Hello ${fname} ${lname}`;
console.log(greeting2);
 */
/* console.log("////////////////////////////////////////////////////////////////////////////////////"); 

// 3. Boolean Type - Represents only true or false

let isStudent:boolean=true;
let isWorking:boolean=false;


if(isWorking)
    console.log("student is set to boolean value true");
else
    console.log("working  is set to boolean value false");
 */

/* console.log("////////////////////////////////////////////////////////////////////////////////////"); 

// 4. Null and Undefined - represent the abscence of values

/* let emptyValue:null=null;

console.log(emptyValue);

let notAssigned:undefined=undefined;

console.log(notAssigned);

let price:number;
console.log(price) ; // variable price is used before being assigned */

/* console.log("////////////////////////////////////////////////////////////////////////////////////"); 

// 5. Any Type - represents any datatype in TS and loses typescript benefits like type safety

//let value:string="hello";
// value = 10; // type'number' is not assginable to type 'string'

/* let value1:any="welcome";
console.log(value1);

value1=10;
console.log(value1);

value1=true;
console.log(value1); */

/* console.log("////////////////////////////////////////////////////////////////////////////////////"); */

// 5. Union Type - combine multiple types

/* let id:number|string|boolean;

id  =123;
console.log(id);

id="welcome";
console.log(id);

id=false
console.log(id);
 */

// 7. Void Type - used for functions that don't return anything


function diff():void
{
    console.log("Hello World")
}



function sum():number
{
    return(10+20);
}

diff();


console.log(sum());
//