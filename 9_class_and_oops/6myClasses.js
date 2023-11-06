class client {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password 
    }

    encryptpwd(){
        console.log(`${this.password}abcd`);
    }

    changeUsername(){
        console.log(this.username.toUpperCase());
    }
}

const client1 = new client("Kanahiya", "abcd@fb.com", 12345)

client1.changeUsername()
client1.encryptpwd()


// if class functioality is not present

function User2 (username,email,password){
    this.username = username
    this.email = email 
    this.password = password
}

User2.prototype.encryptpwd = function(){
    console.log(`${this.password}abcd`);
}

User2.prototype.changeUsername = function(){
    console.log(this.username.toUpperCase());
}

const Superman = new User2("Superman", "super@g.com", 1234)

Superman.changeUsername()
Superman.encryptpwd()

