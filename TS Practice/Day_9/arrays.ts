/*
Array is a special type of variable that stores mutliple values
The values can be of the same data type or different data types
Arrays are declared using [] of generic 'Array<T> type.
Indexing starts from 0
Arrays are an ordered collections of elements.
*/

// Declare an array or store an array

// Approach #1 : Using Literal

let names:string[]=[]; // Declaration

//Initialization /Assigning values 

/* names[0]="Mike";
names[1]="Charlie";
names[2]="Shalice";
names[3]="Denise";

console.log(names);

let names1:string[]=["Po","Tiger","Monkey","viper","shifu"]; // declaration and initialization

console.log(names1); 


console.log("-------------------------------"); */
// Approach #2 : Using Generic way , i.e. using array
// Specific for typescript and javascript

/* let empName:Array<string>=["Po","Tiger","Monkey","viper","shifu"];

let empId:Array<number>=[1,2,3,4,5];

let data:Array<string|number>=["max",12345,"lewis",45678];

let mixedData:Array<any>=[1,"Jack",true,null];


console.log("-------------------------------");
console.log(empName[0]);
console.log(empId[0]);
console.log(data[0]);
console.log(mixedData[0]); 

console.log("-------------------------------"); */


// Iterations in array
// printing all the values in the array one after the other.
// Example 1 : Traditional For loop
/* console.log(`Employee name`);
for(let i=0;i<empName.length;i++){
    console.log(`Employee name is ${empName[i]}`);
} */

/* for(const id of empId){
     console.log(`Employee id is ${id}`);
} */

//  Example 2 : Iterations using the 'for....in' loop(indexes)
/* console.log(`Employee id`);
for (let i in empId){
    console.log(empId[i]);
} */

// Example 3 : Iterations using the 'for....of' loop(indexes)
/* console.log(`Mixed data...`);
for (let value of data){
    console.log(value);
}
 */
// Example 4: Passing and array to the function
//search an element in an array using the function

/* function search(ele:number,arr:number[] ):boolean 
{
    for(let i=0;i<arr.length;i++){
     if (arr[i]===ele)
     {
        return true;
     }
    }
    return false;  
}

let arr:Array<number>=[12,56,78,96,26,45]

console.log(search(10,arr));
console.log(search(26,arr)); */

// Example 5 : A function takes an array and returns an array

function capitalizeWords(arr:string[]):string[]{

    let capArr:string[]=[];

    for(let i=0;i<arr.length;i++){
        capArr[i]=arr[i].toUpperCase();
    }

    return capArr;
}

let words:string[]=["charlie","mike","optimus"];

console.log(capitalizeWords(words));





