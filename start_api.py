from flask import Flask, render_template, session, abort, redirect, request, Blueprint, jsonify, g, make_response
import get_data
import json
from random import random
from time import time, ctime
import analyze
import numpy as np

start = Blueprint('start', __name__)
lsl = get_data.lsl_control()
music_cnt = 0
alarm_cnt = 0

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

#     # return redirect('/')

@start.route('/btn_end', methods=['GET', 'POST'])
# '공부종료' 버튼을 누르면
def btn_end():
    # 뇌파 측정 종료
    lsl.state=False
    # g.btn_study = False
    atten_time = 10
    num_alarm = alarm_cnt
    avg_music = 12
    
    # 리포트 페이지로 이동
    return render_template('result.html', atten_time=atten_time, num_alarm=num_alarm, avg_music=avg_music, con_list=lsl.conlist)
    # 순집중시간, 알람 횟수, 평균 음악 볼륨 출력
    # 그래프 출력


# 실시간 그래프 출력
@start.route('/live-data')
def live_data():
    # Create a PHP array and echo it as JSON

    # lsl 실시간 데이터의 마지막 부분 출력
    
    # print(lsl.timelist)
    while len(lsl.timelist) <= 0:
        # print('len(lsl.timelist) <= 0:')
        pass

    # data = [time() * 1000, lsl.timelist[-1][1]] 
    data =lsl.timelist[-1]    
    # print(ctime(data[0]))
    # data = [time(), lsl.timelist[-1][1]]
    
    # print(data)
    response = make_response(json.dumps(data))
    response.content_type = 'application/json'
    print(response)
    
    print(data[0])
    return response

@start.route('/ajax')
def ajax():
    print('ajax 실행')
    eeg_list = lsl.start_getting_lsl()
    return jsonify(eeg_list)


@start.route('/con-data')
def con_data():
    # 1초에 한번씩 집중도 데이터 불러와서 리스트에 넣기# Create a PHP array and echo it as JSON

    # lsl 실시간 데이터의 마지막 부분 출력
    global lsl
    global alarm_cnt
    # print(lsl.timelist)
    while len(lsl.timelist) <= 201:
        # print('len(lsl.timelist) <= 0:')
        pass

    # data = [time() * 1000, lsl.timelist[-1][1]] 
    data =lsl.timelist[-200 :]
    data = np.array(data)
    con_data = list(analyze.get_con(data[:,0], data[:,1]))
    lsl.conlist.append(con_data) # 집중도를 리스트에 담아두기
    
    print('lsl.conlist',lsl.conlist)


    ### 아직 구체적으로 알고리즘을 정하지는 않음
    ### flag랑 틀이 필요할 것 같아서 대충 만들어봄
    ########### 알람 울리기 ###########
    if con_data <= 0.97:  # 약 3.5% 확률
        alarm_cnt += 1 # 지속적으로 집중도가 낮으면 알람 울리기
        # print('알람 울리기!!!!!!!!!!!')
    else:
        alarm_cnt = 0

    ########### 음악 볼륨 조절하기 ###########
    if con_data >= 1.35:  # 약 36% 확률
        music_cnt += 1 # 지속적으로 집중도가 높으면 음악 볼륨 낮추기
        print('음악 볼륨 낮추기!!!!!!!!!!!')
    else:
        music_cnt = 0
    
    return jsonify(lsl.conlist)
