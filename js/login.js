const id = document.querySelector('.id');
const password = document.querySelector('.pw');
const loginBtn = document.getElementById('login-btn');

function changeColor(e) {
    id.value.length > 0 && password.value.length > 0 ? 
            loginBtn.style.backgroundColor = "#0095F6" : 
            loginBtn.style.backgroundColor = "#C5E1FA";
}

function init() {
    id.addEventListener('keyup', changeColor)
    password.addEventListener('keyup', changeColor);
}
init();