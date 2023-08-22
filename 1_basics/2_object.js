//  singleton 
// Object.create // singleton object declare method 

// object literals

const mySym = Symbol("key1") // declare a symbol 

const Jsuser = {
    name: "Kanahiya",
    "full name": "Kanhaiya Sahni",
    [mySym]: "mykey1", // symbol used as key
    age: 22,
    location: "Jaipur",
    email: "kanhaiya@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]    
}

console.log(Jsuser.email); // print the object key value
console.log(Jsuser["email"]); // another method to print  obj k val
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]); // print the value of symbol 

Jsuser.email = "kanhaiya@chatgpt.com" // change the value of obj key

// Object.freeze(Jsuser) // freeze the object no changes apply

Jsuser.email = "kanhaiya@microsoft.com"
// console.log(Jsuser); // print the object


Jsuser.greeting = function(){
    console.log("Hello js user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(Jsuser.greeting()); // use function as a object key
console.log(Jsuser.greetingTwo()); 

