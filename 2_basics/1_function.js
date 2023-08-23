// Function

function myName (){
    console.log("ROM");
    console.log("ROM");
    console.log("BHAIYON !");
}

// myName() // function call

// function  adTwoNumbers(number1, number2){
//     console.log(number1 + number2)  
// } // by this we can not store the result in other var 

function  adTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result // in fuction after return statment lines are not executed
    // console.log("Systumm");

    return number1 + number2
}

const result = adTwoNumbers(2,"4")

// console.log("Result = ", result)

function loginUserMessage (username){ 
// function loginUserMessage (username = "sam"){ // we can pass default value and user name never undefined
    if(!username){ // if we pass default value then if statment never executed
        console.log("Please enter a name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kanahiya"))
// console.log(loginUserMessage("")) // just logged in
// console.log(loginUserMessage()) // undefined just loggged in


function  calculateCartPrice(...num){ // ... here called as rest operaters by which we take multiple arguments in the function call 
    return num
}

// console.log(calculateCartPrice(200, 200, 300, 400))

const product = {
    productname: "Fan",
    price: 30
}

function passObject(anyObject){ //  object in function
    console.log(`Product is ${anyObject.productname} and price is 
    ${anyObject.price}`)
}

passObject(product)

// direct pas the object at  the fuction call
passObject({
    productname: "Milk",
    price: 33
})


// array in function

const myNewArray = [200, 300, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 500, 600, 900])) // direct pass array






