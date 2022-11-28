
const audio_volume = document.querySelector("#cmusic");
const audioSet = document.querySelector("#volume-control");


function volume_control(con){
    audioVolume.addEventListener("change", function(e) {
        audio.volume = this.value/10;
    })


    audio_volume.volume = 0.5;
    // 집중도 척도 
    

    // 집중도 낮을 때 -> 볼륨 up
    if(con <= 1.97 ){  
        audio_volume.volume = 0.9;
    }
    // 집중도 높을 때 -> 볼륨 down
    else if (con >= 2.35){
        audio_volume.volume = 0.1;
    }
    else{
        audio_volume = 0.0;
    }
    
}





