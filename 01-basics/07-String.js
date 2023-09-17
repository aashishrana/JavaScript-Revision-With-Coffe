const name = "Aashish";
const repoCount = 50;

// console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // string politon

const gameName = new String("Hello");
console.log(gameName[0]);
console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("l"));

console.log(gameName.substring(0 , 4)); // 0 se only 4 element 
// -ve index also included
 // confusion in substring and slice method
console.log(gameName.slice(-2 , 4));
//in slice negative index start from 1 in the end

const url = "https://hitesh%.com"
console.log(url.replace("%" , "-"));
console.log(url.includes("https"));