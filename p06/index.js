const clockContainer = document.querySelector(".js-clock"),         // 클래스명이니  . 체크 주의
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerText = `${hour}:${minute}:${second}`;
}


function init(){
    getTime();
}
init();