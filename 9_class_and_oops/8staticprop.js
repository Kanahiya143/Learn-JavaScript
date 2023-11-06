class User {
    constructor(username){
        this.username = username
    }

    static createId(){  // static properties restrict the access in other object 
        return console.log(`${this.username} your id is 1234abcd`);
    }
}

const kanhaiya = new User ("Kanhaiya")

// kanhaiya.createId()  // with static can't access and without accsesable.

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}


const obj1 = new Teacher ("Raman", "abd@gmail.com")

// obj1.createId() // extented class also cant use static properties function

console.log(obj1.username);


