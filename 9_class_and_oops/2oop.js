const user = {
    username : "kanahiya",
    email: "kanhaiyasahni082@gmail.com",
    age : 22, 
    loggedIn : true,

    welcomeMsg : function(){
        // console.log("Welcome to new world");
        console.log(`Username : ${this.username}`); // this use for current context
        console.log(this); // give the current object and thier properties
    }
}

console.log(user.username);
console.log(user.welcomeMsg());

console.log(this); // here this give the empty object in node.js enviroment and in browser enviroment it give window object 


function User (username, age, gender) {
    this.username = username // here this.username work as variable and only username is asigned value
    this.age = age
    this.gender = gender

    this.UserMsg = function (){
      console.log(`Welcom ${this.username}`);  
    }

    return this  // for better code practice
}

const userOne = new User("kanahiay", 22, "Male") // new keyword create new intances/context 
const userTwo = new User("Ramesh", 22, "Male")   // without new its overwrite the value if pass new value in fn and give unwanted properties
console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor) // give function User 
