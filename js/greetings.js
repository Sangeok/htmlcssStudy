const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    // submit시 username이 결정됨
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

// 사용자 login시 해당 id와 Hello를 출력
function paintGreeting(username) {
    greeting.innerHTML = `Hello ${username} :)`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 username 저장
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약 localStorage에 저장된 id가 없을 시
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else {
    paintGreeting(savedUsername);
}