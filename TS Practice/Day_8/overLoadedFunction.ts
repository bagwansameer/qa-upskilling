// Function overloading allows you to define multiple versions of a function with the same name but different parameters.

// Step 1: write a signature of function
// step 2: we need to implement a function
// Step 3: calling a function 

// Ex : 1 - Different parameter type
/* 
function getInfo(id:number):string; // signature
function getInfo(name:string):string; // signature


function getInfo(param:number|string):string{

    if(typeof param ==="number")
    {
        return `user id is ${param}`;
    }
    else
    {
         return `user name is ${param}`;
       
    }


}

console.log(getInfo(10));
console.log(getInfo("charlie")); */

// Ex 2 : Different number of parameters

/* function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(x:number, y:number,z?:number):number{
 
        if (z!=undefined){
            return x+y+z;
        }
        else{
            return x+y;
        }

}

console.log(add(4,5));
console.log(add(4,5,6)); */

// Ex 3 : Different return types

/* function processInput(str:string):string;
function processInput(num:number):number;

function processInput(input:string| number):string|number{

    if(typeof input ==="string"){
        return input.toUpperCase();

    }
    else{
    return input*2;
        }
}

console.log(processInput("charlie"));
console.log(processInput(100)); */

// Ex 4 : 

/* function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(input: string | number | boolean):string{

     if(typeof input ==="string"){
        return `Hello Value : ${input}`;
    }
    else if(typeof input ==="number"){
        return `Hello Value : ${input}`;

    }else{
        let res:string= input?"married":"single";
         return res;
    }
}
console.log(greet("Charlie"));
console.log(greet(65));
console.log(greet(false)); */