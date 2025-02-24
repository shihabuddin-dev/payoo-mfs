document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const pinNumber = document.getElementById('cashOut-pin-number').value;
        const convertedPin = parseInt(pinNumber);
        const amount = document.getElementById('cashOut-amount').value;
        const convertedAmount = parseFloat(amount);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedBalance = parseFloat(mainBalance);
        if (convertedPin === 1234) {
            if (convertedBalance >= convertedAmount) {

                const totalMoney = convertedBalance - convertedAmount;
                document.getElementById('main-balance').innerText = totalMoney;
            }
            else {
                alert('invalid Balance')
            }
        }
        else {
            alert('Invalid Pin Number')
        }
    })