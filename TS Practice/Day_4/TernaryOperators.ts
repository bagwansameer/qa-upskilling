// Ternary or Conditional Operator

// ? :

// exp ? res1 : res2;

// Example 1 

let t:number=100, y:number=200;
let results:number = (t<y)?t:y;
// if the condition is true then results variable gets the value t assigned else it would be y

console.log(results);

// Example 2 

let personAge:number =17;

let re:string = (personAge>=18) ? "Adult" : "Child";
console.log(re);