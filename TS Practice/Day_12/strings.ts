/*  string - test value or a combination of characters

 1.single quote : string literal  ' '
 2.double quotes: string literal " "
 3.backtick - string template - when we try to use a string variable inside another string value ${variable}

 index starts with 0

 '' or "" or ``
 */

 // Declaration of string
let str1:string='This is a string';
let str2:string="This is a string";
let str3:string=`This is a string`;


// When to use backtick operator

let num:number=10;

console.log("Number is",num);

console.log(`Number is ${num}`);

// String methods

let str:string="Hello, Typescript!";

// #1 - length 
console.log(`Length of the string is ${str.length}`);

// #2 - converting case , toUpperCase() and toLowerCase()
console.log("Uppercase of string is " ,str.toUpperCase());
console.log("Lowercase of string is " ,str.toLowerCase());

// #3 - charAt(index) and indexOf(string)
console.log("Character at index:" ,str.charAt(9));
console.log("Index of string :" ,str.indexOf("!"));

// #4 - substring() - end index is exclusive n-1
console.log("The substring is :",str.substring(0,5));


// #5 - includes() returns true or false
// string value is case sensitive
console.log("Includes function : ",str.includes("abc"));
console.log("Includes function : ",str.includes("!"));

//#6 - startswith() and endswith() returns true or false
console.log("starts with  function : ",str.startsWith("abc"));
console.log("starts with  function : ",str.startsWith("Hello"));
console.log("ends with function : ",str.endsWith("//"));
console.log("ends with function : ",str.endsWith("!"));

//#7 - replace() - single or multiple characters
let str4:string=str.replace("Typescript","Javascript");
console.log("Replaced string is : ",str4);

// #8 - split() - breaks a string into multiple parts based on the delimiterand returns an array.

//Ex 1
let split_str=str.split(" ");
console.log("Split strings:",split_str);
console.log("Split strings:",split_str[0]);
console.log("Split strings:",split_str[1]);

// Ex 2
let mystring:string="abc@gmail.com,xyzabc"
let split_str1=mystring.split(",")
console.log("Split strings:",split_str1);
console.log("Split strings:",split_str1[0]);
console.log("Split strings:",split_str1[1]);

// #9 - trim(),trimstart(),trimend()

mystring="   welcome to typescript   ";
console.log("Original string",mystring)
console.log("Trim method ",mystring.trim());
console.log("Trimstart method ",mystring.trimStart());
console.log("Trimend method ",mystring.trimEnd());

// #10 concat - join 2 or more strings
// With variable 
str1="Welcome";
str2=" Typescript"
str3=" and Javascript";
console.log("The concatenated string is : ",str1.concat(str2));

// Without variable
console.log("Hello".concat(" World !"));

// concatinating multiple strings
console.log("concatinating multiple strings : ",str1.concat(str2).concat(str3));

// concept of string immutability
// immutable - cannot change original value
//num=10;

let res=num+5;
console.log(res);

// multiline string declaration with backtick
let multiline:string=`welcome
                        to typescript `;

console.log(multiline);
