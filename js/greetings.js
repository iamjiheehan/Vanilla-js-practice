const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 String만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용하는 all UPPERCASE 변수명
const USERNAME_KEY = "username";
// username이라는 변수를 한번만 사용하기위해서  다른 변수로 할당함, 오타나면 데이터꼬이니까 그거방지
//원리는!! 변수명이 오타나면 자스가 오타지적을 해주는데 본인이 생성한 string을 반복해서 사용하면 지적안해줌 ㅋ


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerHTML = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername);
    
}

