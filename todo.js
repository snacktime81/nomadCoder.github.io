const toDoForm = document.querySelector("#toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDoList");
const TODOS_KEY = "todos";
let toDos = [];

function handleToDoSubmit(event) { 
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.id = newTodo.id;
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo)
  li.classList.add("todoText")
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
 
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}