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

                    const allTransaction = document.getElementById('all-transaction');
                    const div = document.createElement('div');
                    div.innerHTML = ` 
                    <div class="flex justify-between items-center bg-white px-6 py-2 rounded-md hover:bg-[#0DB89A]">
                        <div class="flex gap-6 justify-center items-center ">
                            <div class="bg-slate-100 rounded-full p-3 ">
                                <img class="mx-auto" src="assets/icons/cash-out.svg" alt="">
                            </div>
                            <div class="grid gap-0">
                                <div class="items-center flex justify-between gap-2">
                                    <p class="font-semibold text-[#080808B3]">CashOut from Agent</p>
                                    <p class="text-lg font-semibold text-red-500">- $${convertedCashOutAmount}</p>
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
                alert('Please Provide Valid Amount')
            }
        }
        else {
            alert('Please Provide Valid Agent Number')
        }
    })