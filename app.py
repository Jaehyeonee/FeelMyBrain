from flask import Flask,render_template,request,redirect,url_for,g,session


# from database import load_list
app = Flask(__name__)


# DB config
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@127.0.0.1:3306/FeelMyBrain'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


@app.route('/')
def main():
    # 메인 페이지에 들어갔을 시 작동
    return render_template('Main.html')

if __name__ == "__main__":
    app.run(debug=True)