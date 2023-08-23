function MySome(MyArray, TestCallfn) {
    let result = false;
    for (let i = 0; i < MyArray.length; i++) {
        if (TestCallfn(MyArray[i])) {
            result = true;
            break;
        }
    }
    return result;
}

function testUppercase(elem) {
    return (elem === elem.toUpperCase());
}
function testLowercase(elem) {
    return (elem === elem.testLowercase());
}

const letters = [a, b, C, D, e, F];
MySome(letters, testUppercase);
MySome(letters, testLowercase);