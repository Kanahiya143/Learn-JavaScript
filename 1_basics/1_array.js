// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ravi", "akash", "Deepak"]

const myArr2  = new Array(1, 2, 3, 4, 5)
console.log(myArr[1]);


// array method

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(9));// not exist element always -1

const newArr = myArr.join()

console.log(newArr);
console.log(typeof newArr);


console.log("A", myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1);

console.log("B", myArr);

const myN2 = myArr.splice(1,3)
console.log(myN2)

console.log("C", myArr);
