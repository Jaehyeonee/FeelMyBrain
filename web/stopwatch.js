
<<<<<<< HEAD
=======
const timeStamp = document.querySelector(".timestamp");
const startBtn = document.querySelector(".start-btn");

let minutes = 0; //분
let seconds = 0; //초
let milisec = 0; //밀리초
let count = 0; //시간 세는 변수
let timer; //setInterval 값을 넣어 나중에 clearInterval하기위한 변수

function countTime() {
  if (startBtn.value == "공부 시작") {
    startBtn.value = "공부 완료";
    startBtn.className = "stop-btn";
    timer = setInterval(function () {
      count += 1;
      minutes = Math.floor(count / 6000);
      let namuzi1 = count % 6000;
      seconds = Math.floor(namuzi1 / 100);
      let namuzi2 = namuzi1 % 100;
      milisec = namuzi2;
      ClockPaint();
    }, 10);
  } else if (startBtn.value == "공부 완료" && count != 0) {
    clearInterval(timer);
    startBtn.value = "공부 시작";
    startBtn.className = "start-btn";
  }
}

function ClockPaint() {
  timeStamp.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }:${milisec < 10 ? "0" + milisec : milisec}`; //시간을 화면에 표시하는함수
}

function init() {
  startBtn.addEventListener("click", countTime); // 스타트버튼 클릭시 countTime함수 실행
}

init(); //처음에 클릭이벤트를 실행하기 위해서 만들어둔 함수


/*
const startBtn = document.querySelector(".start-btn");

let minutes = 0;
let seconds = 0;
let tenMillis = 0;
let interverId;


function countTime(){
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
}

function init(){
  startBtn.addEventListener("click", countTime);
}
init();

function ClockPaint(){
  timStamp.innerText = 
}




/*
>>>>>>> master
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
<<<<<<< HEAD
    document.getElementById('w-btn').textContent ='공부 완료';
=======
    
>>>>>>> master
}

function stopfunction(){
    clearInterval(interverId);
}

<<<<<<< HEAD
//btnstudy.onclick = startfunction(); stopfunction();

btnstudy.addEventListener("click", startfunction(), false)
btnstudy.addEventListener("click", stopfunction(), false)

=======
document.getElementById("w-btn").onclick = function(){
  this.textContent = "공부 완료"
}



function flagfunction(){
  flagvalue = 0
  flagvalue = flagvalue + 1; 
  if(flagvalue==1){
    startfunction();
  }

  
}
>>>>>>> master

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