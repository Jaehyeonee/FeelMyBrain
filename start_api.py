from flask import Flask, render_template, session, abort, redirect, request, Blueprint, jsonify, g, make_response
import get_data
import json
from random import random
from time import time


start = Blueprint('start', __name__)
lsl = get_data.lsl_control()

@start.route('/btn_start', methods=['GET', 'POST'])
# '공부시작' 버튼을 누르면
def btn_start():
    # '공부완료' 버튼으로 바꿔주기
    g.start_btn = False
    return render_template('Main.html', start_btn=g.start_btn)
    # 뇌파 측정 시작
    # lsl.start_getting_lsl()
    

    # 뇌파 그래프 실시간으로 전송해주기
    # 음악 초기 볼륨 크기로 설정 & 재생
    # 특정 기준을 넘으면 알람 울리기

    # return redirect('/')

@start.route('/btn_end', methods=['GET', 'POST'])
# '공부종료' 버튼을 누르면
def btn_end():
    # 뇌파 측정 종료
    g.btn_study = False
    atten_time = 10
    num_alarm = 11
    avg_music = 12
    
    # 리포트 페이지로 이동
    return render_template('result.html', atten_time=atten_time, num_alarm=num_alarm, avg_music=avg_music)
    # 순집중시간, 알람 횟수, 평균 음악 볼륨 출력
    # 그래프 출력


# 실시간 그래프 출력
@start.route('/live-data')
def live_data():
    # Create a PHP array and echo it as JSON

    # lsl 실시간 데이터의 마지막 부분 출력
    # data =lsl.timelist[-1]
    data = [time() * 1000, random() * 100]  # 이건 샘플
    response = make_response(json.dumps(data))
    response.content_type = 'application/json'
    print(response)
    return response
