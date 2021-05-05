const toDoForm = document.querySelector(".js-toDo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "삭제";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

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
    const toDos = localStorage.getItem(TODOS_LS)
    if(toDos !== null){
     
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();


/*
toDo 리스트 추가 방법,,  직전에  p07에서 진행한 gretting 와 비슷한 코드이다.

*/