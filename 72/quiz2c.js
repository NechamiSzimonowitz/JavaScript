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

let cCounter = window.app.counterCreator();
cCounter.increment5();
let dCounter = window.app.counterCreator();
dCounter.increment15();
console.log(window.app.theCount.increment10());
