# when using pycharm to run code, use the following imports
# from flask_tutorial.rummikub import rummikub_functions as rf
# from flask_tutorial.rummikub.Player import Player

# when using flask to display gameboard use the following imports
from flask_tutorial.rummikub import rummikub_functions as rf
from flask_tutorial.rummikub.Player import Player

# players, piece_stack, gameboard = None, None, None
# define players
def start_game(number_players):
    # global  players, piece_stack, gameboard
    gameboard = []
    piece_stack = rf.create_piece_stack()
    players = []
    for i in range(number_players):
        player = Player(i, 'Player'+str(i), [])
        players.append(player)
    # everyone draws 14 pieces before the game starts
    for _ in range(0, 14):
        for player in players:
            player.draw(rf.get_random_chip(piece_stack))
    print(len(piece_stack))
    return players, piece_stack, gameboard


def move(player, piece_stack, gameboard):
    print("It's the turn of " + str(player.name))
    # print(len(player.hand))
    chip = rf.get_random_chip(piece_stack)
    print("Drawing chip " + str(chip))
    player.draw(chip)
    # print(len(player.hand))
    street, modified_gameboard, added = rf.move(player, gameboard)
    if street and not modified_gameboard:
        print("Laying onto board")
        player.lay_chips(street, gameboard)
        # print(len(player.hand))
    elif street and modified_gameboard:
        print("Adding to gameboard")
        print("Previous gameboard: " + str(gameboard))
        print("New gameboard: " + str(street))
        print(added)
        if rf.correct_move(gameboard, street, added):
            print("Correct move")
            gameboard = street
            player.remove_chips(added)
            if rf.winner(player):
                print("Player " + str(player.id) + " won!")
                return True
    else:
        print("Incorrect move")
    print("Gameboard:")
    print(gameboard)
    # chip = get_random_chip(player.hand)
    # print(chip)
    # # print(player0.hand[0])
    # player.lay_chip(chip, gameboard)
    # print([str(x) for x in gameboard])
    # print(len(player0.hand))


# everyone draws 14 pieces before the game starts
# for _ in range(0, 14):
#     for player in players:
#         player.draw(rf.get_random_chip(piece_stack))
#
#
# for index in range(0,4):
#     for player in players:
#         if move(player, gameboard):
#             break

# print("Remaining chips: " + str([len(player.hand) for player in players]))