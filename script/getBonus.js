// getBonus bonus-pin-number
document.getElementById('btn-get-bonus')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const couponCode = document.getElementById('coupon-code').value;
        const bonusPin = document.getElementById('bonus-pin-number').value;
        const convertedBonusPin = parseInt(bonusPin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        if (couponCode === 'SHIHAB') {
            if (convertedBonusPin === 1234) {
                alert('Congratulation! You Got Bonus $ 500 From Shihab Uddin');
                const currentBalance = convertedMainBalance + 500;
                document.getElementById('main-balance').innerText = currentBalance;
            }
            else {
                alert('Pin Number did not Matched')
            }
        }
        else {
            alert('Please Enter a Valid Coupon Number')
        }
    })