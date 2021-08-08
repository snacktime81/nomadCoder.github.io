const clock = document.querySelector("#clock");

function liveClock(){
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  clock.innerText = `${hour}h ${min}m ${sec}s`;
}

liveClock();
setInterval(liveClock, 1000);