// Logout button
document.getElementById('btn-logout')
    .addEventListener('click', function () {
        window.location.href = './index.html';
    });

// add money button 
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = document.getElementById('add-amount').value;
        const convertedAmount = parseFloat(addAmount);
        const pinNumber = document.getElementById('pin-number').value;
        const convertedPin = parseInt(pinNumber);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        if (convertedPin && convertedAmount) {
            if (accountNumber.length === 11 &&
                convertedPin === 1234) {
                const totalBalance = convertedMainBalance + convertedAmount;
                document.getElementById("main-balance").innerText = totalBalance;
            }
            else {
                alert('Invalid Pin Number')
            }
        }
        else {
            alert('Fill Up Amount');
        }

    });   