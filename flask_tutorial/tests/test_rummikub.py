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


def test_move_add_single_chip_to_three_of_kind():
    player = Player(0, 'Player_test', [(1, 'red', 0)])
    player.entered_game = True
    gameboard = [[(1, 'black', 0), (1, 'yellow', 0), (1, 'blue', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert equals(street, [[(1, 'black', 0), (1, 'blue', 0), (1, 'yellow', 0), (1, 'red', 0)]])


def test_move_add_single_chip_to_street():
    player = Player(0, 'Player_test', [(4, 'red', 0)])
    player.entered_game = True
    gameboard = [[(5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert equals(street, [[(4, 'red', 0), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]])

    # check that it does not work if color is different
    player = Player(0, 'Player_test', [(4, 'blue', 0)])
    player.entered_game = True
    gameboard = [[(5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert not modified_gameboard

    # check that it works when other chip with same value is used
    player = Player(0, 'Player_test', [(4, 'red', 1)])
    player.entered_game = True
    gameboard = [[(5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert equals(street, [[(4, 'red', 1), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]])

    # check different street
    player = Player(0, 'Player_test', [(1, 'red', 0)])
    player.entered_game = True
    gameboard = [[(2, 'red', 0), (3, 'red', 0), (4, 'red', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert equals(street, [[(1, 'red', 0), (2, 'red', 0), (3, 'red', 0), (4, 'red', 0)]])

    # check appending at end
    player = Player(0, 'Player_test', [(4, 'red', 0)])
    player.entered_game = True
    gameboard = [[(1, 'red', 0), (2, 'red', 0), (3, 'red', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert equals(street, [[(1, 'red', 0), (2, 'red', 0), (3, 'red', 0), (4, 'red', 0)]])


def test_splitting_street():
    # does not work if exactly same chip is used twice
    player = Player(0, 'Player_test', [(4, 'red', 1)])
    player.entered_game = True
    gameboard = [[(2, 'red', 0), (3, 'red', 0), (4, 'red', 0), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]]
    street, modified_gameboard, added = rf.move(player, gameboard)
    assert equals(street, [[(2, 'red', 0), (3, 'red', 0), (4, 'red', 1)],
                           [(4, 'red', 0), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0)]])


def test_street_from_three_of_kinds():
    pass


def test_three_of_kinds_from_streets():
    pass


def test_move():
    # TODO
    # TODO test the following: Why is there no 2,3,4,5???
    #  [[(9, 'black', 1), (9, 'blue', 0), (9, 'red', 0), (9, 'yellow', 1)],
    #  [(9, 'red', 1), (9, 'black', 1), (9, 'blue', 0), (9, 'yellow', 1)],
    #  [(9, 'blue', 0), (9, 'red', 0), (9, 'yellow', 1)],
    #  [(9, 'black', 1), (9, 'red', 0), (9, 'yellow', 1)],
    #  [(9, 'black', 1), (9, 'blue', 0), (9, 'yellow', 1)],
    #  [(9, 'black', 1), (9, 'blue', 0), (9, 'red', 0)],
    #  [(9, 'red', 1), (9, 'blue', 0), (9, 'yellow', 1)],
    #  [(9, 'red', 1), (9, 'black', 1), (9, 'yellow', 1)],
    #  [(9, 'red', 1), (9, 'black', 1), (9, 'blue', 0)],
    #  [(1, 'red', 1), (2, 'red', 1), (3, 'red', 0), (4, 'red', 0),
    #  (5, 'red', 0), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0), (9, 'red', 0)],
    #  [(4, 'red', 0), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0), (9, 'red', 0)],
    #  [(5, 'red', 0), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0), (9, 'red', 0)],
    #  [(5, 'red', 1), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0), (9, 'red', 0)],
    #  [(1, 'red', 1), (2, 'red', 1), (3, 'red', 0), (4, 'red', 0), (5, 'red', 0),
    #  (6, 'red', 0), (7, 'red', 0), (8, 'red', 0)],
    #  [(4, 'red', 0), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0)],
    #  [(5, 'red', 0), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0)],
    #  [(5, 'red', 1), (6, 'red', 0), (7, 'red', 0), (8, 'red', 0)],
    #  [(4, 'red', 0), (5, 'red', 0), (6, 'red', 0), (7, 'red', 0)],
    #  [(5, 'red', 1), (6, 'red', 0), (7, 'red', 0)],
    #  [(1, 'red', 1), (2, 'red', 1), (3, 'red', 0), (4, 'red', 0), (5, 'red', 0), (6, 'red', 0)],
    #  [(4, 'red', 0), (5, 'red', 0), (6, 'red', 0)],
    #  [(1, 'red', 1), (2, 'red', 1), (3, 'red', 0), (4, 'red', 0), (5, 'red', 0)],
    #  [(1, 'red', 1), (2, 'red', 1), (3, 'red', 0), (4, 'red', 0)],
    #  [(1, 'red', 1), (2, 'red', 1), (3, 'red', 0)]]

    pass


def equals(a, b):
    a.sort()
    b.sort()
    for element_a, element_b in zip(a, b):
        if type(element_a) == list and type(element_b) == list:
            element_a.sort()
            element_b.sort()
            for item_a, item_b in zip(element_a, element_b):
                if item_a != item_b:
                    return False
        else:
            if element_a != element_b:
                return False
    return True
    # if a == b:
    #     return True
    # return False
