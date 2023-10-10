'use strict';

// SL - capitaizing a param name is unusual...
function MyMap(originalArray, Thefunction) {
    let newArray = [];
    originalArray.forEach(element => {
        newArray.push(Thefunction(element));
    });

    // SL - should return the array. Let the caller decide what to do with it. This function as written is much less useful as it can only be used in the (unlikely) event that you just want to log it out
    console.log(originalArray);
    console.log(newArray);
}

function tripleIt(elem) {
    return elem * 3;
}

let numbers = [3, 6, 7, 4];

MyMap(numbers, tripleIt);

// SL - nice
