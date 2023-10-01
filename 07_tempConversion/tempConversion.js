const convertToCelsius = function(fTemp) {
  return Math.round(((5/9) * (fTemp - 32)) * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  return Math.round(((cTemp * (9/5) + 32)) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
