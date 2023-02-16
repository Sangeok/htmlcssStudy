const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";
// const HIDDEN_CLASSNAME = "hidden"; 이거 왜 추가하면 에러나지?;;

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleToDo(event) {
    const deleteli = event.target.parentElement;
    deleteli.remove();
    // type을 맞춰줘야 filter를 사용할 수 있다. (따라서 parseInt사용)
    toDos = toDos.filter((item)=> item.id !== parseInt(deleteli.id));
    saveToDos();
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodoObj.text;
    // 각 li에 대해 id 속성의 값을 부여함.(class와 같은 id) => 선택적으로 localstorage에서 삭제할 수 있도록 하기 위해.
    li.id = newTodoObj.id;
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click",deleToDo);
    // li안에 span을 추가함.
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text : newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null ) {
    const parasedToDos = JSON.parse(savedToDos);
    // 이전 localStorage에 있는 값을 array에 저장
    toDos = parasedToDos;
    // paintTodo의 인자에 parasedToDos의 각각의 element가 전달되어 실행
    parasedToDos.forEach(paintTodo);
}
else {

}