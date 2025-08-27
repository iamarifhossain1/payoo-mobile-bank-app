const validPin = 1234;

// Function to get values

function getParseValue(id) {
    const getElement = document.getElementById(id);
    const getValue = getElement.value;
    const wrapParse = parseInt(getValue);
    return wrapParse;
}

function getValue(id) {
    const getElement = document.getElementById(id);
    const getValue = getElement.value;
    return getValue;
}

// Function to get innerText

function getInnerText(id) {
    const getElement = document.getElementById(id);
    const getValue = getElement.innerText;
    const wrapParse = parseInt(getValue);
    return wrapParse;
}

// Function to set innerText

function setInnerText(id) {
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// Toggole Function

function toggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('id').style.display = 'block';
}

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

// Get Bonus

const getBonus = document.getElementById('get-bonus-btn')
.addEventListener('click', function(event) {
    event.preventDefault();
    const couponNumber = 1628242667;
    const couponMoney = 1000;
    const bounsCoupon = parseInt(document.getElementById('bonus-coupon').value);
    const currentBalance = parseInt(document.getElementById('balance').innerText);

    if(bounsCoupon !== couponNumber) {
        alert ('Please provide a valid coupon number');
        return;
    }

    const afterCouponBalance = couponMoney + currentBalance;
    const couponNewBalance = document.getElementById('balance').innerText = afterCouponBalance;
    
})

// Pay Bill

const payBill = document.getElementById('pay-bill-btn')
.addEventListener('click', function(event) {
    event.preventDefault();
    const payBank = document.getElementById('pay-bill-bank').value;
    const billerAccountNumber = document.getElementById('biller-account-number').value;
    const payAmount = parseInt(document.getElementById('pay-amount').value);
    const pinNumber = parseInt(document.getElementById('pay-bill-pin-number').value);
    const currentBalance = document.getElementById('balance').innerText;

    if(billerAccountNumber.length !== 11) {
        alert('Please provide a valid account number');
        return;
    }

    else if (payAmount < 100) {
        alert('Minimum pay bill limit 100 taka');
        return;
    }

    else if (pinNumber !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }
 
    const afterPay = currentBalance - payAmount;
    const newBalance = document.getElementById('balance').innerText = afterPay;
    
})

// Toggle Feature

const addMoney = document.getElementById('add-money-card')
.addEventListener('click', function(){
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById('add-money-parent').style.display = 'block';

    // Card BG & Border

    const cardBtn = document.getElementsByClassName('card-btns');
    for (const btn of cardBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f27a]");
    }

    document.getElementById('add-money-card').classList.remove("border-gray-300");
    document.getElementById('add-money-card').classList.add("border-[#0874f2]","bg-[#0874f27a]");
    
})

const cashOut = document.getElementById('cash-out-card')
.addEventListener('click', function(){
   const forms = document.getElementsByClassName('form');
   for (const form of forms) {
    form.style.display = 'none'
   }

   document.getElementById('cash-out-parent').style.display = 'block';

    // Card BG & Border

   const cardBtn = document.getElementsByClassName('card-btns');
   for (const btn of cardBtn) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f27a]",);
   }

   document.getElementById('cash-out-card').classList.remove("border-gray-300");
    document.getElementById('cash-out-card').classList.add("border-[#0874f2]","bg-[#0874f27a]");
})

const transfer = document.getElementById('transfer-money-card')
.addEventListener('click', function() {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById('transfer-money-parent').style.display = 'block';

    // Card BG & Border

    const cardBtn = document.getElementsByClassName('card-btns');
    for (const btn of cardBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f27a]");
    }

    document.getElementById('transfer-money-card').classList.remove("border-gray-300");
    document.getElementById('transfer-money-card').classList.add("border-[#0874f2]","bg-[#0874f27a]");

})

const bonus = document.getElementById('get-bonus-card')
.addEventListener('click', function() {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none'
    }

    document.getElementById('get-bonus-parent').style.display = 'block';

    // Card BG & Border

    const cardBtn = document.getElementsByClassName('card-btns');
    for (const btn of cardBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f27a]");
    }

    document.getElementById('get-bonus-card').classList.remove("border-gray-300");
    document.getElementById('get-bonus-card').classList.add("border-[#0874f2]","bg-[#0874f27a]");
})

const bill = document.getElementById('pay-bill-card')
.addEventListener('click', function() {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }

    document.getElementById('pay-bill-parent').style.display = 'block';

    // Card BG & Border

    const cardBtn = document.getElementsByClassName('card-btns');
    for (const btn of cardBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f27a]");
    }

    document.getElementById('pay-bill-card').classList.remove("border-gray-300");
    document.getElementById('pay-bill-card').classList.add("border-[#0874f2]","bg-[#0874f27a]");
})

// Logout Button

const logoutBtn = document
.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href="./index.html";
})