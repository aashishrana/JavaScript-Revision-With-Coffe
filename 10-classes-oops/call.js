function setUsername(username) {
  //complex db calls

  this.username = username;
  console.log("called");
}

function createUser(username, email , password) {
    setUsername.call(this, username) // Explicitly call
    this.email = email
    this.password = password
}

const chai = new createUser("chai" , "chai@google.com" , "123");
console.log(chai);