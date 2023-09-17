const accountId = 14453;
let accountEmail = "aashish@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


console.table([accountId , accountEmail , accountPassword , accountCity] , accountState);
// console.log(accountState);

// prefer not to use var due to block scope and functional scope"
// var variable can be access from anywhere globally

const score = 200
var power = "high"
if(score > 100) {
    var power = "fly"
    console.log(`'user power  :${power}'`);  // this is the problem with var you can access from anywhere 
}

console.log(power); // acces value from nearby