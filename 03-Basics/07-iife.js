// Imediatly invoke function Expression

// (function defination)(function execution)

(function chai() {
    // named iife
    console.log(`DB Connected`);
})();  //Explicitly end the code by using semicolumn

(() => {
    console.log(`Db Connected 2`);
})();

((name) => {
    console.log(`Db Connected 2 ${name}`);
})("Hitesh")