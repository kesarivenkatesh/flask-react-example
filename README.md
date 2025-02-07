# Simple Flask-React project with CORS

## Folder structure
- /react-flask-app is frontend
- /react-flask-app/api/ is backend

## Running steps
### Backend
I created venv....I am providing you requirements.txt

- virtual environment way(better)

    `cd /react-flask-app/api/` &&
`python3 -m venv venv` &&
`source venv/bin/activate` &&
`pip install flask python-dotenv Flask-Cors` &&
`flask run —port 8000` (can have any port)

<center>OR</center>

- `pip install -r requirements.txt` and `flask run --port 8000`

### Frontend
- `npm install`
- `npm start`

## Some other things
- ### Re-routing the request from frontend through proxy
    Added `"proxy": "http://localhost:8000"` in `package.json`

    This redirects every request from `fetch` or `axios` to mentioned "proxy+path"

- ### CORS
    in /api/api.py, added `CORS(app, origins="http://localhost:3000")` with allowed origin

- ### .flaskenv
    helps in `flask run` command, as ENVIRONMENT variables are set

    FLASK_APP tells which file has Flask application

    FLASK_ENV can be development or production accordingly

    can have any secrets(database url, passwords) during developement(Ideally should not be available to public in github)

    Format: KEY=VALUE

    As secrets are managed in this file, for safety I am renaming this to .flaskenv.example(**pls rename it back to .flaskenv while running backend**)

## Reference

<u>https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project</u>

--------------------------------------------
