function setUsername (username){
    this.username = username  // this kw take of thier value to user by .call method
    console.log("called");
}


function user (username, email, password) {
    // setUsername(username) // here function is called but not hold the variable and reference
    setUsername.call(this, username)    // .call and this key word is used for hold the reference, return value 
    this.email = email
    this.password = password
}


const user1 = new user('Kanhaiya', 'kanhaiya@gmail.com', 123456)

console.log(user1);