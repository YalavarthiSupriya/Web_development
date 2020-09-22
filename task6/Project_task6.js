// kelvin variable cant be changed
const kelvin=293;

// // subtract 293 from kelvin to get celsius
var celsius=kelvin-273;

// // #converting celsis to farenheit
var farenheit=(celsius*1.8)+32;
// // it will be rounded off to decimal
farenheit=Math.floor(farenheit);
console.log("The temperature is"+farenheit+"degrees Fahrenheit.");
document.write(farenheit);
