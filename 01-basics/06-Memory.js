// *************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutube = "hitesh.com"
let anothername = myYoutube
anothername = "ChaiAurCode"

console.log(anothername);
console.log(myYoutube);

// Non Primitive

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "aashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);
