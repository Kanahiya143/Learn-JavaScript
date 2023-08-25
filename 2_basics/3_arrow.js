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

one()

const two = function(){
    let username = "Kanahiya"
    console.log(this.username) // is also give undefined
}
 two ()

 const three = () => {       // Arrow Function
    let username = "Kanahiya"
    console.log(this.username) // undefined
 }

 three()