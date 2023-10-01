const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }
    let result = 0;
    if(num2 < num1) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for(i = num1; i <= num2; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
