// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ravi", "akash", "Deepak"]

const myArr2  = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);


// array method

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) // add 9 at 0 index
myArr.shift()    // remove 0 index ele

console.log(myArr.includes(9)); // check ele exist in array
console.log(myArr.indexOf(4)); // check ele index
console.log(myArr.indexOf(9));// not exist element always -1

const newArr = myArr.join()  // convert array in string 

console.log(newArr);
console.log(typeof newArr); 


console.log("A", myArr);

const myN1 = myArr.slice(1,3) // display from 1 to 3( 3 is not include) ele without original  array
console.log(myN1);

console.log("B", myArr);

const myN2 = myArr.splice(1,3) // display all ele from 1 to 3( 3 included) it remove the displayed element from original array 
console.log(myN2)

console.log("C", myArr);


// +++++++++++++++++++++++++++ array part 2 ++++++++++++++++++++++++


const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) // push array as a element 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);s

const allHeros = marvel_heros.concat(dc_heros) // add ele of two array in another array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // same as concat 
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7 ,[4, 5]]]

const real_another_array = another_array.flat(Infinity) // convert into single array of arr in arr and arr 
// console.log(real_another_array);


console.log(Array.isArray("Kanahiay")); // check its array or not
console.log(Array.from("Kanahiya")); // convert in array by letters
console.log(Array.from({name : "Kanahiya"})); // give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


