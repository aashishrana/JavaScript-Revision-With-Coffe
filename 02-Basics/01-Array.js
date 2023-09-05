const arr = [1,2,3,,4,5];
console.log(arr[3]);

const myArr2 = new Array(2,"hello", true, {name : "Ashish"})
// console.log(myArr2[3]);
// console.log(myArr2[3].name);
// myArr2.push(6);
// myArr2.pop();

const newArr = myArr2.join();
// console.log(newArr);
// console.log(typeof myArr2);
// console.log(typeof newArr);

// slice and splice
console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3) /// slice does not mainipulate with original array and last index will not be include
console.log(myn1);
console.log("B ", myArr2);


const myn2 = myArr2.splice(1,3); // Splice mainipulate original array
console.log(myn2);
console.log("C ", myArr2);


