class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username} `);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)  // super() is remove the .call and this concept  
        this.email = email
        this.password = password 
    }

    addCourse(){
        console.log(`Course is added by ${this.username}`)
    }
}

const Teacher1 = new Teacher("Ram", "ram@gmail.com", 1234)

Teacher1.addCourse() 
Teacher1.logMe() // here teacher class access the user class function and properties that is called inheritence

const user1 = new User('Krishna', 'abc@gmail.com', 1234)

user1.logMe()
user1.addCourse() // teacher class does not share thier properties and fn to User class but teacher clas acess the user clas

