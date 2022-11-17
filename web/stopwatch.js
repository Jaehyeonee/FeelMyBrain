
let minutes = 0;
let seconds = 0;
let tenMillis = 0;
let interverId;


const appendTens = document.getElementById("tenMillis")
const appendSeconds = document.getElementById("seconds")
const appendMinutes = document.getElementById("minutes")
const btnstudy = document.getElementById("w-btn")




function startfunction(){
    interverId = setInterval(operateTimer, 10);
    document.getElementById('w-btn').textContent ='공부 완료';
}

function stopfunction(){
    clearInterval(interverId);
}

//btnstudy.onclick = startfunction(); stopfunction();

btnstudy.addEventListener("click", startfunction(), false)
btnstudy.addEventListener("click", stopfunction(), false)


//10ms마다 시간에 대한 숫자가 증가한다
function operateTimer() {
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
  if (tenMillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMillis = 0
    appendTens.textContent = "00"
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"
  }
};

/*
let minutes = 0;
let seconds = 0;
let tenMillis = 0;
let interverId;


const appendTens = document.getElementById("tenMillis")
const appendSeconds = document.getElementById("seconds")
const appendMinutes = document.getElementById("minutes")
const btnStart = document.getElementById("w-btn")


function tfunction(){
    this.textContent = '공부 완료';
}

function stfunction(){
    interverId = setInterval(operateTimer, 10)
}



btnReset.onclick = tfunction(); stfunction(); {
  tenMillis = 0;
  seconds = 0;
  minutes = 0;
  appendMinutes.textContent = "00"
  appendSeconds.textContent = "00"
  appendTens.textContent = "00"
}


//10ms마다 시간에 대한 숫자가 증가한다
function operateTimer() {
  tenMillis++;
  appendTens.textContent = tenMillis > 9 ? tenMillis : '0' + tenMillis
  if (tenMillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds
    tenMillis = 0
    appendTens.textContent = "00"
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes
    seconds = 0
    appendSeconds.textContent = "00"
  }
};

*/