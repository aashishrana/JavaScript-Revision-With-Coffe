const marvel_heros = ["thor" , "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// console.log(marvel_heros);
const allHeroes = marvel_heros.concat(dc_heros); // if you store in a varible then print combine array else print only marvel heores only one value can concatenate
// console.log(allHeroes); // now work ccompletly perfect

const all_new_heros = [...marvel_heros , ...dc_heros]  // spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 5], 7, [6,7], 4 ,5];

const real_another_array = another_array.flat(2)
// console.log(real_another_array);


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"}));   // intresting
// console.log(Array.of("Rajput"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));