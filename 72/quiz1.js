'use strict';
function MyMap(originalArray, Thefunction) {
    let newArray = [];
    originalArray.forEach(element => {
        newArray.push(Thefunction(element));
    });
    console.log(originalArray);
    console.log(newArray);
}

function tripleIt(elem) {
    return elem * 3;
}

let numbers = [3, 6, 7, 4];

MyMap(numbers, tripleIt);