# Import flask and datetime module for showing date and time
from flask import Flask
from flask import request
from flask import redirect
import sys

# Initializing flask app
app = Flask(__name__)

players = [{
    'Name': "Tony",
    'Wins': 0,
    'CuP': 0,
    'First': 0
}, {
    'Name': "John",
    'Wins': 0,
    'CuP': 0,
    'First': 0
}, {
    'Name': "Simon",
    'Wins': 0,
    'CuP': 0,
    'First': 0
}]


@app.route('/playershome')
def return_players():
    return {
        'people': players
    }


@app.post('/playersadd')
def add_player():
    players.append(request.get_json())
    return redirect('/playershome')


@app.route('/test')
def get_time():
    # Returning an api for showing in  reactjs
    return {
        'Name': "Mohammad Jamal",
        "Age": "21",
        "Date": "june",
        "programming": "python"
    }


# Running app
if __name__ == '__main__':
    app.run(debug=True)