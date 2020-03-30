const id = document.querySelector('.id');
const password = document.querySelector('.pw');
const loginBtn = document.getElementById('login-btn');


id.addEventListener('keyup', function(e) {
    if (id.value.length > 0 && password.value.length > 0) {
        loginBtn.style.backgroundColor = "#0095F6";
    } else {
        loginBtn.style.backgroundColor = "#C5E1FA";
    }
});

password.addEventListener('keyup', function(e) {
    if (id.value.length > 0 && password.value.length > 0) {
        loginBtn.style.backgroundColor = "#0095F6";
    } else {
        loginBtn.style.backgroundColor = "#C5E1FA";
    }
});
