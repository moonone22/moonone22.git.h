//아날로그 시계
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();
setInterval(setClock, 1000);

//디지털 시계 

const TextClock = document.querySelector('.TextClock')
const AMPM = document.querySelector('.AMPM')

function ShowmeColock(){
  const date = new Date()
  
  const H = String(date.getHours()%12).padStart(2,"0");
  
  const M = String(date.getMinutes()).padStart(2,"0");
  
  const S = String(date.getSeconds()).padStart(2,"0");
  
  

  TextClock.innerText = `${H}:${M}:${S}`

  if(Number(date.getHours())<12){
    AMPM.innerText ="AM"
  }else{
    AMPM.innerText ="PM"
  }
  

}
ShowmeColock();


setInterval(ShowmeColock, 1000);