// Whole section 
handleToggle('transactionHistory', 'block');
handleToggle('addMoney', 'none');
handleToggle('cashOut', 'none');
handleToggle('transferMoney', 'none');
handleToggle('getBonus', 'none');
handleToggle('payBill', 'none');

// add money section 
document.getElementById('add-money-option')
    .addEventListener('click', function () {
        handleToggle('addMoney', 'block');
        handleToggle('cashOut', 'none');
        handleToggle('transferMoney', 'none');
        handleToggle('getBonus', 'none');
        handleToggle('payBill', 'none');
        handleToggle('transactionHistory', 'none');

    });
// CashOut section 
document.getElementById('cash-out-option').addEventListener('click', function () {
    handleToggle('cashOut', 'block');
    handleToggle('payBill', 'none');
    handleToggle('addMoney', 'none');
    handleToggle('transferMoney', 'none');
    handleToggle('getBonus', 'none');
    handleToggle('transactionHistory', 'none');
});
// transfer Money section
document.getElementById('transfer-money-option').addEventListener('click', function () {
    handleToggle('transferMoney', 'block');
    handleToggle('payBill', 'none');
    handleToggle('addMoney', 'none');
    handleToggle('cashOut', 'none');
    handleToggle('getBonus', 'none');
    handleToggle('transactionHistory', 'none');
});
// Get Bonus section
document.getElementById('get-bonus-option').addEventListener('click', function () {
    handleToggle('getBonus', 'block');
    handleToggle('payBill', 'none');
    handleToggle('addMoney', 'none');
    handleToggle('cashOut', 'none');
    handleToggle('transferMoney', 'none');
    handleToggle('transactionHistory', 'none');

})
//  Pay Bill section
document.getElementById('pay-bill-option').addEventListener('click', function () {
    handleToggle('payBill', 'block');
    handleToggle('addMoney', 'none');
    handleToggle('cashOut', 'none');
    handleToggle('transferMoney', 'none');
    handleToggle('getBonus', 'none');
    handleToggle('transactionHistory', 'none');
})

// tr-history-option 
document.getElementById('tr-history-option').addEventListener('click', function () {
    handleToggle('transactionHistory', 'block');
    handleToggle('addMoney', 'none');
    handleToggle('cashOut', 'none');
    handleToggle('transferMoney', 'none');
    handleToggle('getBonus', 'none');
    handleToggle('payBill', 'none');
})