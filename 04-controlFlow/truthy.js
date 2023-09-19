const userEmail = []

if(userEmail) {
    console.log("Got user email");
}

else {
    console.log("Don't have user email");
}

// falsy values 

// false  , 0 , -0, BigInt 0n, "", null , undefined , NaN

//Truthy values

// "0", "false", " ", [], {}, function(){}

if(userEmail.length === 0) {
    console.log("Array is empty");
}


// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


// false == 0

// false == ''

// 0 == ''


//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10

val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary operator

//condition ? true : false
