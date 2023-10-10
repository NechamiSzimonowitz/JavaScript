// SL - this file sets window.app to be the object returned by this IIFE, ok - but then why bother passing in window.app || {} if your always going to blow away what might have been there are replace it with object returned by this IIFE?
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


// SL - this is upposed to be done 10 times in a separate file at end...
// Why cut and paste in stead of a loop?
app.increment();
app.increment();
app.increment();
console.log(app.getCount());
