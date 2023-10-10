// SL - whats this supposed to be? "This" is the current object, how can you add numbers to it?
window.app = function () {
    return {
        increment10: function () {
            return this + 10;
        },
        increment5: function () {
            return this + 5;
        },
        increment15: function () {
            return this + 15;
        }
    }

}(window.app || {});

// SL - this doesnt work as app was blown away above and no longer has counterCreator in it. In any case trying to use the functions defined above on what would be returned by counterCreator doesnt make sense...
let cCounter = window.app.counterCreator();
cCounter.increment5();
let dCounter = window.app.counterCreator();
dCounter.increment15();
console.log(window.app.theCount.increment10());

// SL - grade - 80
