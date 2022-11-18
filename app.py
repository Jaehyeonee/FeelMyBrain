from flask import Flask, render_template, session, abort, redirect, request, Blueprint, jsonify, g, make_response, url_for

from start_api import start
# from live_chart_api import live_chart
import json
from time import time
from random import random

# from database import load_list
app = Flask(__name__)


# DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@127.0.0.1:3306/FeelMyBrain'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route('/')
def main():
    # 메인 페이지에 들어갔을 시 작동
    return render_template('Main.html')

    # btn 이름 전달
    # return render_template('Main.html', btn_name=btn_name)


@app.route('/live-data')
def live_data():
    # Create a PHP array and echo it as JSON
    data = [time() * 1000, random() * 100]
    response = make_response(json.dumps(data))
    response.content_type = 'application/json'
    return response

if __name__ == "__main__":
    app.run(debug=True)