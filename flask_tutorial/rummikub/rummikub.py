# when using pycharm to run code, use the following imports
# from flask_tutorial.rummikub import rummikub_functions as rf
# from flask_tutorial.rummikub.Player import Player

# when using flask to display gameboard use the following imports
from flask_tutorial.rummikub import rummikub_functions as rf
from flask_tutorial.rummikub.Player import Player

# define players
player0 = Player(0, 'Player0', [])
player1 = Player(1, 'Player1', [])
player2 = Player(2, 'Player2', [])
player3 = Player(3, 'Player3', [])
players = [player0, player1, player2, player3]

gameboard = []
piece_stack = rf.create_piece_stack()

print(len(piece_stack))


# everyone draws 14 pieces before the game starts
for _ in range(0, 14):
    for player in players:
        player.draw(rf.get_random_chip(piece_stack))


for index in range(0,4):
    for player in players:
        print("It's the turn of " + str(player.name))
        # print(len(player.hand))
        chip = rf.get_random_chip(piece_stack)
        print("Drawing chip " + str(chip))
        player.draw(chip)
        # print(len(player.hand))
        street = rf.move(player, gameboard)
        if street:
            print("Laying onto board")
            player.lay_chips(street, gameboard)
            # print(len(player.hand))
        else:
            print("Unable to move")
        print("Gameboard:")
        print(gameboard)
        # chip = get_random_chip(player.hand)
        # print(chip)
        # # print(player0.hand[0])
        # player.lay_chip(chip, gameboard)
        # print([str(x) for x in gameboard])
        # print(len(player0.hand))

print("Remaining chips: " + str([len(player.hand) for player in players]))