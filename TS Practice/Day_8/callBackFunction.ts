// A callback function : A function passed as an argument to another function

// Ex 1:

// Function that takes call back fucntion as an parameter
/* 
function greet(name:string, callback:(message:string)=>void){
    console.log(name);
    callback("hello");  // executing the callback function
}

//callback function

function showMessage(message:string){
    console.log("Hello");
}

greet("Mike",showMessage); */

// Ex 2 :

//callback function
function displayResult(result:number):void
{
    console.log(result);
}

function sum(a:number, b:number, callback:(result:number)=>void){
    let result=a+b;
    callback(result);
}


sum(10,20,displayResult);
