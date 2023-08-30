const interestCalculator = function () {
    let rate = 0;
    let years = 0;

    function setYears(numberOfyears) {
        years = numberOfyears;
    }
    function setRate(theRate) {
        rate = theRate;
    }

    function calculateInterest(amount) {
        return (amount * rate) * years;
    }
    return {
        setYears,
        setRate,
        calculateInterest
    };


}();

interestCalculator.setYears(7);
interestCalculator.setRate(.5);
console.log(interestCalculator.calculateInterest(17000));

function CreateBankAccount() {
    return {
        balance: 0,
        performTrans: function (amount) {
            return this.balance + amount;
        }
    }

};
const bank1 = CreateBankAccount();
console.log(bank1.performTrans(500));

function createBankAccount2() {
    return {
        balance: 0
    }
}
function Transaction(amt) {
    return amt + this.balance;
}

const bank2 = createBankAccount2();
console.log(Transaction.call(bank2, 500));

const deposit25dollars = Transaction.bind(bank2, 25);
deposit25dollars();