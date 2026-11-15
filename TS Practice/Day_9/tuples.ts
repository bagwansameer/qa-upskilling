// Tuple is a fixed length array where each element has specific type
// it helps in storing multiple fields of different data types together

// Example 1 : tuple with 2 values

/* let person:[string , number]=["john",456];

console.log(person[0]);
console.log(person[1]);
console.log(person); */

// Example 2 : tuple with multiple  values

let person1:[string , number, boolean, number, string]=["john",456,true,759,"denise"];
console.log(person1);

// Example 3 : Iterating over a tuple using a traditional for loop
/* for (let i=0;i<person1.length;i++){
    console.log(person1[i]);
} */


// Example 4 : Iterating over a tuple using a for...in loop (index based iteration)

/* for (let i in person1){
    console.log(person1[i]);
} */

// Example 5 : Iterating over a tuple using a for...of loop (value based iteration)

/* for (let i of person1){
    console.log(i);
} */

// Example 6 :Tuple Array

let students:[number, string][]=[[123,"Billy"],[124,"Jill"],[125,"Jack"]];
console.log(students.length);
console.log(students[2][1]);// two dimensional array

let res=students[2];
console.log(res[0]);
console.log(res[1]);