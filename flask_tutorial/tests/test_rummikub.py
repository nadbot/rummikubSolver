# import flask_tutorial.rummikub.rummikub as r
from flask_tutorial.rummikub.Player import Player
import flask_tutorial.rummikub.rummikub_functions as rf
import pytest


def test_piece_stack():
    """
    Test that tests whether the piece stack is working properly
    """
    piece_stack = rf.create_piece_stack()
    items = []
    for i in range(0, 106):
        item = rf.get_random_chip(piece_stack)
        # test that each item is different
        assert item not in items
        items.append(item)
        assert len(piece_stack) == 105 - i
    assert len(piece_stack) == 0


def test_draw():
    piece_stack = rf.create_piece_stack()
    player = Player(0, 'Player0', [])
    player.draw(rf.get_random_chip(piece_stack))
    assert len(player.hand) == 1
    player.draw(rf.get_random_chip(piece_stack))
    assert len(player.hand) == 2


def test_correct_move():
    gameboard = [[(1, 'black', 0), (1, 'yellow', 0), (1, 'blue', 0)]]
    new_gameboard = [[(1, 'black', 0), (1, 'yellow', 0), (1, 'blue', 0), (1, 'red', 0)]]
    correct = rf.correct_move(gameboard, new_gameboard, [(1, 'red', 0)])
    assert correct
    gameboard = [[(1, 'black', 0), (1, 'yellow', 0), (1, 'blue', 0)], [(2, 'blue', 0), (3, 'blue', 1), (4, 'blue', 0)]]
    new_gameboard = [[(1, 'black', 0), (1, 'yellow', 0), (1, 'blue', 0), (1, 'red', 0)],
                     [(2, 'blue', 0), (3, 'blue', 1), (4, 'blue', 0)]]
    correct = rf.correct_move(gameboard, new_gameboard, [(1, 'red', 0)])
    assert correct
    gameboard = []
    new_gameboard = [[(2, 'blue', 0), (3, 'blue', 1), (4, 'blue', 0)]]
    correct = rf.correct_move(gameboard, new_gameboard, [(2, 'blue', 0), (3, 'blue', 1), (4, 'blue', 0)])
    assert correct
    # testcases that should be failing
    # adding less than 3 items
    gameboard = []
    new_gameboard = [[(2, 'blue', 0), (3, 'blue', 1)]]
    correct = rf.correct_move(gameboard, new_gameboard, [(2, 'blue', 0), (3, 'blue', 1)])
    assert not correct
    # adding more items than new one
    gameboard = []
    new_gameboard = [[(2, 'blue', 0), (3, 'blue', 1), (4, 'blue', 0)]]
    correct = rf.correct_move(gameboard, new_gameboard, [(2, 'blue', 0), (3, 'blue', 1)])
    assert not correct


def test_move_go_out():
    # TODO
    pass


def test_move():
    # TODO
    pass
