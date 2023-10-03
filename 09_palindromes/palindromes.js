const palindromes = function (string) {
    let stringToCheck = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"").toLowerCase();
    let stringArray = stringToCheck.split("");
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    if(reversedString == stringToCheck) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
