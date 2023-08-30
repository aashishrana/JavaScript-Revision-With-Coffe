// primitive
// 7 types : String , Number , Boolean , null , undefined, Symbol ,Bigint 
// loosely typed


// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId);

// Refrence nOn primiteive
//Array , Object, Functions

const heroes = ["saktiman" , "nagraj"];

let mybj = {

}

const myFunction = function() {
    console.log("hello");
}

console.log(typeof myFunction);