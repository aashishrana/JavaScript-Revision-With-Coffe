// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword() { // simple function but called as methods
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@google.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername())

// Behind the scene

// function User(username , email , password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}