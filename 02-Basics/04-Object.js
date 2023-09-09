// singelton
const tinderUser = new Object()

// const tinderUser1 = {}  literal
tinderUser.id = "123abc"
tinderUser.name = "Aashish"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);





const obj1 = {1: "a", 2: "b"}
const obj2 = {3 : "c", 4: "d"}

const obj3 = {...obj1 , ...obj2}  // spread operatoor
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLogg"));