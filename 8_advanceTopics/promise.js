const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("task 1"); 
      resolve() 
    }, 1000)
})

promiseOne.then(function () {
    console.log("completed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("completed");
})

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({ Name : "Kanahiya" , Gender : "Male"})
    },1000)
})

promiseTwo.then( (user) => {
    console.log(user);
})

const promiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username : 'Kanahiya', password : '1234'})
        }else{
            reject('Error : something went wrong')
        }
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=> {
    console.log(error)
}).finally(()=>{
    console.log("Promise is either resolved or rejected");
})

const promiseFour = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username : 'js', password : '1234'})
        }else{
            reject('Error : js went wrong')
        }
    }, 1000);
})

async function consumePromiseFour() {
    // console.log(await promiseFour);
   try {
    const response = await promiseFour
    console.log(response);
   } 
   catch (error) {
    console.log(error);
   }
}

consumePromiseFour()


async function getAllUsers() {
    try {
        const resopnse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await resopnse.json()
        console.log(data)
        
    } catch (error) {
      console.log("Error : " , error)  
    }
}
getAllUsers()

fetch('https://api.github.com/users/kanahiya143')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log('Error : ', error);
})
