const webTech = ["HTML", "CSS", "JavaScript", "React", "PHP"]

webTech.forEach( function (val){  // do not use function name here
   // console.log(val);
})


webTech.forEach((item) => { // using arrow function
  //  console.log(item);
})

// function printMe(item) {  // by using function
//     console.log(item)
// }

// webTech.forEach(printMe) // here give only reference

webTech.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


const myArray = [
    {
        1: "Kanahiya",
        2: "Ravi"
    },
    {
        1: "Kanahiya",
        2: "Ravi"
    },
    {
        1: "Kanahiya",
        2: "Ravi"
    },
    {
        1: "Kanahiya",
        2: "Ravi"
    }
]