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



@app.route('/', methods=['GET', 'POST'])
def main():
    g.start_btn = True
    # 메인 페이지에 들어갔을 시 작동
    return render_template('Main.html')







if __name__ == "__main__":
    app.run(debug=True)