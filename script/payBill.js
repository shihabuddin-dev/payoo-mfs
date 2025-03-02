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
        if (payAccount.length === 11 && payAccount.startsWith("01") && !payAccount.includes(" ")) {
            if (convertedBillAmount <= mainBalance && convertedBillAmount > 0) {
                if (convertedPin === 1234) {
                    const currentBalance = convertedMainBalance - convertedBillAmount;
                    document.getElementById('main-balance').innerText = currentBalance;
                    alert(`Successfully You have Paid bill $ ${convertedBillAmount}`);

                    const allTransaction = document.getElementById('all-transaction');
                    const div = document.createElement('div');
                    div.innerHTML = `
                            <div class="flex justify-between items-center bg-white px-6 py-2 rounded-md hover:bg-[#F7A93f]">
                        <div class="flex gap-4 justify-center items-center ">
                            <div class="bg-slate-100 rounded-full p-3 ">
                                <img class="mx-auto" src="assets/icons/pay-bill.svg" alt="">
                            </div>
                            <div class="grid -gap-1">
                                <div class="items-center flex justify-between gap-2">
                                    <p class="font-semibold text-[#080808B3]">Paid ${selectPay} Bill</p>
                                    <p class="text-lg font-semibold text-red-500">- $${convertedBillAmount}</p>
                                </div>
                                <div class="items-center flex gap-6">
                                    <small class="text-sm  text-[#080808B3]]">Trx ID: CBM${randomTrxID} </small>
                                    <small class="text-xs text-[#080808B3]">${getDateTimeNow()}</small>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src="assets/icons/details.svg" alt="">
                        </div>
                    </div>
                    `;
                    allTransaction.prepend(div);

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