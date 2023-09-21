const myNums = [1,2,3,4,5,6,7]

const myTotal = myNums.reduce(function (acc , current) {
    console.log(`acc : ${acc} and currval : ${current} `);
    return acc + current
}, 0)  // zero is used to initialize the accumulator

// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js cours",
        price : 2999
    },
    {
        itemName : "js cours",
        price : 2999

    },
    {
        itemName : "js cours",
        price : 2999
    }
]

const total = shoppingCart.reduce((arr, item) => {
    return arr + item.price
},0)

console.log(total);