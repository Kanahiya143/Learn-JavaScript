// we cant change the value of pi becouse pi have thier own properites like writable false, enumerable false and congigrable false



// example

console.log(Math.PI);

Math.PI = 7

console.log(Math.PI)


const abc = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(abc);


// create own object and set descriptor properties


const ram = {
    son1 : "Lav",
    son2 : "Kush",
    Wife : "Sita",
    brother : "Lakshman",
    family : function () {
        console.log("code blast");
    }
}
console.log( Object.getOwnPropertyDescriptor(ram, "Wife"));


Object.defineProperty(ram, "Wife",{
    // writable : false,
    enumerable : false
})
console.log( Object.getOwnPropertyDescriptor(ram, "Wife"));


for (const [key, value] of Object.entries(ram)) {
   if (typeof value !== 'function') {
      console.log(`${key} : ${value}`);
   } 
}