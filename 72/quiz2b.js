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