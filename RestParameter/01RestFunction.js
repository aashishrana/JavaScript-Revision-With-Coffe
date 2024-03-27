function sum(...number) {
    let result =  0;
    for(let num of number) {
        result = result + num;
    }

    return result;
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,5));