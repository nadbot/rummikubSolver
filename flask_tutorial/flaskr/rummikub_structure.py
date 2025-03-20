# import random
# import numpy as np
#
#
# class Chip:
#     SIDE_LEFT = 0
#     SIDE_RIGHT = 1
#     """Class representing a chip in the game"""
#
#     def __init__(self, value, color):
#         self.value = value
#         self.color = color
#         self.left = None
#         self.right = None
#
#     # def get_value(self):
#     #     return self.value, self.color, self.left, self.right
#
#     def set_neighbor(self, chip, side):
#         if side == self.SIDE_LEFT:
#             self.left = chip
#             chip.right = self
#         else:
#             self.right = chip
#             chip.left = self
#
#     def __str__(self):
#         string = [str(self.value), str(self.color)]
#         if self.left:
#             string.append([self.left.value, self.left.color])
#         if self.right:
#             string.append([self.right.value, self.right.color])
#         return str(string)
#
#
# class Player:
#     """
#     Class representing each player, has list with the chips in his hand
#     """
#
#     def __init__(self, id, name, chips):
#         self.id = id
#         self.name = name
#         self.entered_game = False
#         self.hand = chips
#         self.points = 0
#         self.playable_chips = []
#
#     def draw(self, chip):
#         self.hand.append(chip)
#
#     def got_30_points(self):
#         self.entered_game = True
#
#     # def save_playable_chips(self,chip):
#     #     self.playable_chips.append(chip)
#     #     self.hand.remove(chip)
#
#     def lay_chip(self, chip, board, chip_left=None, chip_right=None):
#         #TODO fix method (currently not used, as not clear how to append to board
#         # (what if you want to place 1, 2, 3, 4 or ... chips at once?)
#         if chip_left:
#             chip.set_neighbor(chip_left, chip.SIDE_LEFT)
#         if chip_right:
#             chip.set_neighbor(chip_right, chip.SIDE_RIGHT)
#         # if not chip_left and not chip_right:
#         #     board.append(chip)
#         # self.hand.remove(chip)
#
#     def __str__(self):
#         return str([str(x) for x in self.hand])
#
#
# def create_piece_stack():
#     """
#     Creates the 106 pieces needed for Rummikub
#     :return:
#     """
#     pieces = []
#     for number in range(1, 14):
#         # print(number)
#         for color in ['red', 'blue', 'black', 'yellow']:
#             a = Chip(number, color)
#             # print(a)
#             pieces.append(a)
#             pieces.append(a)
#     pieces.append(Chip(0, "Joker"))
#     pieces.append(Chip(0, "Joker"))
#     return pieces
#
#
# def create_board():
#     return []
#
#
#
#
#
# def rules(chip1, chip2, chip3):
#     """
#     Returns the middle chip if the rules for possible rummikub moves are fulfilled :param chip1: chip 1 who will be
#     compared with the other chips :param chip2: chip 2 will be compared with chip 1 and 3 :param chip3: chip 3 will
#     be compared with chip 1 and 2 :return: The chip in the middle of the 3, if they are the same value, the first one
#     will be returned. If rule are not fulfilled, None is returned
#
#     """
#     # TODO add rule to get 30points in the start
#     # TODO add rule to have 3 pieces next to each other
#     # TODO add rule to check if only street or only colors
#     # TODO add joker rules
#     if chip1.color == chip2.color and chip1.color == chip3.color:
#         if chip1.value == chip2.value - 1:
#             if chip3.value == chip1.value - 1:  # (11,12,10)
#                 return chip3, chip1, chip2
#             elif chip3.value == chip2.value + 1:  # (11,12,13)
#                 return chip1, chip2, chip3
#         if chip1.value == chip2.value + 1:
#             if chip3.value == chip2.value - 1:  # (11,10,9)
#                 return chip3, chip2, chip1
#             if chip3.value == chip1.value + 1:  # (11,10,12)
#                 return chip2, chip1, chip3
#         if chip3.value == chip2.value + 1:
#             if chip1.value == chip3.value + 1:  # (12,10,11)
#                 return chip2, chip3, chip1
#         if chip3.value == chip2.value - 1:
#             if chip1.value == chip3.value - 1:  # (10,12,11)
#                 return chip1, chip3, chip2
#     elif chip1.value == chip2.value and chip2.value == chip3.value \
#             and chip1.color != chip2.color and chip2.color != chip3.color and chip1.color != chip3.color:
#         print(chip1,chip2,chip3)
#         return chip1, chip2, chip3
#     return None, None, None
#
#
# def apply_rules(chip, gameboard):
#     for chip_gameboard in gameboard:
#         # if chip.color == chip_gameboard.color:
#         if rules(chip, chip_gameboard):
#             print("Found match, adding chip")
#             print(chip)
#             return chip_gameboard
#     return None
#
#
# def find_tripples(hand):
#     for chip1 in hand:
#         for chip2 in hand:
#             for chip3 in hand:
#                 chip_a, chip_b, chip_c = rules(chip1, chip2, chip3)
#                 if chip_a and chip_b and chip_c:
#                     print("Found 3 chips:")
#                     chip_b.set_neighbor(chip_a, chip_b.SIDE_LEFT)
#                     chip_b.set_neighbor(chip_c, chip_b.SIDE_RIGHT)
#                     print(chip_b)
#                     return chip_a, chip_b, chip_c
#     return None, None, None
#
# #TODO find better datastructure, currently too inflexible (maybe tuples of chips?)
# def get_in_the_game(player, gameboard):
#     print("Hand of player")
#     print([str(x) for x in player.hand])
#     print("Looking for 3 of a kind...")
#     chip_a, chip_b, chip_c = find_tripples(player.hand)
#     while chip_b:
#
#         # player.save_playable_chips(chip_a)
#         player.hand.remove(chip_a)
#         player.playable_chips.append(chip_b)
#         player.hand.remove(chip_b)
#         # player.save_playable_chips(chip_c)
#         player.hand.remove(chip_c)
#         player.points += 3*chip_b.value
#         if player.points >= 30:
#             print([str(x) for x in player.playable_chips])
#             for chip in player.playable_chips:
#                 print("Appending to board: "+str(chip))
#                 gameboard.append(chip)
#                 player.playable_chips.remove(chip)
#             return gameboard
#         chip_a, chip_b, chip_c = find_tripples(player.hand)
#     # move all elements that were not used back to the hand
#     # for chip in player.playable_chips:
#     #     player.hand.append(chip)
#     #     player.playable_chips.remove(chip)
#     return gameboard
