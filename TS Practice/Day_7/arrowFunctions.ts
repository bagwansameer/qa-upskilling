// Arrow or Lambda functions
// its a concise mechanism to represent anonmyous functions.
// There are 3 parts to a lambda function.
// 1. Parameter - A function may optionally have parameters
// 2. The fat arrow notation/lambda notation (=>)- called as goes to operator
// 3. statements - represents the functions instruction set.

/* syntax:

let variable =(parameter) =>
{
    // block of code;
}

variable();
 */

// Example 1 : arrow function with no parameter and no return types 
/* let greet=():void=>
{
    console.log("Hello Typescript..");
}

greet();

 */ 
// Example 2 : arrow function with  parameter and  return types

/* let add=(a:number, b:number) =>
{
    return a+b;
}

console.log(add(4,5)); */

// Example 3 : Arrow function with implicit return , works only for a single return statements.
/* 
let add=(a:number, b:number) => a+b;

console.log(add(6,3));

let mul=(a:number, b:number) => a*b;

console.log(mul(6,3)); */

// Example 4 : Arrow function with optional parameters

/* let details=(id:number, name:string, mailId?:string)=>
{
    console.log(id);
    console.log(name);
    if(mailId!=undefined)
    {console.log(mailId);
    }
}

details(4,"mike","tgt@asdsa.com");
details(9,"mike"); */

// Example 5 : Arrow function with default parameters

/* let caludisc=(price:number,rate:number=0.50)=>
{

    let disc=price*rate;
    console.log("Discount amount "+disc);
}

caludisc(10,9);
caludisc(100); */

// Example 6 : Arrow function with  REST Parameter

/* let findElements=(...elements:( number | string)[]):number =>
{
        return elements.length;
}

console.log(findElements(3,"john",1,"max",3));
console.log(findElements(3,2,1,5,3));
console.log(findElements("sam","john","max")); */
/* 
let greet =(name:string)=>"hello"+name;
console.log(greet("max")); */

/* let greet=()=>
{return "hello";}

function greet1():{
    return "hello";
} */