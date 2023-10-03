const promiseOne = new Promise(function(resolve , reject){
    //Do an asynchronus task
    //DB calls , cryptography , network

    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    } , 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})


// Promise 2 


new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async task two resolved");
})


//Promise three

const promiseThree = new Promise(function(resolve , reject) {
    setTimeout(function() {
        resolve({username : "chai" , email : "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);

})


// Promise four

const promiseFour = new Promise(function(resolve , reject) {
    setTimeout(function(){
        let error = true
        
        if(!error) {
            resolve({username : "Hitesh", password : "123"})
        } else {
            reject('reject : something went wrong');
        }
    }, 1000)
})


promiseFour.then(function() {
    console.log("Everything runs fine");
})

.catch(function() {
    console.log("Some eroor");
})

.finally(function() {
    console.log("Everything ok ");// Error may or may not be present but finally execute every time
})


const promiseFive = new Promise(function(resolve , reject) {
    setTimeout(function(){
        let error = false
        
        if(!error) {
            resolve({username : "Hitesh", password : "123"})
        } else {
            reject('reject : something went wrong');
        }
    }, 1000)
})

promiseFive
 .then((user) =>{
    console.log(user);
    return user.username

})

.then((username) => {
    console.log(username);
})
.catch(function(eroor){
    console.log(error)
}).finally(()=>{
    console.log("Either resolved or rejected finally executes definately");

})


const promiseSix = new Promise(function(resolve , reject) {
    setTimeout(function() {
        let error = true;

        if(!error) {
            resolve({username: "javascript" , password: "123"})
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})
