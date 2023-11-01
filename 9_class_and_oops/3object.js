function multiplyBy5 (num) {  
    return num*5;
}

multiplyBy5.power = 2 
console.log(multiplyBy5(4));     // in js everythings reference of object and reference of obj is null
console.log(multiplyBy5.power);    // fn is also used as object
console.log(multiplyBy5.prototype);  // js is prototypcal inheritance



function user (username, price){
    this.username = username
    this.price = price
}

user.prototype.increment = function(){  // add prototype and properties in function from outside
    console.log(`${this.username} Incremented price = ${this.price + 20}`);
}

user.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);
}


const chai = new user("chai", 50)
const coffee = new user("coffee", 200)

console.log(chai);
console.log(coffee);
chai.printMe()
coffee.increment()

