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
        name1 : "Kanahiya",
        name2 : "Ravi"
    },
    {
        name1 : "Kanahiya",
        name2 : "Ravi"
    },
    {
        name1 : "Kanahiya",
        name2 : "Ravi"
    },
    
]
myArray.forEach((item) => {
    console.log(item.name1); // when object key is string
})

const myArray1 = [
    {
        1 : "Kanahiya",
        2 : "Ravi"
    },
   
    {
        1 : "Kanahiya",
        2 : "Ravi"
    },
   
    {
        1 : "Kanahiya",
        2 : "Ravi"
    },
   
    
]

myArray1.forEach((item) => {
    console.log(item[2]); // when object key is number
})
