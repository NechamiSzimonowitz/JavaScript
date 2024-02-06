const express = require('express');
const app = express();

const parseNum = (req, res, next) => {
    const { num1, num2 } = req.params;

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).send('invalid number');
    }
    else {
        req.num1 = parseFloat(num1);
        req.num2 = parseFloat(num2);
        next();
    }
}

const checkIfOperator = (req, res, next) => {
    const { operator } = req.params;

    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        res.status(404).send('invalid operator');
    } else {
        req.operator = operator;
        next();
    }
}


app.get('/add/:num1/:num2', (req, res) => {
    const result = req.params.num1 + req.params.num2;
    res.end(`addition completed. result: ${result}`);
})

app.get('/subtract/:num1/:num2', (req, res) => {
    const result = req.params.num1 - req.params.num2;
    res.end(`subtraction completed. result: ${result}`);
})

app.get('/calculate/:num1/:operator/:num2', parseNum, checkIfOperator, (req, res) => {
    let result;
    switch (req.operator) {
        case '+':
            result = req.num1 + req.num2;
            break;
        case '-':
            result = req.num1 - req.num2;
            break;
        case '*':
            result = req.num1 * req.num2;
            break;
        case '/':
            result = req.num1 / req.num2;
            break;

    }
    res.send(`calculation result: ${result}`);
})

app.listen(8080);