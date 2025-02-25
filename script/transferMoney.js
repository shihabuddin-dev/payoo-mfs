// user-account-number transfer-amount transfer-pin-number 
document.getElementById('btn-transfer')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const userAccount = document.getElementById('user-account-number').value;
        // const convertedAccount = parseInt(userAccount);
        const transferAmount = document.getElementById('transfer-amount').value;
        const convertedTrAmount = parseFloat(transferAmount);
        const transferPin = document.getElementById('transfer-pin-number').value;
        const convertedTrPin = parseInt(transferPin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        document.getElementById('transfer-amount').value = '';
        if (userAccount.length === 11) {
            if (convertedTrAmount <= convertedMainBalance && convertedTrAmount > 0) {
                if (convertedTrPin === 1234) {
                    const currentBalance = convertedMainBalance - convertedTrAmount;
                    document.getElementById('main-balance').innerText = currentBalance;
                    alert(`Successfully You Transfer $ ${convertedTrAmount}`);
                }
                else (
                    alert('Pin Number did not Matched')
                )
            }
            else {
                alert('Please Enter Valid Amount')
            }
        }
        else {
            alert('Invalid Account Number')
        }

    })