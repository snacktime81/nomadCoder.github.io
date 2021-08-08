const clcok = document.querySelector("h3#clock");
const Month = [30, 28, 31, 30, 31, 30, 31, 31 , 30, 31, 30, 31];
function untillChrist(){
  const date = new Date();
  const nowMonth = date.getMonth();
  const nowDate = date.getDate();
  const nowHour = date.getHours();
  const nowMin = date.getMinutes();
  const nowSec = date.getSeconds();
  let day = 0
  for(let i = nowMonth+1; i<11; i++){
    day += Month[i];
  }
  day += 25;
  if(nowMonth != 11){
    day += Month[nowMonth] - (nowDate) ;
  } else{
    day += 25 - (nowDate)
  }
  let hour = String(23 - nowHour).padStart(2, 0);
  let min = String(60 - nowMin).padStart(2, 0);
  let sec = String(60 - nowSec).padStart(2, 0);
  clcok.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}
untillChrist()
setInterval(untillChrist, 1000);