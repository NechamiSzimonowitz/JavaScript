window.app = (function () {
    let theCount = 0;
    function increment() {
        return theCount++;
    }
    function getCount() {
        return theCount;
    }
    return {
        increment,
        getCount
    }

}(window.app || {}));

app.increment();
app.increment();
app.increment();
console.log(app.getCount());