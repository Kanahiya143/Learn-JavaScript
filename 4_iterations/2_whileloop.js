// while loop syntax

// while (condition) {
    
// }

let index = 0
while (index <= 10) {
//    console.log(`Value of index is ${index}`); 
   index = index + 2 
}


let myArray = ['Flash', 'Batman', 'Shaktiman']

let arr = 0 

while (arr < myArray.length) {
//  console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11 // in do while, condition is checked after statement executed

do {   // atleast one time run if conditon is false
    console.log(`score is ${score}`);
    score ++
} while (score <= 10);