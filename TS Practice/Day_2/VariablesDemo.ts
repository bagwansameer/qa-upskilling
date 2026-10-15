// Variable : is used to store value inside a container
// syntax : keyword variableName:data_type= value
// include datatype         var age:number=30 
// exclude datatype         var age=30



/* 
var : this is to be avoided in modern TS/JSO
let: use this when you need to change the variable.
const: use this when the variable's value shoudn't be changed */


// **************************************************************
// Scope : accessible area , 
// functional scope(var) 
// and block scope(let and const)

// Example 1 : var(functional scope)

/* function varScope()
{
    if(true)
    {
        var msg="Hello World var";
        // console.log(msg);
    }
    
    console.log(msg);

}

varScope(); */

// Example 2 : let and const(Block scope)

/* function blockScope()
{
    if(true)
    {
        let msg="Hello World let";
        const greet="Hello World Const";

        console.log(msg);
        console.log(greet);
    }
      
}
blockScope(); */

// Example 2 : let and const(Block scope)

 /* function scopeDiff()
{
    if(true)
    {
        var num1=10;
        let num2=20;
        const num3 =30;

         console.log(num1);
        console.log(num2);
        console.log(num3); 
    }

    console.log(num1); // access - functional 
    console.log(num2); // cannot access - block
    console.log(num3); // cannot access - block
      
}
scopeDiff();
  */

//************************************************************ 
//   Declaration and Value Assignments

// Example 1 : var can be declared without initialization
/* var x; // declaration 
console.log(x);
x=30; // initilization
console.log(x); */


// Example 2 : let can be declared without initialization

/* let y; // declaration 
console.log(y);
y=40; // initilization
console.log(y); */


// Example 3 : const must be initialized at time of declaration.

/* const z=50; // declaration 
console.log(z); */


//************************************************************ 
//   Re-Declaration
// var - allows redeclaration
// let and const - do not allow the re-declaration (making the code safe)


// Example 1 : Var allow re-declaration
/* var city ='New York';
console.log(city);
var city ='New Orleans';
console.log(city); */


// Example 2 : let does not allow

/* let country ="India";
let country = "US";

console.log(country); */

// Example 3 : const does not allow

/* const country ="India";
const country = "US";

console.log(country); */