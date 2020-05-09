import random


def create_piece_stack():
    """
    Creates the 106 pieces needed for Rummikub
    :return:
    """
    pieces = []
    for number in range(1, 14):
        # print(number)
        for color in ['red', 'blue', 'black', 'yellow']:
            a = (number, color)
            # print(a)
            pieces.append(a)
            pieces.append(a)
    pieces.append((0, "Joker"))
    pieces.append((0, "Joker"))
    return pieces


def get_random_chip(piece_stack):
    number = int((random.random() * len(piece_stack)))
    chip = piece_stack[number]
    piece_stack.remove(chip)
    return chip


# TODO for 1,2,3,4 it returns only 2,3,4
def find_streets(stack):
    playable_items = []
    # sort by the number
    items = sorted(stack, key=lambda x: x[0])
    print(items)
    for index in range(0, len(items)-1):
        element = items[index]
        # get only the ones of the same color as element
        same_color = [item for item in items if item[1] == element[1]]
        possible_street = [element]
        while True:
            # print(same_color)
            index_element = same_color.index(element)
            if len(same_color) == index_element+1:
                break
            # TODO fix if chip is double (it will stop, as next item has same number and color
            # test if the number of the next item is one bigger and color is the same
            if same_color[index_element+1][0] == element[0]+1 and same_color[index_element+1][1] == element[1]:
                # print(same_color[index_element+1])
                possible_street.append(same_color[index_element+1])
                element = same_color[index_element+1]
            else:
                break
        if len(possible_street) > 2:
            print(possible_street)
            playable_items.append(possible_street)
            # for item in possible_street:
            #     player.hand.remove(item)
    print(playable_items)
    return playable_items


def color_in_list(chip,items):
    """
    Function to check whether the same color already exists in a list
    :param chip: Item whose color will be checked
    :param items: List of elements already in streak
    :return: True if color already exists, False otherwise
    """
    for item in items:
        if item[1] == chip[1]:
            return True
    return False

def find_3_of_a_kind(stack):
    playable_items = []
    # sort by the number
    items = sorted(stack, key=lambda x: x[1])
    print(items)
    for index in range(0, len(items) - 1):
        element = items[index]
        # get only the ones of the same number as element
        same_number = [item for item in items if item[0] == element[0]]
        possible_street = [element]
        # loop through all items with the same number and append only the ones that don't exist yet
        for item in same_number:
            if not color_in_list(item, possible_street):
                possible_street.append(item)
        if len(possible_street) > 2:
            print(possible_street)
            playable_items.append(possible_street)
            # for item in possible_street:
            #     player.hand.remove(item)
    print(playable_items)
    return playable_items


def find_matches(stack):
    return find_3_of_a_kind(stack) + find_streets(stack)
    # return find_streets(stack)


def calculate_points_for_street(street):
    """
    Calculates the points for a given street
    :param street: List of chips, that can be placed
    :return: int with points for street
    """
    points = 0
    for chip in street:
        # print(chip[0])
        points += chip[0]
    return points


def street_not_in_use(street, items):
    """
    Check if elements of street are not in use already.
    For example [[(2, 'black'), (3, 'black'), (4, 'black'),(5, 'black)],[(3, 'black'), (4, 'black'), (5, 'black')]]
    would return false, because 3, 4 and 5 are already used
    :param street: List of elements that will be checked
    :param items: list of items that are already planned to be played (here 2,3,4,5)
    :return: True if new street can be played as well, otherwise false
    """
    #TODO add case for double chips (if having two black 5 in hand)
    for element in street:
        if element in items:
            return False
    return True


def add_street_to_items(street, items):
    """
    Adding each element of a list to another list
    :param street: List of elements to be added
    :param items: List where elements will be added to
    :return: list with all elements
    """
    for item in street:
        items.append(item)
    return items


def get_in_the_game(player):
    playable_items = find_matches(player.hand)
    # TODO find smartest way to choose items (don't play one street which destroys 2 other)
    # TODO allow to use several streets to get out
    # TODO does not find the same street twice if it didnt work the first time
    possible_options = []
    possible_options_points = []
    for start_street in playable_items:
        total_points = calculate_points_for_street(start_street)
        streets = [start_street]
        items = []
        items = add_street_to_items(start_street, items)
        print("Items")
        print(items)
        for street in playable_items:
            points = calculate_points_for_street(street)
            can_be_added = street_not_in_use(street, items)
            if can_be_added:
                streets.append(street)
                total_points += points
                items = add_street_to_items(street, items)
        possible_options.append(streets)
        possible_options_points.append(total_points)
    if len(possible_options_points) > 0:
        max_points = max(possible_options_points)
        best_move = possible_options[possible_options_points.index(max_points)]
        print("Found best move")
        print(best_move)
        print(max_points)
        if max_points >= 30:
            print("Able to go out")
            return best_move

    return []
