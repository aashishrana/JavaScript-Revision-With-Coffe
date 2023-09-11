function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two()
}

one()


//////////////************* */

console.log(addOne(5));  // you can access above
function addOne(num) {
    return num + 1;
}


addTwo(10)  // can not access above
const addTwo = function add(num) {  // function expression
    return num + 2
}

