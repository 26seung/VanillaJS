const title = document.querySelector("#title");

/* 이벤트
function handleClick(){
    title.style.color = "red";
}


title.addEventListener("click", handleClick);
*/

//  handleClick 에 () 넣으면 즉시 실행 하라는 뜻이며 그냥 사용시 이벤트를 발생시켰을때 함수 사용이 된다. 


/*

true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;

*/


/*
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "white";

function handleClick1(){
    
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter", handleClick1);
}
init();
*/

// click, mouseenter, 같은 이벤트들 javascript dom event mdn 에서 검색 가능



const CLICKED_CLASS = "clicked";

function handleClick2(){
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // }else {
    //     title.classList.add(CLICKED_CLASS);
    // }

    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click", handleClick2);
}
init();


// className 과 달리 classList는 메서드를 가지고 있음
//  const hasClass = title.classList.contains("clicked"); 으로도 사용 가능함 "" 주의
// toggle 메서드를 사용하여 간단하게 사용 가능하다.  toggle함수 안에 있는 값을 체크하여 클래스가 있으면 add 없으면 remove