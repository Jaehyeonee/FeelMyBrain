# from live_chart_api import live_chart
import json
from random import random
from time import time

from flask import (Blueprint, Flask, abort, g, jsonify, make_response,
                   redirect, render_template, request, session, url_for)

from start_api import start

# from database import load_list
app = Flask(__name__)
app.register_blueprint(start)
5


@app.route('/', methods=['GET', 'POST'])
def main():
    g.start_btn = True
    g.music_play = False 
    # 메인 페이지에 들어갔을 시 작동, music_play = false로 두고 start_btn클릭시 true로 바꿔서 play
    return render_template('Main.html')



if __name__ == "__main__":
    app.run(debug=True)