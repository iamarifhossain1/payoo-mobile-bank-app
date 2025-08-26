const validPin = 1234

document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const selectBank = document.getElementById('select-bank').value;
    const bankAccount = document.getElementById('bank-account').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const balance = parseInt(document.getElementById('balance').innerText);

    if(bankAccount.length < 11) {
        alert('Please provide a valid bank account number');
        return;
    }

    if(addAmount < 100) {
        alert('Minimum Transaction 100 Taka')
        return;
    }

    if(pinNumber !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }
    
    const addAmountBalance = addAmount + balance;
    const newBalance = document.getElementById('balance').innerText = addAmountBalance;
})


// Logout Button

const logoutBtn = document
.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href="./index.html";
})