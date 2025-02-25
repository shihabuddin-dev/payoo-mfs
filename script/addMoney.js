// Logout button
document.getElementById('btn-logout')
    .addEventListener('click', function () {
        window.location.href = './index.html';
        alert('Successfully You have Log Out')
    });

// add money button 
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const selectBank = document.getElementById('select-bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = document.getElementById('add-amount').value;
        const convertedAddAmount = parseFloat(addAmount);
        const pinNumber = document.getElementById('pin-number').value;
        const convertedPinNumber = parseInt(pinNumber);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);


        if (selectBank === 'Bkash' || selectBank === 'Nagad' || selectBank === 'Rocket' || selectBank == 'MCash' || selectBank === 'Upay') {
            if (accountNumber.length === 11) {
                if (convertedAddAmount <= convertedMainBalance && convertedAddAmount > 0) {
                    if (convertedPinNumber === 1234) {
                        const currentBalance = convertedMainBalance + convertedAddAmount;
                        document.getElementById('main-balance').innerText = currentBalance;
                        alert(`You Have added $ ${convertedAddAmount}`);

                    }
                    else {
                        alert('Pin Number did not Matched')
                    }
                }
                else {
                    alert('Please Enter Valid Amount')
                }

            }
            else {
                alert('Please Provide Valid Account Number')
            }
        }
        else {
            alert('Please Select A Bank')
        }
        document.getElementById('add-amount').value = '';
    });   