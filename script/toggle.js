document.getElementById('addMoney').style.display= 'none';
document.getElementById('add-money-option')
.addEventListener('click', function(){
    document.getElementById('addMoney').style.display= 'block';
    document.getElementById('cashOut').style.display= 'none';
});
document.getElementById('cash-out-option')
.addEventListener('click', function(){
    document.getElementById('addMoney').style.display= 'none';
    document.getElementById('cashOut').style.display= 'block';
});
// cash-out-option 