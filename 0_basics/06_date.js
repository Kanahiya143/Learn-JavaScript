// Dates

let myDate = new Date()
console.log(myDate);                      // 2023-08-19T17:53:52.599Z
console.log(myDate.toString());           // Sat Aug 19 2023 17:53:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());       // Sat Aug 19 2023
console.log(myDate.toLocaleString());     // 8/19/2023, 5:53:52 PM
console.log(myDate.toLocaleDateString()); // 8/19/2023
// console.log(myDate.toISOString());        // 2023-08-19T17:53:52.599Z
// console.log(myDate.toJSON());             // 2023-08-19T17:53:52.599Z
// console.log(myDate.toTimeString());       // 18:01:51 GMT+0000
// console.log(myDate.toUTCString());        // Sat, 19 Aug 2023 18:03:48 GMT
// console.log(myDate.getTimezoneOffset());  // Sat, 19 Aug 2023 18:03:48 GMT


console.log(typeof myDate);


let myCreatedDate = new Date(2001, 6, 15, 2, 3) // month zero with zero
console.log(myCreatedDate.toLocaleString());

let myFormateDate = new Date("07-15-2001")
console.log(myFormateDate.toLocaleString());


let myTimeStamp = Date.now() // total milisec from 1 jan 1970
console.log(myTimeStamp);
console.log(myFormateDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // month start with zero
console.log(newDate.getDay()); //  1 -> monday ..... 7 -> sunday

console.log(`Current month is ${newDate.getMonth() + 1}`)

newDate.toLocaleString('default',{
    weekday: "long"
    
})