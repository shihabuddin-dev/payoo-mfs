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
        const amount = document.getElementById('amount').value;
        const convertedAmount = parseFloat(amount);
        const pinNumber = document.getElementById('pin-number').value;
        const convertedPin = parseInt(pinNumber);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        if (accountNumber.length === 11 && convertedPin === 1234 && convertedAmount > 0) {
            const totalBalance = convertedMainBalance + convertedAmount;
            document.getElementById("main-balance").innerText = totalBalance;
        }
        else {
            alert('Something Error');
        }
    });