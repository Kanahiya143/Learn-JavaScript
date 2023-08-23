// object singleton by constructor

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.email = "kanhaiya@google.com"
tinderUser.name = "Kanhaiya"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        usefullname:{
                firstname: "Kanahiya",
                lastname: "Sahni"
        }
    }
}

// console.log(regularUser.fullname?.usefullname.firstname); // ? used for check the value are present in the object or not
 
const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}
const obj4 = {5: "e" , 6: "f"}

// const obj3 = { obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}


// console.log(obj3);

const users = [
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    },
    {
        id: 1,
        email: "K@gmail.com"
    }
]
 
// console.log(users[1].email);

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    cousrname: "js in hindi",
    price: "free",
    courseInstructor: "Kanahiya"
}

const {courseInstructor: Instructor} = course //  Object destructured
// console.log(courseInstructor);
console.log(Instructor);

//  de structureing in react 

const navbar = ({company}) => {

}

navbar(company = "Kanhaiya")

// API form

// {
//    "name": "kanhaiya"
//    " course": "js in hindi"
//    "price": "free"
// }

[
    {},
    {},
    {},
    {}
]