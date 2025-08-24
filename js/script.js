// Login Button
const loginBtn = document.getElementById('login-btn')
.addEventListener('click', function(event) {
    event.preventDefault();
    const mobileNumber = 1628242667;
    const pinNumber = 12345
    const mobileNumberValue = document.getElementById('mobile-number').value;
    const pinNumberValue = document.getElementById('pin-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);
    const pinNumberValueConverted = parseInt(pinNumberValue);
    if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
       window.location.href='./home.html';
    }

    else { 
        alert('Invalid Credentials');
    }
})