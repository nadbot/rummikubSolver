from flask_tutorial.rummikub import rummikub
from flask_tutorial.rummikub.Player import Player
from flask_tutorial.rummikub import rummikub_functions as rf
import random
import copy
from flask_tutorial.flaskr.Agent import DQNAgent
from keras.utils import to_categorical

def random_move(gameboard, hand):
    new_gameboard = copy.deepcopy(gameboard)
    # only append item to one of the streets
    random_street = random.randrange(0, len(new_gameboard))
    # add +1 to be able to append it at the end
    random_pos = random.randrange(0, len(new_gameboard[random_street])+1)
    random_item = random.randrange(0, len(hand))

    new_gameboard[random_street].insert(random_pos, hand[random_item])
    new_hand = hand.copy()
    new_hand.remove(new_hand[random_item])

    print(new_gameboard)

    return new_gameboard, new_hand


player = Player(0, 'Player_test', [(4, 'yellow', 0)])
player.entered_game = True
piece_stack = rf.create_piece_stack()

gameboard = [[(1, 'red', 0), (2, 'red', 0), (3, 'red', 0)],
             [(1, 'black', 0), (2, 'black', 0), (3, 'black', 0)],
             [(1, 'blue', 0), (2, 'blue', 0), (3, 'blue', 0)],
             [(1, 'yellow', 0), (2, 'yellow', 0), (3, 'yellow', 1)]]

# TODO update chips into list of dim 5 [number, black (1 or 0), blue (1 or 0), red, yellow] (necessary???)
# TODO use gameboard and randomly shuffle all chips from hand and gameboard (any street, any position in street)
#   if valid move, give reward (points_played)
points = 0

# # street, modified_gameboard, added = rf.move(player, gameboard)
# new_gameboard = [[(1, 'red', 0), (1, 'black', 0), (1, 'blue', 0)],
#                  [(2, 'red', 0), (2, 'black', 0), (2, 'blue', 0)],
#                  [(3, 'red', 0), (3, 'black', 0), (3, 'blue', 0), (3, 'yellow', 0)],
#                  [(1, 'yellow', 0), (2, 'yellow', 0), (3, 'yellow', 1)]]
# new_hand = []
correct = False
# while not correct:
new_gameboard, new_hand = random_move(gameboard, player.hand)
print(new_hand)
correct, points_played = rummikub.check_move(player.hand, new_hand, gameboard, new_gameboard)


if correct:
    # update hand, gameboard, draw new chip
    player.hand = new_hand
    gameboard = new_gameboard
    points = points_played
    player.draw(rf.get_random_chip(piece_stack))
print(correct)
print(player.hand)
print(new_hand)
print(points_played)


