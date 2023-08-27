// for

for (let i = 0; i <= 10 ; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the good number");
    }
    // console.log(element);
}



// console.log(element);


for (let i = 1; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`INNER LOOP VALUE: ${j} AND INNER LOOP ${i}`);
    //  console.log(i + '*' + j + '=' + i*j);
   }   
}


let myArray = ["kanahiya", "Ravi", "Deepak"]

console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
  //  console.log(element);
}



// break and continue

console.log("Use of Break");

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 is detected`);
        break
    }
    
    console.log(`Value of i: ${i}`);        
}


console.log("Use of Continue");

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`5 is detected`);
        continue
    }
    
    console.log(`Value of i: ${i}`);        
}