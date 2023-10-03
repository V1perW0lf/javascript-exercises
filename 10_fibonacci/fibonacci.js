const fibonacci = function(num) {
    let firstPrevious = 1;
    let secondPrevious = 0;
    let current = 0;
    for(let i = 1; i < +num; i++) {
        current = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = current;
    }
    return num > 0 ? firstPrevious : "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
