// For loop :  it is used only when the number of iterations is known before hand

// syntax
/* 
for(initialization;CSSConditionRule;increment/decrement)
{
    statements;
} */

// Example 1 :

/* for(let i:number=1;i<=10;i++)
{
    console.log(i);
} */

// Example 2:
// print even number'
//method 1
/* for(let i:number=2;i<=10;i=i+2)
{
    console.log(i);
    
} */

//method 2

/* for(let i:number=1;i<=10;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
} */

//Example 3
// print numbers in descending order
/* for(let i:number=10;i>=1;i--)
{
    console.log(i);
}
 */
// Example 4

/* let i:number; //global

for(i=10;i>1;i--)
{
    console.log(i);
}
 console.log(i); */

 //example 5

 let i:number;

 for(i=1;i<=5;i++);

 console.log(i);

 //