const clockContainer = document.querySelector(".js-clock"),         // 클래스명이니  . 체크 주의
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerText = `${
        hour < 10 ? `0${hour}` : hour
    }:${
        minute < 10 ? `0${minute}` : minute
    }:${
        second < 10 ? `0${second}` : second
    }`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}
init();



/*      

        document 을 통해 클래스 값을 찾아내서 함수 적용
                    ( querySelector 와 getElementById 차이점에 대해 공부 )
        
        **  setInterval(a,b)  ** 함수를 이용하여 a 의 값에 대해 b초 간격으로 싱행시킴으로써 실시간으로 시간을 받아옴
                     b 에 1000 을 입력하여 1초 간격으로 실행시킴

        삼항연산자 를 이용하여 00초로 시간을 표시 할 수 있다. 10단위 전 0을 추가로 붙여 출력시킴


*/