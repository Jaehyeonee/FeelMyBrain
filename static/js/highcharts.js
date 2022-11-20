var chart;

/**
 * Request data from the server, add it to the graph and set a timeout
 * to request again
 */

// 리스트로 표현된 timestamp와 value를 읽어와서 chart에 point로 추가하기 위한 코드
// http://127.0.0.1:5000/live-data 와 같은 url에 데이터가 존재하면 success로 넘어가며
// function(point)라는 함수 동작
function requestData() {
    $.ajax({
        url: '/live-data',
        success: function(point) { // point는  http://127.0.0.1:5000/live-data 의 데이터 전체 의미함
            var series = chart.series[0], // chart 변수에 등록한 첫번째 series 할당
                shift = series.data.length > 20; // shift if the series is
                                                 // longer than 20
                                                 // shift라는 변수는 그래프의 점이 20개 이상이 되면 
                                                 // 앞에서 받았던 점을 보이는 부분에서 없애고 
                                                 // 새로 추가된 점을 오른쪽 끝에 추가하여 총 20개 의 점만 
                                                 // series로 그리겠다는 의미

            // add the point
            chart.series[0].addPoint(point, true, shift);

            // call it again after one second
            setTimeout(requestData, 1000);
        },
        cache: false
    });
}

$(document).ready(function() {
    $(".start-btn").click(function(){

        chart = new Highcharts.Chart({  // <태그 id='data-container'>에 그래프 그려라!
            chart: {
                renderTo: 'data-container', // Series가 그래프에 표현되는 모양을 설정
                defaultSeriesType: 'spline',
                events: {
                    load: requestData // requestData라는 Ajax함수로 구현 -> 실시간 업데이트 가능한 그래프 구현
                }
            },
            title: {
                text: 'Live random data' // 그래프 상단에 출력되는 그래프 제목
            },
            xAxis: { // X축 디자인 담당
                type: 'datetime',
                tickPixelInterval: 150,
                maxZoom: 20 * 1000
            },
            yAxis: { // Y축 디자인 담당
                minPadding: 0.2,
                maxPadding: 0.2,
                title: {
                    text: 'Value',
                    margin: 80
                }
            },
            series: [{  // 이 필드에 제대로 등록되어야 그래프에 점과 선으로 잘 나타남
                name: 'Attention data',
                data: []
            // }, {
            //     name: 'Random data 2', 여러 선으로 표현하고 싶으면 주석 해제하면 됨
            //     data: []
            }]
        });
    })
});