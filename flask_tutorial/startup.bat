ECHO OFF
venv\Scripts\activate
set FLASK_APP=flaskr
set FLASK_ENV=development
flask run
PAUSE