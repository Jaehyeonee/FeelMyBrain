from flask import Flask, render_template, session, abort, redirect, request, Blueprint, jsonify, g
import get_data

start = Blueprint('start', __name__)
lsl = get_data.lsl_control()

@start.route('/btn_start')
# '공부시작' 버튼을 누르면
def btn_start():
    # '공부완료' 버튼으로 바꿔주기
    g.btn_study = True
    # 뇌파 측정 시작
    # lsl.start_getting_lsl()
    

    # 뇌파 그래프 실시간으로 전송해주기
    # 음악 초기 볼륨 크기로 설정 & 재생
    # 특정 기준을 넘으면 알람 울리기

    return redirect('/')

@start.route('/btn_end', method=['GET', 'POST'])
# '공부종료' 버튼을 누르면
def btn_end():
    # 뇌파 측정 종료
    g.btn_study = False
    # 리포트 페이지로 이동
    # 순집중시간, 알람 횟수, 평균 음악 볼륨 출력
    # 그래프 출력
    return