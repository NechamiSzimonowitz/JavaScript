'use strict';
function switchToFar(a) {
    let Farenheit = (a / 5 * 9) + 32;
    alert(Farenheit);
}
function switchToCel(a) {
    let Celcius = ((a - 32) * 5) / 9;
    alert(Celcius);
}
let userInput = prompt("which number would you like to switch?");
console.log(switchToFar(userInput));
console.log(switchToCel(userInput));
