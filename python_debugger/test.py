import time
#from "/mnt/c/Users/Sabrina/Documents/CAPSTONE2022/" import "debug.py"
from flask import Flask, request, jsonify
import debug

app = Flask(__name__)
users_seen = {}
@app.route('/whyline')
def hello():
    d = debug.debug("test1")
    output = d.run()
    out = ""
    for i in output:
        out = out+str(i[1])+"\n"
    return(out)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)