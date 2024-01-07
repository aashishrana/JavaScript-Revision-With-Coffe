function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName   function refrence
//sayMyName()  // function execution
// sayMyName()

function addTwoNumber(number1 , number2) { // parameter
    console.log(number1 + number2);
     // some confusion
}

addTwoNumber(3 , "a"); // arguments
addTwoNumber(3 ,5)
const result = addTwoNumber(5,5);
console.log("Result is  : ", result );  // output undefined nothing return by the function


function loginUserMessage(username) {
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage());

// revision 