const myNum = [1,2,3,4,5,6]

// const newNums = myNum.map((num) => {
//     return num + 10  // map return atomatically
// })

const newNums = myNum
                  .map((item) => item * 10)
                  .map( (item) => item + 10 )
                  .filter( (item) => item >= 40)

console.log(newNums);