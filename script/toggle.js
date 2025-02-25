document.getElementById('transferMoney').style.display = 'block';
document.getElementById('addMoney').style.display = 'none';
document.getElementById('cashOut').style.display = 'none';
// add money section 
document.getElementById('add-money-option')
    .addEventListener('click', function () {
        document.getElementById('addMoney').style.display = 'block';
        document.getElementById('cashOut').style.display = 'none';
        document.getElementById('transferMoney').style.display = 'none';
    });
// CashOut section 
document.getElementById('cash-out-option')
    .addEventListener('click', function () {
        document.getElementById('cashOut').style.display = 'block';
        document.getElementById('addMoney').style.display = 'none';
        document.getElementById('transferMoney').style.display = 'none';
    });
// transfer Money section
document.getElementById('transfer-money-option').addEventListener('click', function (event) {
    document.getElementById('transferMoney').style.display = 'block';
    document.getElementById('addMoney').style.display = 'none';
    document.getElementById('cashOut').style.display = 'none';
});
// get-bonus-option
// pay-bill-option
// tr-history-option 