function onlyIf(Array, testcallbackFun, ActionCallBack) {
    Array.foreach(elem => {
        if (testcallbackFun(elem)) {
            ActionCallBack(elem);
        }
    })
};

function ActionPrint(elem) {
    console.log(elem);
}

function testIfeven(number) {
    return number % 2 === 0;
}

const numberArray = [33, 1, 5, 66, 100];
onlyIf(numberArray, testIfeven, ActionPrint);

const evenArray = numberArray.filter(testIfeven);
evenArray.foreach(ActionPrint);


