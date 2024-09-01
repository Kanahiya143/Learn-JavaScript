const name = "Kanhaiya"
const score = 80

console.log(name + " is scoring " + score) // old waty to conconate string

console.log(`${name.toUpperCase()} is scoring ${score}`); // modern way by using backtics

const gameName = new String('Kanahiya')
console.log(gameName)
console.log(gameName[2])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(0))
console.log(gameName.indexOf('a'))
console.log(gameName.toLowerCase())

const newString = gameName.substring(0,5)
console.log(newString)
 
const anotherString = gameName.slice(-7,5)
console.log(anotherString);

const newStringOne = "     Kanahaiya     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kanhaiya.com/sahni%20kanhaiya"
console.log(url.replace('%20', '-'));
console.log(url.includes('kanhaiya'));

const nextString = new String('Kanahiya-Sahni-Kanhaiya')
console.log(nextString.split('-'));
