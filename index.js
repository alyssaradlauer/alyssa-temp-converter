//function has to take a temperature in fahrenheit and return the temperature in celcius
//conversion from fahrenheit to celcius: F = (1.8 * Celcius) + 32

/**
 *
 * @param {number} fahrenheit - temperature in fahrenheit
 * @returns {number} the given temperature in `fahrenheit` convered to celcius
 */

function convertToCelcius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

//console.log(convertToCelcius(250));

function describeTemperature(fahrenheit) {
  const temp = convertToCelcius(fahrenheit);
  if (temp < 0) {
    return `The temperature is ${temp}, which is very cold.`;
  } else if (temp < 20) {
    return `The temperature is ${temp}, which is cold.`;
  } else if (temp < 30) {
    return `The temperature is ${temp}', which is warm.`;
  } else if (temp < 40) {
    return `The temperature is ${temp}, which is hot.`;
  } else if (temp >= 40) {
    return `The temperature is ${temp}, which is very hot.`;
  }
}

console.log(describeTemperature(20));

const fahrTemp = prompt("Enter a temperature in Fahrenheit");
const celciusTemp = convertToCelcius(fahrTemp);
const description = describeTemperatureAgain(fahrTemp);

alert(
  "Your chosen temperature in degrees Fahrenheit is equivelent to " +
    celciusTemp +
    " in degrees Celcius." +
    " " +
    description
);

function describeTemperatureAgain(fahrenheit) {
  const temp = convertToCelcius(fahrenheit);
  if (temp < 0) {
    return `This temperature is very cold.`;
  } else if (temp < 20) {
    return `This temperature is cold.`;
  } else if (temp < 30) {
    return `This temperature is warm.`;
  } else if (temp < 40) {
    return `This temperature is hot.`;
  } else if (temp >= 40) {
    return `This temperature is very hot.`;
  }
}
