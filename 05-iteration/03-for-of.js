// for of

// ["", "", ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello WOrld"
for (const greet of greeting) {
    // console.log(`Each character is ${greet}`);
}

// Maps  stores unique values map are not iteratable

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State Of America")
// console.log(map);

for (const key of map) {
    // console.log(key);  This will print all values
}


for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}


//Object
const myObject = {
    sirname : "Kushwaha",
    name : "Aashish"

}

// for (const key of myObject) {
//     console.log(key);       for off loop not works on Objects
    
// }