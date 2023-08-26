const user = {
    username: "Kanahiya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to my website`);
        console.log(this); // it give current context of object
    }
}

// user.welcomeMessage()
// user.username = "Deepak"
// user.welcomeMessage()


console.log(this)   // it give empty object and in browser give window object

// function one(){
//     console.log(this); // in the function this keyword give globle value of object
// }

// one()

function one(){
    username: "kanhaiya"
    console.log(this.username); // it gives undefined means this keyword working on object
}

// one()

const two = function(){
    let username = "Kanahiya"
    console.log(this.username) // is also give undefined and only this give globle value of object
}
 // two ()

 const three = () => {       // Arrow Function
    let username = "Kanahiya"
    console.log(this.username) // undefined And only this give empty object
 }

 // three()


 const addTwoNumber = (num1, num2) => { // basic arrorw function or explicit return
    return num1 + num2
 }
 
 console.log(addTwoNumber(5, 6))

 //const addThree = (num1) => num1 + 3 // implecit return arrow function
 const addThree = (num1) => (num1 + 3) // implecit return arrow function

console.log(addThree(5));

const objReturn = () => ({username: "Kanhaiya"}) // object return by arrow fn

console.log(objReturn());

const myArr = [1, 2, 3, 5, 6] 
myArr.forEach( function (){})
myArr.forEach( () => {} )