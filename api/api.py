import time
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

@app.route('/time')
def get_current_time():
    return jsonify({'time': time.time()})

if __name__ == '__main__':
    app.run(port=8000, debug=True)