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

                const allTransaction = document.getElementById('all-transaction');
                const div = document.createElement('div');
                div.innerHTML = `
                        <div class="flex justify-between items-center bg-white px-6 py-2 rounded-md hover:bg-[#0DB89A]">
                        <div class="flex gap-6 justify-center items-center ">
                            <div class="bg-slate-100 rounded-full p-3 ">
                                <img class="mx-auto" src="assets/icons/get-bonus.svg" alt="">
                            </div>
                            <div class="grid gap-0">
                                <div class="items-center flex justify-between gap-2">
                                    <p class="font-semibold text-[#080808B3]">Got Bonus By Coupon</p>
                                    <p class="text-lg font-semibold text-[#0874F2]">+ $500</p>
                                </div>
                                <div class="items-center flex gap-6">
                                    <small class="text-sm text-[#080808B3]">Trx ID: DBM${randomTrxID} </small>
                                    <small class="text-xs text-[#080808B3]">${getDateTimeNow()}</small>
                                </div>
                            </div>  
                        </div>
                        <div>
                            <img src="assets/icons/details.svg" alt="">
                        </div>
                    </div>
                `;
                allTransaction.appendChild(div);
                document.getElementById('coupon-code').value = '';
            }
            else {
                alert('Pin Number did not Matched')
            }
        }
        else {
            alert('You Will not able to use it Multiple Times, This Coupon Code is One Time Useable.')
        }
    })