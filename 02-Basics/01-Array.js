const arr = [1,2,3,,4,5];
console.log(arr[3]);

const myArr2 = new Array(2,"hello", true, {name : "Ashish"})
// console.log(myArr2[3]);
// console.log(myArr2[3].name);
// myArr2.push(6);
// myArr2.pop();

const newArr = myArr2.join();
console.log(newArr);
console.log(typeof myArr2);
console.log(typeof newArr);


