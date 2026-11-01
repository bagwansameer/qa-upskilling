
// if condition


/* if(condition)
{

}
else
{

} */
/* 
// Example 1/*  - if 
let age:number=20;

if(age>=18)
{
    console.log("Eligible to vote!")
} */ 


//Example 2 - if else
// even odd problem
/* let numbers:number = 22;

if(numbers%2==0)
{
    console.log(`Number is Even : ${numbers} `); // its back and not single quote
}
else
{
    console.log(`Number is Odd : ${numbers} `);
} */

// Example 3 - Nested if else
// marks based on grade

/* let marks:number=38;

if(marks<0 || marks>100)
{
    console.log(`Invalid Marks ${marks} `)
}
else if (marks>=90 && marks<100 )
{
    console.log(`Its Grade A for ${marks}`);
}
else if(marks >=75 && marks<90)
{
    console.log(`Its Grade B for ${marks}`);
}
else if(marks >=60 && marks<75)
{
    console.log(`Its Grade C for ${marks}`);
}
else
{
    console.log(`Its Grade D for ${marks}`);
}
 */

// Example 4  : Browser selection

/* let browser:string="Safari";

if(browser==="Chrome")
{
    console.log(`Browser is ${browser} `);
}
else if (browser==="Safari")
{
    console.log(`Browser is ${browser} `);
}
else if (browser==="Edge")
{
    console.log(`Browser is ${browser} `);
}
else
{
    console.log(`some other browser`);
} */

// Switch case statement - it has expression and not condition like if , else if and nested if

/* switch(expression)
{
    case value1 : statements;
                  break;
    case value1 : statements;
                  break;            
    default : statements;
} */


// Example 5 :
// print day of week based on the value of day

/* let day:number=3;

switch(day){

    case 1 : console.log("Its Monday");
             break;
    case 2 : console.log("Its Tuesday");
             break;
    case 3 : console.log("Its Wednesday");
             break;
    case 4 : console.log("Its Thursday");
             break;
    case 5 : console.log("Its Friday");
             break;
    case 6 : console.log("Its Saturday");
             break;
    case 7 : console.log("Its Sunday");
             break;
    default: console.log("Invalid day entry");
             break;         

}
 */
    
// Example 6 : The switch statement can also include an expression

let x:number=10, y:number=100;

switch(x-y)
{
    case 0 : console.log("Result is Zero");
             break;
    case 5 : console.log("Result is Five");
             break;
    case 10 : console.log("Resutl is Ten");
             break;
    default : console.log("Result is not as expected");         

}
