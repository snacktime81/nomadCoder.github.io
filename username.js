const loginInput = document.querySelector("#name");
const input = loginInput.querySelector("input");
const greeting = document.querySelector("#greeting");
const USER_KEY = "user"
const HIDDEN_CLASS = "hidden"

function handleSubmit(event){
  event.preventDefault();
  const userName = input.value;
  localStorage.setItem(USER_KEY, userName);
  loginInput.classList.add(HIDDEN_CLASS);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

loginInput.addEventListener("submit", handleSubmit);

const savedName = localStorage.getItem(USER_KEY);
if(savedName !== null){
  greeting.classList.remove(HIDDEN_CLASS);
  loginInput.classList.add(HIDDEN_CLASS);
  greeting.innerText = `Hello ${savedName}`;
} else{

}
