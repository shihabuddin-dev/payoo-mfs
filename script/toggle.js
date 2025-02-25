// Whole section 
document.getElementById('transactionHistory').style.display = 'block';
document.getElementById('transferMoney').style.display = 'none';
document.getElementById('addMoney').style.display = 'none';
document.getElementById('cashOut').style.display = 'none';
document.getElementById('getBonus').style.display = 'none';
document.getElementById('payBill').style.display = 'none';
// add money section 
document.getElementById('add-money-option')
    .addEventListener('click', function () {
        document.getElementById('addMoney').style.display = 'block';
        document.getElementById('cashOut').style.display = 'none';
        document.getElementById('transferMoney').style.display = 'none';
        document.getElementById('getBonus').style.display = 'none';
        document.getElementById('payBill').style.display = 'none';
        document.getElementById('transactionHistory').style.display = 'none';
    });
// CashOut section 
document.getElementById('cash-out-option')
    .addEventListener('click', function () {
        document.getElementById('cashOut').style.display = 'block';
        document.getElementById('addMoney').style.display = 'none';
        document.getElementById('transferMoney').style.display = 'none';
        document.getElementById('getBonus').style.display = 'none';
        document.getElementById('payBill').style.display = 'none';
        document.getElementById('transactionHistory').style.display = 'none';
    });
// transfer Money section
document.getElementById('transfer-money-option').addEventListener('click', function () {
    document.getElementById('transferMoney').style.display = 'block';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('getBonus').style.display = 'none';
    document.getElementById('payBill').style.display = 'none';
    document.getElementById('transactionHistory').style.display = 'none';
});
// Get Bonus section
document.getElementById('get-bonus-option').addEventListener('click', function () {
    document.getElementById('getBonus').style.display = 'block';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('transferMoney').style.display = 'none';
    document.getElementById('payBill').style.display = 'none';
    document.getElementById('transactionHistory').style.display = 'none';

})
//  Pay Bill section
document.getElementById('pay-bill-option').addEventListener('click', function () {
    document.getElementById('payBill').style.display = 'block';
    document.getElementById('getBonus').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('transferMoney').style.display = 'none';
    document.getElementById('transactionHistory').style.display = 'none';
})

// tr-history-option 
document.getElementById('tr-history-option').addEventListener('click', function () {
    document.getElementById('transactionHistory').style.display = 'block';
    document.getElementById('payBill').style.display = 'none';
    document.getElementById('getBonus').style.display = 'none';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('cashOut').style.display = 'none';
    document.getElementById('transferMoney').style.display = 'none';
})