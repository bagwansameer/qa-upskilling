/* 
for each - returns void
Map() - returns array
Filter() - returns array
reduce() - returns single value
Some() - returns boolean
every() - returns boolean
 */

//  #1 : For each
/*  executes a function once for each array element
 It takes function as a parameter
 */// syntax : array.forEach(function(currentValue, Index, array){})

// Ex 1 : Get index of all the fruits with value

let fruits:Array<string>=["apple","kiwi","orange","banana","cherries"];

/* console.log("Printing fruits along with index and values using for loop : ");

for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
} */
/*
console.log("Printing fruits along with index and values using for each loop : ");

fruits.forEach(function(ele,index){
    console.log(`${index},${ele}`);
})
*/

// using arrow function
/*  fruits.forEach((ele,index)=>{
    console.log(`${index},${ele}`);
}) 
 */
// Ex 2
/* console.log("Printing fruits after using touppercase to capitalize the elements in array for each loop : ");
fruits.forEach((ele)=>{
    console.log(ele.toUpperCase());
}) */

// #2 : map()
 /* creates a new array with the result of calling the function on every element of an array
 it takes the function as parameter
 returns the same number of element , we have in original array
 syntax : array.map(function(currentValue, Index, array){})

 */

// Ex 1
// Get square of all numbers in an array 
/* console.log("Printing squared numbers from an array : ");
let numbers:number[]=[1,2,3,4,5];

let squarenumber=numbers.map(function(val){
    return val*val;
})
console.log(squarenumber);

*/

// Double all numbers in an array 

/* console.log("Double all the numbers in an array : ");

let numbers:number[]=[1,2,3,4,5]; */

/* let doublenumber=numbers.map((val)=>{
    return val+val;
}) */

// Alternate code
// If their is an single return statement then there is no need to have the curly braces 
// even the return keyword can be removed. 

/* let doublenumber=numbers.map((val)=> val*2);

console.log(doublenumber); */

// #3 filter()
/* creates a new array with all the elements that pass/satisfy the function
it takes the function as parameter
returns the same or fewer number of elements compared to the original array */
// syntax : array.filter(function(currentValue, Index, array){})

//Ex 1

let numbers:number[]=[1,2,3,4,5,6,7,8,9,10];

/* let even_number=numbers.filter(function(ele){
    if(ele%2==0){
        return ele;
    }
}) */

// or 

/* let even_number=numbers.filter((ele)=>ele%2==0);

console.log("Even Numbers are : ",even_number); */

// Ex 2

/* let number3=numbers.filter((ele)=>ele>3);

console.log(" Numbers are > 3 : ",number3);

 */

// # 4 Reduce() 
/*  Applies a function on every element of an array and returns a single value.
 syntax : array.reduce(function(accumalator, currentValue, Index, array){})
accumalator - the accumulated value from previous iteration
current value - the current element being processed
 */

// Ex 1: total (sum) of all elements in an array

let total=numbers.reduce(function sum(total,ele){ 

    return total+ele; // here total , i.e the accumalator is zero by default
})

console.log("Total of array ",total)

// #5  some()
/*
 checks if some condition is getting satisfied 
 returns true if at aleast one element passes the condition else false
*/

//  syntax : array.some(function(currentValue, Index, array){})

// Ex 1  - check if array contains negative number

let hasNegative =numbers.some((ele)=>ele<0)
console.log("Are there any negative values in the array : " ,hasNegative);

// #6  every()
/*
 checks if all conditions are getting satisfied 
 returns true if allelement passes the condition, else false
*/

//  syntax : array.every(function(currentValue, Index, array){})

// Ex 1 - to check if all the numbers are even

let alleven=numbers.every((ele)=>ele%2==0);
console.log("Are all the numbers even : " ,alleven);

// Ex 2 - to check if all the numbers are greater than 1

let one=numbers.every((ele)=>ele>=1);
console.log("Are all the numbers greater than 1 : " ,one);

