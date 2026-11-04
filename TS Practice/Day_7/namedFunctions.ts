// Named Function : A function that is declared with a name

/*
function functionname(parameter):returntype{
    block of code;
}

how to call/invoke ? 
functionName();

*/

// Example 1 - Function with no parameters and no return type

/* function display():void{
    console.log("Msg from display function");
}


display(); */

// Example 2 - Function with  parameters and  return type
/* 
function addNumbers(x:number,y:number):number{

    return x+y;
}

console.log(addNumbers(4,5.6));
console.log(addNumbers(4,5,6)); // compile time error: expected 2 arguments but got 3
console.log(addNumbers(4)); // compile time error: expected 2 arguments but got 1
*/

// Example 3 : function with REST parameters
// REST parameters don't restrict the number of values that you can pass to a function.


/* function addNumbers(...nums:number[]){
    
    let i;
    let sum:number=0;

    for(i=0;i<nums.length;i++){
        sum=sum+nums[i];
    }

    console.log(`sum of numbers is ${sum}`);
}

addNumbers(1);
addNumbers(1,2);
addNumbers(1,2,6);
addNumbers(1,2,6,9,8); */

// Example 4 : Named function with REST Parameter - Multiple Types

/* 
function findElements(...elements:( number | string)[]):number
{
        return elements.length;
}

console.log(findElements(3,"john",1,"max",3));
console.log(findElements(3,2,1,5,3));
console.log(findElements("sam","john","max")); */

// Example 5 : Named function with optional  Parameter
// ? is used to make the parameter optional

/* function displayDetails(id:number, name:string, mailId?:string):void{
    console.log(id);
    console.log(name);
    if(mailId!=undefined)
    {console.log(mailId);
    }
}

displayDetails(3,"max","anc.com");
displayDetails(4,"mike");
//displayDetails(3); */


// Example 6 : Named function with Default Parameter
// belo rate is a default parameter
function calculateDisc(price:number,rate:number=0.50):void{

    let disc=price*rate;
    console.log("Discount amount "+disc);
}

calculateDisc(10,6);

calculateDisc(10);