from flask import Flask,request
from flask_cors import CORS, cross_origin
import ast
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods=["POST"])
@cross_origin()
def save_email():
    if request.method == 'POST':
        email = ast.literal_eval(request.data.decode('utf-8'))["email"]
        if email not in open("emails.txt", "r").read():
            open("emails.txt", "a+").write(email + "\n")
        else:
            print("repeat")

    return "OK"
