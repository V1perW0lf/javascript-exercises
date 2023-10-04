const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        let yearOfDeath = findYearOfDeath(currentPerson);
        let currentAge = yearOfDeath - currentPerson.yearOfBirth;
        let oldestYearOfDeath = findYearOfDeath(oldest);
        let oldestAge = oldestYearOfDeath - oldest.yearOfBirth;
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

function findYearOfDeath(person) {
    return person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear();
}

// Do not edit below this line
module.exports = findTheOldest;
