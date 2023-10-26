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