// user-account-number transfer-amount transfer-pin-number 
document.getElementById('btn-transfer')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const userAccount = document.getElementById('user-account-number').value;
        const transferAmount = document.getElementById('transfer-amount').value;
        const convertedTrAmount = parseFloat(transferAmount);
        const transferPin = document.getElementById('transfer-pin-number').value;
        const convertedTrPin = parseInt(transferPin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        document.getElementById('transfer-amount').value = '';
        if (userAccount.length === 11 && userAccount.startsWith("01") && !userAccount.includes(" ")) {
            if (convertedTrAmount <= convertedMainBalance && convertedTrAmount > 0) {
                if (convertedTrPin === 1234) {
                    const currentBalance = convertedMainBalance - convertedTrAmount;
                    document.getElementById('main-balance').innerText = currentBalance;
                    alert(`Successfully You Transfer $ ${convertedTrAmount}`);
                    const allTransaction = document.getElementById('all-transaction');
                    const div = document.createElement('div');
                    div.innerHTML = `
                     <div class="flex justify-between items-center bg-white px-6 py-2 rounded-md hover:bg-[#0DB89A]">
                        <div class="flex gap-6 justify-center items-center ">
                            <div class="bg-slate-100 rounded-full p-3 ">
                                <img src="assets/icons/transfer-money.svg" alt="">
                            </div>
                            <div class="grid gap-0">
                                <div class="items-center flex justify-between gap-2">
                                    <p class="font-semibold text-[#080808B3]">Transfer to ${userAccount}</p>
                                    <p class="text-lg font-semibold text-red-500">- $${convertedTrAmount}</p>
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
                    allTransaction.prepend(div);

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
            alert('Invalid Account Number, Must StartsWith 01')
        }

    })
