let num:Array<number>=[1,2,3,4,5];
let fruits:string[]=["Apples","Oranges","kiwi","mango"];


console.log("Number's array : ",num);
console.log("Fruit's array",fruits);

// Lenght = attribute , does not have brackets

console.log("Length of array: ",num.length);

//Method 1   --- method , does have brackets
// push() = adds single or mutliple elements at the end of the array 

//syntax: array.push(ele1...elen)
num.push(6);
console.log("Number's array : ",num);
num.push(7,8);
console.log("Number's array : ",num);

// Method 2 
// pop() - removes last element from the array
//syntax: array.pop(ele1)
num.pop()
console.log("Number's array : ",num);
// to capture the last element that was removed
let popped=num.pop()
console.log("Popped element is ",popped)

// Method 3
// shift() - removed first element from an array
// syntax: array.shift()
let fruit=fruits.shift();
console.log("Removed fruit is :",fruit);
console.log("After shifting the elements ",fruits);


// Method 4
// unshift() - adds single or multiple elements to an array
// syntax: array.unshift(ele1...elen)

fruits.unshift("Dragonfruit","Grapes");
console.log("After performing unshift operations to the elements ",fruits);

// Method 5
// concat() - combines two or more arrays of same type
// syntax arr.concat(array1....arrayn)

let combinearray=num.concat([7,8,9],[10])
console.log("Concatenated Array : ", combinearray);

// Method 6
// slice() - Extracts a section of an array
// start - Index starts from Zero
// end - Index will be exclusive , if n is ending index then it will consider n-1
// syntax: array.slice(start, end)

let slicedarray=fruits.slice(0,4);
console.log("Sliced Array : ",slicedarray);

// Method 7
// splice() - Adda/removes elements from an array(from everywhere)
// syntax: array.splice(start, deletecount, item1....intemn)

// Ex 1 
let removedEle=fruits.splice(1,2);
console.log("After Splicing (1,2) : ", fruits);
console.log("Removed Elements :",removedEle);

// Ex 2 
fruits.splice(1,0,"banana","jackfruit");
console.log("After adding elements using splice",fruits);

// Ex 3 
fruits.splice(1,2,"Cherry","mulberry");
console.log("After removing and adding elements at the same time ",fruits);

//method 8
// indexof() - finds the index of an element, if element not found then return -1
// syntax : array.indexof(searchelement) or array.indexof(Search element, starting index)

// Ex 1 
let indexofCherry=fruits.indexOf("Cherry");
console.log("Index of Cherry is : ",indexofCherry);

// Ex 2 
let indexofChikku=fruits.indexOf("Chikku");
console.log("Index of Chikku is : ",indexofChikku);  // returns -1 , if element is not found

//Ex 3
let indexofkiwi=fruits.indexOf("kiwi",2);
console.log("Index of kiwi is : ",indexofkiwi);

// method 9
// includes() - check if elements exists , returns true or false
// syntax : array.includes(search element, from index)

let isBlueberryExit=fruits.includes("Blueberry");
console.log("Is Blueberry available : ",isBlueberryExit);


// method 10
// toString() - converts array to string
// syntax : array.toString();

let numString=num.toString();
console.log("Converted Array to string : " ,numString);

let dummystr:Array<string> =['w','e','l','c','o','m','e'];
console.log("Original Array : ", dummystr);
let str=dummystr.toString();
console.log("Converted to string Array : ", str);



