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
    const cashOutNumber = document.getElementById('agent-number').value;
    const cashOutAmount = parseInt(document.getElementById('cash-out-amount').value);
    const cashOutPinNumber = parseInt(document.getElementById('cashout-pin-number').value);
    const balance = parseInt(document.getElementById('balance').innerText);

    if (cashOutNumber.length !==  11) {
        alert('Please provide a valid bank account number');
        return;
    }

    else if (cashOutAmount < 100) {
        alert ('Minimum Cash Out 100 Taka');
        return;
    }

    else if (cashOutAmount >= 25000) {
        alert ('Cashout limit 25000 taka per day')
    }

    else if (cashOutPinNumber !== validPin) {
        alert ('Please provide a valid pin number');
        return;
    }


    else if (cashOutAmount > balance) {
        alert ('Insufficient fund')
        return;
    }

    const currenBalance = balance - cashOutAmount ;
    const newBalance = document.getElementById('balance').innerText = currenBalance;
 
})

// Transfer Money

const transferMoney = document.getElementById('transfer-money-btn')
.addEventListener('click', function(event) {
    event.preventDefault();
    const userAccountNumber = document.getElementById('user-account-number').value;
    const transferAmount = parseInt(document.getElementById('transfer-amount').value);
    const pinNumber = parseInt(document.getElementById('transfer-pin-number').value);
    const currentBalance = parseInt(document.getElementById('balance').innerText);

    if (userAccountNumber.length !== 11) {
        alert ('Please provide a valid account number');
        return;
    }

    else if (transferAmount < 100) {
        alert ('Minimum transfer money 100 taka');
        return;
    }

    else if(transferAmount > currentBalance) {
        alert ('Insufficient fund');
        return;
    }

    else if (transferAmount >= 25000) {
        alert ('Transfer money limit 25000 per day');
        return;
    }

    else if (pinNumber !== validPin) {
        alert ('Please provide a valid pin number');
        return;
    }

    const transferBalance = currentBalance - transferAmount;
    const newBalance = document.getElementById('balance').innerText = transferBalance;
    
})


// Toggle Feature

const addMoney = document.getElementById('add-money-card')
.addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
    document.getElementById('transfer-money-parent').style.display = 'none';
})

const cashOut = document.getElementById('cash-out-card')
.addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'block';
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('transfer-money-parent').style.display = 'none';
})

const transfer = document.getElementById('transfer-money-card')
.addEventListener('click', function() {
    document.getElementById('transfer-money-parent').style.display = 'block';
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'none';


})




// Logout Button

const logoutBtn = document
.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href="./index.html";
})