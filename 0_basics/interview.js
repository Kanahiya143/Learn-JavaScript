
// by storing the variables and accessing thier values it is catagories into two types ---->


// 1 -- Premitive Datatype --> 7 types --> Number, String, Boolean, Null, BigInt, Undefined, Symbol
 const total = 100
 let name = "Sam"
 const isLoggedIn = false 
 const outsideTemp = null
 let user;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id===anotherId);

 const bigNumber = 44551241487798988n


// 2 -- Reference  (non-primitive) --> Array, Objects, Functions



const heros = ["Ravi", "Kanhaiya", "Deepak"]

let myObj = {
    userName: "Kanhaiya",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof anotherId);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory type in js 

// 1--> Stack  (primitive)            2--> Heap (non-primitive)

let myYtName = "Kanahiya"

let anotherName = myYtName
anotherName = "codeShala"

console.log(anotherName);
console.log(myYtName);

let emp1 = {
    email: "kanhaiyasahni082@gmail.com",
    upi: "user@ybl",
}

let emp2 = emp1

emp2.email = "xyz@google.com"


console.log(emp1.email)
console.log(emp2.email)



