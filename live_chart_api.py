# import json
# from time import time
# from random import random
# from flask import Flask, render_template, session, abort, redirect, request, Blueprint, jsonify, g, make_response

# live_chart = Blueprint('live_chart', __name__)

# @live_chart.route('/live-data')
# def live_data():
#     # Create a PHP array and echo it as JSON
#     data = [time() * 1000, random() * 100]
#     response = make_response(json.dumps(data))
#     response.content_type = 'application/json'
#     return response