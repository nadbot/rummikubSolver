# from rummikub_structure import Player
# from rummikub_structure import Chip
# from rummikub_structure import create_piece_stack
# from rummikub_structure import create_board
# from rummikub_structure import get_random_chip
# from rummikub_structure import get_in_the_game
# # define board, where pieces can be laid onto
# gameboard = create_board()
# # define stack of remaining pieces
# remaining_pieces = create_piece_stack()
#
# # define players
# player0 = Player(0, 'Player0', [])
# player1 = Player(1, 'Player1', [])
# player2 = Player(2, 'Player2', [])
# player3 = Player(3, 'Player3', [])
# players = [player0, player1, player2, player3]
#
# # everyone draws 14 pieces before the game starts
# for _ in range(0, 14):
#     for player in players:
#         player.draw(get_random_chip(remaining_pieces))
#
#
# for index in range(0,4):
#     for player in players:
#         print("It's the turn of " + str(player.name))
#         print(len(player.hand))
#         chip = get_random_chip(remaining_pieces)
#         print("Drawing chip " + str(chip))
#         player.draw(chip)
#         print(len(player.hand))
#         print("Laying onto board")
#         gameboard = get_in_the_game(player, gameboard)
#         print(len(player.hand))
#         # chip = get_random_chip(player.hand)
#         # print(chip)
#         # # print(player0.hand[0])
#         # player.lay_chip(chip, gameboard)
#         print([str(x) for x in gameboard])
#         # print(len(player0.hand))
#
# print("Remaining chips: " + str([len(player.hand) for player in players]))
