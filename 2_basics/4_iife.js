// Immediate Invoke Function Expression  (IIFE)

(function dbConnection (){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ; used for break the function becoz other iife will not executed 

( (name) => {
    console.log(`DB CONNECTED, ${name}`);
})('Kanhaiya');
