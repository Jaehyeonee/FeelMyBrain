
const audio_volume = document.querySelector("#cmusic");


function volume_control(con){
    music_cnt = music_cnt + 1;
    
    alert('볼륨 조절'+ 'music_cnt' + music_cnt);

    // audio_volume.volume = 5;
    // 집중도 척도 
    

    // 집중도 낮을 때 -> 볼륨 up
    if(con <= 1.97 ){  
        audio_volume.volume = 9;
        music_sum = music_sum + 9;
        alert('볼륨 up');
    }
    // 집중도 높을 때 -> 볼륨 down
    else if (con >= 2.35){
        audio_volume.volume = 1;
        music_sum = music_sum + 1;
        alert('볼륨 down');
    }
    else{
        audio_volume = 0;
    }
    
}



// $(document).ready(function(){
//     if(show){
//         setInterval(function(){
//             $.ajax({
//                 url: '/music',
//                 type: 'GET',
//                 success: function(data){
//                     alert('/music에서 success') 
    
//                     volume_control(data)
//                     alert('music 조절 데이터를 얻었습니다.') 
//                 },
//                 error: alert('실패: music 음악 조절 데이터 얻지 못함')
//             })
//         }, 1000);
//     }
    
    
//   });
