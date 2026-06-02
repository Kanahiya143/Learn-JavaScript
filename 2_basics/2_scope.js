var c = 300  // var have always globle scope it accesable and update from everywhere

let a = 3000  // it declare in globle scope it access from everywhere(any function )

if(true){
        let a = 10
        const b = 20
        var c = 30
        d = 200  // without let, var and const its also declare in globle scope like var

       // console.log("Inner a =",a);  //  let define a variable in the particular scope and also can not be access from outside of scope
}



// console.log("outer a =",  a);  // print value of globle scope  a
// console.log(b);  // same as 'let' 
// console.log(c);     // var delare the variable is globally and access from anywhere and manupulate thier value
// console.log(d);     // with any keyword delare the variable is globally and access from anywhere  



//===================================================================//

function one (){
        const username = "Kanhaiya"

        function two (){
                const website = "GitHub" // child scope can access thier parent scope variables
                console.log(username);
        }
        // console.log(website); // give error bcoz parent scope can not access the child scope variables

       two()  
}

one() // execute one function

 // two()  // we cant execute child function in globle scope

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

