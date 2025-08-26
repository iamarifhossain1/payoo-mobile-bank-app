const validPin = 1234;
// Add Money
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

// Cash Out

document.getElementById('cash-out-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const cashOutNumber = parseInt(document.getElementById('agent-number').value);
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    const balance = parseInt(document.getElementById('balance').innerText);

    if (cashOutNumber.length < 11) {
        alert('Please provide a valid bank account number');
        return;
    }

    if (cashOut < 100) {
        alert ('Minimum Cash Out 100 Taka');
        return;
    }

    if (pinNumber !== validPin) {
        alert ('Please provide a valid pin number')
        return;
    }

    const currenBalance = balance - cashOutAmount ;
    const newBalance = document.getElementById('balance').innerText = currenBalance;

    
})


// Toggle Feature

const addMoney = document.getElementById('add-money-card')
.addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'block';
})

const cashOut = document.getElementById('cash-out-card')
.addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})

const transferMoney = document.getElementById('transfer-money-card')
.addEventListener('click', function(){
    document.getElementById('')
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})



// Logout Button

const logoutBtn = document
.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href="./index.html";
})