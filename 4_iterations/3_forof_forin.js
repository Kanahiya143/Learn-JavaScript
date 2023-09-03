// for of loop

const arr = ["Jay", "Shree", "Ram"]

for (const word of arr) {
    // console.log(word);
}

const greeting = "Good Morning"

for (const greet of greeting) {
     // console.log(`leter of greet ${greet}`);
}


// maps

const map = new Map()
map.set('IN', "India") 
map.set('USA', "United States Of America") 
map.set('FR', "france") 
map.set('PAK', "Pakistan") 

// console.log(map)

for (const [key, value]  of map) {
    // console.log(key, ':-' ,value)
}


const myObject = {
    game1: 'Pubg',
    game2: 'COC',
    py: 'python',
    js: 'javascript'
}

// for (const [key, value] of myObject) {
//     // console.log(key, ':-' ,value)  // object is not iterabke  in for in object 
// }



// +++++++++++++++++++++++++++++++++++++++ forIn Loop +++++++++++++++++++++++++++++++ //


for (const key in myObject) {  // forin loop used for iterate the object
  // console.log(`${key} for ${myObject[key]}`);
}

// for (const key in arr) {
//     console.log(key); // it print index of array
// }


for (const key in arr) {
    console.log(arr[key]); // in forin loop to print array by follow this syntax
}


for (const key in map) {  // map is not iteratable in forin loop
   //  console.log(key);
}