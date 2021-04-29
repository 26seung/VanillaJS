// const title = document.getElementById("title");

// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "Change Title";
// console.dir(document);

////////////////////////////////////////


const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "Change Title";

// html 을 JS 을 이용하여 DOM으로 변경 가능

// querySelector 는 첫번째 노드의 자식을 반환함, document로 가서 모든 자식을 찾아서 반환