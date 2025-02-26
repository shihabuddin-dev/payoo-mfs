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

                        const allTransaction = document.getElementById('all-transaction');
                        const div = document.createElement('div');
                        div.innerHTML = ` 
                    <div class="flex justify-between items-center bg-white px-4 py-2 rounded-md hover:bg-[#F7A93B]">
                        <div class="flex gap-4 justify-center items-center ">
                            <div class="bg-slate-100 rounded-full p-3 ">
                                <img class="mx-auto" src="assets/icons/add-money.svg" alt="">
                            </div>
                            <div class="grid -gap-1">
                                <div class="items-center flex justify-between gap-2">
                                    <p class="font-semibold text-[#080808B3]">Deposit From ${selectBank}</p>
                                    <p class="text-lg font-semibold text-[#0874F2]">+ $${convertedAddAmount}</p>
                                </div>
                                <div class="items-center flex gap-6">
                                    <small class="text-sm text-[#080808B3]">Trx ID: CBM${randomTrxID} </small>
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