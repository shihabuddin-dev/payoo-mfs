// payBill 
// select-pay billPay-account-number payBill-amount payBill-pin-number 
document.getElementById('btn-pay-bill').addEventListener('click', function (event) {
    const selectPay = document.getElementById('select-pay').value;
    const payAccount = document.getElementById('billPay-account-number').value;
    const billAmount = document.getElementById('payBill-amount').value;
    const convertedBillAmount = parseFloat(billAmount);
    const payBillPin = document.getElementById('payBill-pin-number').value;
    const convertedPin = parseInt(payBillPin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    document.getElementById('payBill-amount').value = '';
    if (selectPay === 'Electricity' || selectPay === 'Gas-Karnafuli' || selectPay === 'Link3' || selectPay === 'Nesco' || selectPay === 'Palli-Bidyut') {
        if (payAccount.length === 11) {
            if (convertedBillAmount <= mainBalance && convertedBillAmount > 0) {
                if (convertedPin === 1234) {
                    const currentBalance = convertedMainBalance - convertedBillAmount;
                    document.getElementById('main-balance').innerText = currentBalance;
                    alert(`Successfully You have Paid bill $ ${convertedBillAmount}`)
                }
                else {
                    alert('Pin Number did not Matched')
                }
            }
            else {
                alert('Please Provide a Valid Bill Amount');
            }
        }
        else {
            alert('Please Provide a Valid Bill Account');
        }
    }
    else {
        alert('Please Select Your Bill Type');
    }


});