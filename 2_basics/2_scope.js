var c = 300

let a = 3000

if(true){
        let a = 10
        const b = 20
        var c = 30
        d = 200

       // console.log("Inner a =",a);
}



// console.log("outer a =",  a);  // let define a variable in the particular scope 
// console.log(b);  // same as let thier can not change 
// console.log(c);     // var delare the variable is globally and access from anywhere and manupulate thier value
// console.log(d);     // with any keyword delare the variable is globally and access from anywhere  



//===================================================================//

function one (){
        const username = "Kanhaiya"

        function two (){
                const website = "GitHub"
                console.log(username);
        }
        // console.log(website); // give error bcoz parent scope can not access the child scope variable

       two() // here we execute the two function, we can not execute two function out of one function scope and give error two not defined 
       // child scope can access the the parent scope variable 
}

one() // execute one function

if (true){
        const username = "Kanhaiya"
        if (username === "Kanhaiya") {
                const website = " GitHub"
                console.log(username + website);
        }
        // console.log(website); // can't  access becoz we are out of scope
}

// console.log(username); // can't  access becoz we are out of scope

// ++++++++++++++++++++++++++++ Interesting ex +++++++++++++++++++++++++++//

console.log(addOne(6));  
function addOne(num){   //  this type of declaration allow to access function before initialization 
        return num + 1
}




// addTwo(9)  // Cannot access 'addTwo' before initialization
const addTwo = function(num){  // this is called Hosting
        return num + 2
}

console.log(addTwo(9));

