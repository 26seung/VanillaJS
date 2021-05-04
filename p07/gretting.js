const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function pantingGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {

    }else {
        pantingGreeting(currentUser);
    }
}


function init() {
    loadname();
}
init();




/*
    querySelector 는 첫번째로 찾은 값을 가져옴
    querySelectorAll  은 전부 가져옴        쿨래스 명에 따른 엘리먼트들을 가져오는데 array 를 줌
    getElementById  태그로 엘리먼트를 가져옴 ex) input,body,html,div,section...

    local storage   --  local storage.setItem("a",true) 시 값이 저장되며 새로고침(F5) 하여도 사라지지 않고 저장됨
                        localStorage.getItem("euseung") 시 true 라는 value 값을 가져올 수 있음


    loadname 함수 통해서 localStorage를 읽어 옴

*/ 