
// number to string 

let age = 33
let ageInString = String(age)
console.log(ageInString);
console.log(typeof ageInString);

/**? result same but datatype is string */

// number and string to boolean

let number = 2
let numberInBoolean = Boolean(number)
console.log(numberInBoolean)
console.log(typeof numberInBoolean)

// string/number => true 
// 0 null undefined empty string => false

// String to Number 

let str = "abc"
let strInNumber = Number(str)
console.log(strInNumber)
console.log(typeof strInNumber)

// in string if there r num only o/p is num otherwise NaN but dtyp is num alwys

//---------------------------Operation-------------------------------//

let str1 = "hello "
let str2 = "kanhaiya !"
let str3 = str1 + str2 ;
console.log(str3)



console.log(1 + "2")
console.log("1" + 2)
console.log("1" + "2")
console.log(1 + "2" + 3)
console.log(1 + 2 + "3")
console.log("1" + 2 + 3)


//--------------------comparision--------------------------------//


console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)


console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)

// for comparision null treat as zero but for equality it works differently 



//----------------------prefix and postfix-------------------------------//

let a = 20 
a++
console.log("a = " + a)

let b = 20 
++b
console.log( "b = " + b)

let p = 20
let q = p++

console.log("p = " + p  + ", q = " + q)

let s = 20
let t = ++s

console.log("s = " + s  + ", t = " + t)


