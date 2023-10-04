const user = {
    userName : "Hitesh",
    loginCount : 8,
    signIn : true,
    getUserDetails : function() {
        console.log("Got user Details from users");
        console.log(`userName : ${this.userName}`);
        console.log(this);
    }
}

console.log(user.userName)
console.log(user.getUserDetails());  //Execute the function completly

console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this; by default return
}

const userOne = new User("Hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne);
console.log(userTwo);