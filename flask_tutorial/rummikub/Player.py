class Player:
    """
    Class representing each player, has list with the chips in his hand
    """

    def __init__(self, id, name, chips):
        self.id = id
        self.name = name
        self.entered_game = False
        self.hand = chips
        self.points = 0

    def draw(self, chip):
        self.hand.append(chip)

    # def save_playable_chips(self,chip):
    #     self.playable_chips.append(chip)
    #     self.hand.remove(chip)

    def lay_chips(self, streets, board):
        for street in streets:
            board.append(street)
            for chip in street:
                self.hand.remove(chip)

    def remove_chips(self, added_chips):
        for chip in added_chips:
            self.hand.remove(chip)

    def __str__(self):
        return str([str(x) for x in self.hand])