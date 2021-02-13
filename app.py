from flask import Flask
from flask import render_template
import json
import telebot

app = Flask(__name__)

bot = telebot.TeleBot('1096828547:AAHD7G8ZMTQ3FsU_4cQj6HQG-rWVMsrzUrg')

@app.route('/', methods=["GET", "POST"])
@app.route('/login/', methods=["GET", "POST"])
def index():
    # code = flask.Response(status=201)(
    return render_template("main.html")

@app.route('/get/', methods=["GET", "POST"])
def get():
    bot.send_message(587125336, 'ку ебать')
    return json.dumps({
        "code": 200,
        "status": "success"
    })

app.run(debug=True, host='localhost', port=1234)
