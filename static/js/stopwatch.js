const timeStamp = document.querySelector(".timestamp");
const startBtn = document.querySelector(".start-btn");
const audio_play = document.querySelector("#cmusic");


let minutes = 0; //분
let seconds = 0; //초
let milisec = 0; //밀리초
let count = 0; //시간 세는 변수
let timer; //setInterval 값을 넣어 나중에 clearInterval하기위한 변수

function audioStart(){
  if(startBtn.value == "공부시작"){

  }
}

function countTime() {
  if (startBtn.value == "공부 시작" ) {
    startBtn.value = "공부 완료";
    
    // 시작 버튼 클릭 시, 음악 재생
    audio_play.play();
    

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
    location.href='/btn_end'
    // startBtn.value = "공부 시작";
    // startBtn.className = "start-btn";
  }
}

function ClockPaint() {
  timeStamp.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }:${milisec < 10 ? "0" + milisec : milisec}`; //시간을 화면에 표시하는함수
}

function init() {
  startBtn.addEventListener("click", countTime ); // 스타트버튼 클릭시 countTime함수 실행
 

}

init(); //처음에 클릭이벤트를 실행하기 위해서 만들어둔 함수