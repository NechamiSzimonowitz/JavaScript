// SL - this again blows away whatever app might have been, and replaces it with the counterCreator function returned by this IIFE..
window.app = function () {
    let counterscreated = 0;
    counterCreator = function () {
        let newCounter = 0;
        counterscreated++;
        return {
            increment: function () {
                return newCounter++;
            },
            getCount: function () {
                return newCounter;
            },
            getcounterscreated: function () {
                return counterscreated;
            }
        };
    }
    return counterCreator;

}(window.app || {});

// SL  - this is supposed to be 1 counter done 5 times, and 1 15 times, in separate file...
let acounter = counterCreator();
acounter.increment();
acounter.increment();
console.log(acounter.getCount());
let bcounter = counterCreator();
bcounter.increment();
bcounter.increment();
bcounter.increment();
bcounter.increment();
console.log(bcounter.getCount());
console.log(bcounter.getcounterscreated());
