const body = document.querySelector("body");
const IMG_NUMBER = 3;


function handleImgLoad(){
    console.log()
}

function paintImage(imgNumber){
    const img = new Image();
    //image객체가 생성되어 속성들을 추가할수 있음
    img.src = `images/${imgNumber + 1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
}

function getRandomNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init(){
    const randomNumber = getRandomNumber();
    paintImage(randomNumber);
}

init();


/*

prepend - 선택된 요소의 (첫번째) 에 새로운 요소나 콘텐츠를 추가한다.
append  - 선택된 요소의 (마지막) 에 새로운 요소나 콘텐츠를 추가한다.

img 객체는 HTML 문서내에 있는 이미지에 관한 정보를 담고 있다.


keyframes fadein - css 문법으로 애니메이션 효과 추가하기.  
                    .. opacity를 애니메이션으로 n초 동안 0에서 1까지 주면 된다. (from: 0, to: 1)

*/