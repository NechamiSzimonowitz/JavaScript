function MyEvery(Array, TestCallbackfn) {
  let result = true;
  for (let i = 0; i < Array.length; i++) {
    if (!TestCallbackfn(Array[i])) {
      result = false;
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

const letters = [A, H, K, K, N, J]
MyEvery(letters, testUppercase);
MyEvery(letters, testLowercase);