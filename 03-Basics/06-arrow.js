const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to the website`);  // this refer to the current context
    }
    


}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

function chai() {
    console.log(this);
}
// chai()

function chai1() {
    let name = "Aashish"
    console.log(this.name); // this keyword only work in object not in function inside function print undefined
}
// chai1()


const chai2 = () => {
    let username = "Htesh"
    console.log(this);
}
// chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(5, 10));

// Implicit return

const addTwo1 = (num1 , num2) => num1 + num2  // no need return keyword
// console.log(addTwo1(4 , 4));

const addTwo2 = (num1 , num2) => ({username : "hitesh", age : 40})  // in object parenthesis required
console.log(addTwo2(4 ,5));