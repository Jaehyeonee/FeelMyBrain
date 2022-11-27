
const audio_volume = document.querySelector("#cmusic");


function volume_control(){
    audio_volume.volume = 5;
    // 집중도 척도 

    // 집중도 낮을 때 -> 볼륨 up
    if(con_data <= 0.97 ){  
        audio_volume.volume = 9;
    }
    // 집중도 높을 때 -> 볼륨 down
    else if (con_data >= 1.35){
        audio_volume.volume = 1;
    }
    else{
        audio_volume = 0;
    }
    
}


