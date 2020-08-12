import json

from flask import (
    Blueprint,request
)
from flask_cors import CORS
# app = Flask(__name__)
# CORS(app)
from rummikub import rummikub as r



bp = Blueprint('rummikub', __name__)
CORS(bp)

players, piece_stack, gameboard = [], None, None

@bp.route('/')
def rummikub():
    return 'Hello, World!'+str(gameboard)


@bp.route('/move')
def move():
    global players, piece_stack, gameboard
    r.move(players[0], piece_stack, gameboard)
    result = json.dumps({"Player":players[0].hand, "Gameboard":gameboard})
    return result


@bp.route('/start')
def start():
    global players, piece_stack, gameboard
    players, piece_stack, gameboard = r.start_game(1)
    result = json.dumps({"Player":players[0].hand, "Gameboard":gameboard})
    return result


@bp.route('/draw')
def draw():
    global players, piece_stack, gameboard
    r.draw(players[0], piece_stack, gameboard)
    result = json.dumps({"Player": players[0].hand, "Gameboard": gameboard})
    return result


@bp.route('/receive', methods=['POST'])
def receive():
    global players, piece_stack, gameboard
    if request.method == 'POST':
        # title = request.form['title']
        # body = request.form['body']
        error = None
        move = request.form['move']
        received_board = json.loads(move)
        print(received_board)
        hand = received_board["Player"]
        board = received_board["Gameboard"]
        print(board)
        return str(board)

    return "test"
        # return received_board["Player"][0]
# @bp.route('/')
# def index():
#     db = get_db()
#     posts = db.execute(
#         'SELECT p.id, title, body, created, author_id, username'
#         ' FROM post p JOIN user u ON p.author_id = u.id'
#         ' ORDER BY created DESC'
#     ).fetchall()
#     return render_template('blog/index.html', posts=posts)


# @bp.route('/create', methods=('GET', 'POST'))
# @login_required
# def create():
#     if request.method == 'POST':
#         title = request.form['title']
#         body = request.form['body']
#         error = None
#
#         if not title:
#             error = 'Title is required.'
#
#         if error is not None:
#             flash(error)
#         else:
#             db = get_db()
#             db.execute(
#                 'INSERT INTO post (title, body, author_id)'
#                 ' VALUES (?, ?, ?)',
#                 (title, body, g.user['id'])
#             )
#             db.commit()
#             return redirect(url_for('blog.index'))
#
#     return render_template('blog/create.html')
#
#
# def get_post(id, check_author=True):
#     post = get_db().execute(
#         'SELECT p.id, title, body, created, author_id, username'
#         ' FROM post p JOIN user u ON p.author_id = u.id'
#         ' WHERE p.id = ?',
#         (id,)
#     ).fetchone()
#
#     if post is None:
#         abort(404, "Post id {0} doesn't exist.".format(id))
#
#     if check_author and post['author_id'] != g.user['id']:
#         abort(403)
#
#     return post
#
#
# @bp.route('/<int:id>/update', methods=('GET', 'POST'))
# @login_required
# def update(id):
#     post = get_post(id)
#
#     if request.method == 'POST':
#         title = request.form['title']
#         body = request.form['body']
#         error = None
#
#         if not title:
#             error = 'Title is required.'
#
#         if error is not None:
#             flash(error)
#         else:
#             db = get_db()
#             db.execute(
#                 'UPDATE post SET title = ?, body = ?'
#                 ' WHERE id = ?',
#                 (title, body, id)
#             )
#             db.commit()
#             return redirect(url_for('blog.index'))
#
#     return render_template('blog/update.html', post=post)
#
#
# @bp.route('/<int:id>/delete', methods=('POST',))
# @login_required
# def delete(id):
#     get_post(id)
#     db = get_db()
#     db.execute('DELETE FROM post WHERE id = ?', (id,))
#     db.commit()
#     return redirect(url_for('blog.index'))
