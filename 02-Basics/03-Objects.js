//singelton
//Object.create use constructor

// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Hitesh",
    age : 18,
    [mySym] : "mykey1",
    location : "jaipur",
    "email" : "hitesh@google.com",  // any type both fine
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
    "full name" : "Choudhary",

}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);// not access by dot method
console.log(jsUser[mySym]);


jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
console.log(jsUser);


jsUser.greeting = function() {
    console.log("Hello js user");
}


jsUser.greetingTwo = function() {
    console.log(`Hello js user ${this.age}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting);
//

console.log(jsUser.greetingTwo());