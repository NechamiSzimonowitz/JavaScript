
function adder(numbers: Numbers) {
    return numbers.num1 + numbers.num2;
}

interface Numbers {
    num1: number,
    num2: number
}

const numbersList: Numbers = {
    num1: 4,
    num2: 5
}

document.body.textContent = adder(numbersList).toString();