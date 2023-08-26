// if and else 

const tempreture = 41

if (tempreture <= 50){
    // console.log("Tempreture is below 50");
}
else{
    console.log("tempreture is above 50");
}

// scope revision again

const score = 200

if (score > 100){
    let power = "fly"  // it can not access the variable from out of their scope
   // console.log(`User Power: ${power}`);
}


// here give the error --> variable is not defining
// console.log(`User Power: ${power}`); // for acessing out of scope then variable declare by var keyword  



// shortend notation of if statement

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); // not good practice 


// nested if else

// if (balance < 500){
//     console.log("your balance is less than 500");

// }else if(balance < 750){
//     console.log("your balance is less than 750");
    
// }else if (balance < 900){
//     console.log("your balance is less than 900");
   
// }else {
//     console.log("your balance is less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const userLoggedFromGoogle = false
const userLoggedFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to by Course");
}

if (userLoggedFromGoogle || userLoggedFromEmail || true ) {
    console.log("User logged in");
}





