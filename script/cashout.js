document.getElementById('btn-cash-out')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const agentNumber = document.getElementById('agent-number').value;
        const cashOutAmount = document.getElementById('cashOut-amount').value;
        const convertedCashOutAmount = parseFloat(cashOutAmount);
        const cashOutPin = document.getElementById('cashOut-pin-number').value;
        const convertedCashOutPin = parseInt(cashOutPin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        document.getElementById('cashOut-amount').value = '';
        if (agentNumber.length === 11) {
            if (convertedMainBalance >= convertedCashOutAmount && convertedCashOutAmount > 0) {
                if (convertedCashOutPin === 1234) {
                    const currentBalance = convertedMainBalance - convertedCashOutAmount;
                    document.getElementById('main-balance').innerText = currentBalance;
                    alert(`Successfully You Cash Out $ ${convertedCashOutAmount}`)

                }
                else {
                    alert('Pin Number did not Matched')
                }
            }
            else {
                alert('Please Provide Valid Amount')
            }
        }
        else {
            alert('Please Provide Valid Agent Number')
        }
    })