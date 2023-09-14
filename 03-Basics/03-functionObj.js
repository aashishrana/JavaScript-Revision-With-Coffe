const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyObject) {
    console.log((`Username is ${anyObject.username} and price is ${anyObject.price}`));

}

// handleObject(user)
handleObject({
    username : "sam",      // in both way you can handle the object by variable and direct
    price : 399
})

const myNewArray = [200 , 400 , 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// you can do in both ways
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 , 1000]));    // in both way you can handle the array by variable and direct