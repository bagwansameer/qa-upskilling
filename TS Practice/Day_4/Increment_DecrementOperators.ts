// Increment ++
// Decrement --

let x:number=10;
//post increment
// x++; // x=x+1;
// console.log(x);
//pre increment
// ++x;
// console.log(x)

//post increment
let res:number=x++;
console.log(res) // 10 - x is assigned to res and then the increment happens, hence the value of x is 10
 console.log(x)

//pre increment
let res1:number=++x;
console.log(res1) // 12 incremented value is assigned to res 
console.log(x)

//  the difference between post and pre increment comes only during assignment , on its own they are the same.

console.log("The value of x : ",x);
//post decrement
let res3:number=x--;
console.log(res3) // 12 - x is assigned to res and then the increment happens, hence the value of x is 10
console.log(x) // 11

//pre decrement
let res4:number=--x;
console.log(res4) // 10 decremented value is assigned to res 
console.log(x)
