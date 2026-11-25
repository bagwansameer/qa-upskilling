// object - objects contains properties and behvaior.
// object contains variable and methods.
// object is collection of key and value pairs.

/* 
 
Different ways to create objects in JS and TS
 1. using 'object'type to directly define the values for a variable
 2. inline type object - we also define the datatype of the MediaKeySession
 3. using type aliases(js/ts)
 4. using the classes (js es16/ts)
 
 */

 //  1. using 'object'type to directly define the values for a variable
 // The TS 'Object' type represents all values that are not in primitive types

// without method
/* let employee:object={

    name:"John",
    age:30,
    salary:50000,
    job:"engineer"

}

console.log("Employee  Details are : ", employee); */

//with method
/*  
let employee1={
    name:"Max",
    age:35,
    salary:60000,
    job:"engineer",
    getdetails:function(){
            //console.log(this.name, this.age,this.salary,this.job); 
        return `${this.name} is of ${this.age} years of age ,with ${this.salary} salary ,working as an ${this.job}`;    
    }
}

console.log("Accessing object");
console.log("using # 1 - dot operator");
console.log("Employee1 name :  ",employee1.name);
console.log(employee1.getdetails());



console.log("using # 2 - bracket operator");
console.log("Employee1 name :",employee1["name"]);
console.log("Employee1 age :",employee1["age"]);
console.log("Employee1 salary :",employee1["salary"]);
console.log("Employee1 job :",employee1["job"]);




console.log("How to modify the value");
//employee1.salary=75000;
employee1["salary"]=75000;

console.log("Employee1 salary :",employee1["salary"]);
 */

//---------------------------------------------------------------------

// 2. Inline type object - we also define the datatype of the keys
// to avoid , as we need to same structure multiple based on how many objects we are creating.
/* let student:{
    name:string,
    age:number,
    grade:string,
    getsummary:()=>string
} =
{
    name:"charles",
    age:36,
    grade:"A",
    getsummary: function()
            {
                return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
            }
}

console.log(student.getsummary()); */

//---------------------------------------------------------------------

// 3. Using 'type' alias: allows to create a new name for existing type

// ex 1

/* type product={

    name:string,
    price:number,
    getInfo:()=>string,
};
let book1:product={

    name:"typescript",
    price:300,
    getInfo: function(){
        return `${this.name} book costs ${this.price}`;
    }

}

console.log(book1.getInfo()); */
/* console.log(book1.name);
console.log(book1.price); */

/* for(let i in book1){
    console.log(book1.name);
    console.log(book1.price);
} */

// Ex 2 - Intersection types

/*  type personal={

    name:string,
    age:number
 };

 type contact={
    email:string,
    phone:Number
 };

 type Candidate = personal & contact &{

    getContactinfo:()=>string;
 }


 let candidate:Candidate={

    name:"Max",
    age:45,
    email:"abc@com",
    phone:78956464,
    getContactinfo: function() {
        return `${this.name} can be contacted ${this.email} or ${this.phone}`;
    },
 }

 console.log(candidate.getContactinfo()); */


// 4 using classes

class Person{

    ssn:string;
    firstname:string;
    lastname:string;

constructor(ssn:string,firstname:string,lastname:string){

    this.ssn=ssn;
    this.firstname=firstname;
    this.lastname=lastname;
}

getFullName():string{
    return `${this.firstname} ${this.lastname}`;
}

getDetails():string{
    return `SSN ${this.ssn} Name : ${this.getFullName()}`;
}

}

//object creation

let person1= new Person("42516","Max","Fuller");
console.log(person1.getDetails());

let person2= new Person("23232","Barry","Allen");
console.log(person2.getDetails());