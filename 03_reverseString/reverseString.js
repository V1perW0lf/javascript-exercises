const reverseString = function(string) {
    let stringArray = string.split("");
    let reverseArray = stringArray.reverse();
    return reverseArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
