const coding = ["c++" , "Java", "Python", "JavaScript"]

const result = coding.forEach((item) => {
    console.log(item);
    return item

})
console.log(result);  // for each loop does not return anything


// filter 
const myNums = [1,2,3,4,5,6]

const newNums = myNums.filter((num) => {
    return num > 4   // returns the value 
})

console.log(newNums);

//Now using for each return the value
const clear = []
newNums.forEach( (num) => {
    if (num > 4) {
        clear.push(num)
    }
})

console.log(clear);