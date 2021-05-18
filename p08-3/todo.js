const toDoForm = document.querySelector(".js-toDo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

// function filterFn(toDo){
//     return toDo.id === 1;
// }

let toDos = [];               //  배열값을 받을 상수 생성

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){           // toDos 를 가져와서 로컬에 저장하는 함수
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));          // 그냥 사용시 object 형식으로 저장되어  --> JSON 을 통하여 string으로 저장
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;                   // 아이디가 1부터 시작
    delBtn.innerText = "삭제";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;                                  // li 에도 id 값을 부여해서 원하는 id 값을 삭제할 수 있게됨
    toDoList.appendChild(li);

    const toDoOBJ = {
        text: text,
        id:newId
    };
    toDos.push(toDoOBJ);
    saveToDos();
    // console.log(text);
    // toDoList.innerText = `${text}`;
}

function handleSubmit(event){
    event.preventDefault();             //  입력칸 값을 유지 시켜줌
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";               //  입력칸 값을 초기화 시켜줌
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS)
    if(loadedToDos !== null){
     const parsedToDos = JSON.parse(loadedToDos);           // string 값을 다시 object 로 바꾸어 출력해 줌
     parsedToDos.forEach(function(toDo){
        paintToDo(toDo.text);
     });    
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();


/*
toDo 리스트 추가 방법,,  직전에  p07에서 진행한 gretting 와 비슷한 코드이다.

part 2.>
 목록울 저장하고 목록을 array 로 저장



 JSON.stringify()  -->  는 object 를  string 으로 바꾸어 줌
 forEach 는 기본적으로 함수를 실행 하는데 array 에 담겨 있는 것들을 각각에 한번씩 함수를 실행시켜 줌

 

 foreach 문은 오직 array 객체에서 사용이 가능하다.
 배열 요소 각각을 실행해주는 역활을 수행한다.

 
*/