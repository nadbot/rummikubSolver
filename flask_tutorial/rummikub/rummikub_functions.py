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
            # add 0 or 1 as 3rd element to distinguish between doubles
            a = (number, color, 0)
            b = (number, color, 1)
            # print(a)
            pieces.append(a)
            pieces.append(b)
    pieces.append((0, "Joker", 0))
    pieces.append((0, "Joker", 1))
    return pieces


def get_random_chip(piece_stack):
    """
    Method to get a random chip from a given stack
    :param piece_stack: List of pieces
    :return: random tuple representing chip
    """
    number = int((random.random() * len(piece_stack)))
    chip = piece_stack[number]
    piece_stack.remove(chip)
    return chip


def find_smaller_streets(playable_items):
    """
    Gets list of playable moves from find_streets and adds smaller possible streets to that list
    For (3,4,5,6,7) this will add (3,4,5,6), (3,4,5), (4,5,6). The rest is already covered
    :param playable_items: Possible moves, the user can do
    :return: list of possible moves, including shorter streets
    """
    # print("Finding smaller streets")
    # print(streets)
    for street in playable_items:
        smaller_street = street[:-1]
        if len(smaller_street) >= 3:
            if smaller_street not in playable_items:
                playable_items.append(smaller_street)
    return playable_items


# TODO for 1,2,3,4 it returns only 2,3,4
# TODO add tests for different scenarios
# TODO add joker
# TODO runs endless at some point in the game (probably if too many possibilities)
def find_streets(stack):
    """
    Method to find street. Sorts list by number and filters by color, then checks if next elements are ascending
    :param stack: Pieces that can be checked for street
    :return: all possible turns
    """
    playable_items = []
    # sort by the number
    items = sorted(stack, key=lambda x: x[0])
    print(items)

    for index in range(0, len(items)-1):
        element = items[index]
        # get only the ones of the same color as element
        same_color = [item for item in items if item[1] == element[1]]
        possible_street = [element]
        index = 0
        while True:
            # print(element)
            # print(items)
            # print("Length of items in stack:" + str(len(items)))
            # index +=1
            # if index == 100:
            #     return []
            # print(same_color)
            index_element = same_color.index(element)
            if len(same_color) == index_element+1:
                break
            # Ignore if it is the same item twice (for example two black 7s)
            if same_color[index_element+1][0] == element[0] and same_color[index_element+1][1] == element[1]:
                print("Found double")
                print(element)
                print(same_color[index_element+1])
                element = same_color[index_element + 1]
                continue
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
    # adds smaller substreets to the possible moves
    playable_items = find_smaller_streets(playable_items)
    print("Possible street moves:")
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
    """
    Method to find 3 or more of the same value.
    Loops through the list and filters for each value. Then checks if there are 3 or more with different colors
    :param stack: Pieces that can be used for 3 of a kind
    :return: all possible moves
    """
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
    print("Possible 3 of a kind moves:")
    print(playable_items)
    return playable_items


def find_matches(stack):
    """
    Method to merge possibilities of streets and 3 of a kind
    :param stack: Pieces that can be used for street or 3 of a kind
    :return: All possible solutions to both
    """
    print("Length of stack:")
    print(len(stack))
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
    """
    Method to define whether a person can enter the game (has 30 points he can play)
    :param player: Player whose turn it is
    :return: best move the player can do to get in the game
    """
    playable_items = find_matches(player.hand)
    # TODO sometimes does not find the same street twice if it didnt work the first time
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


def item_in_streets(streets, item):
    for street in streets:
        if item in street:
            return True
    return False


def unused_item(streets, items):
    """
    Find item that is not used in list of possible moves.
    If one item is not used, the list of streets is not working
    :param streets: List of streets containing all possible moves
    :param items: List of items that need to be used
    :return: Item that is not used in the possible moves
    """
    for item in items:
        if not item_in_streets(streets, item):
            return item
    return None


def items_not_used_once(streets):
    """
    Tests whether each item from items is used once in the streets.
    :param streets: List of streets that are observed
    :return: Items and streets with items that are used more than once
    """
    used_items = []
    used_several_times = []
    used_several_times_street = []
    for street in streets:
        for item in street:
            if item not in used_items:
                used_items.append(item)
            else:
                # if item not in used_several_times:
                used_several_times.append(item)
                used_several_times_street.append(street)
    return used_several_times, used_several_times_street


def get_minimum_move_recursive(playable_items, items):
    print("Entering recursion"+str(len(playable_items)))
    print(playable_items)
    print(items)
    unused = unused_item(playable_items, items)
    if not unused:
        print("Each item is used")
    else:
        print("Item that is not used is:" + str(unused))
        return False

    items_used_several_times, streets_used_several_times = items_not_used_once(playable_items)
    # print("Items that are used more than once:")
    # print(items_used_several_times)
    # print(streets_used_several_times)
    if len(items_used_several_times) == 0:
        print("Found best solution")
        return playable_items
    print("Items are used more than once")
    for index, street in enumerate(playable_items):
        print("Using sublist")
        next_iteration = playable_items.copy()
        next_iteration.pop(index)
        print(next_iteration)
        solution = get_minimum_move_recursive(next_iteration, items)
        if solution:
            return solution

def get_minimum_moves(flat_list):
    """
    Method that recursively smallers list until each item is used only once
    :param streets:
    :param items:
    :return:
    """
    # flat_list = items
    # flat_list.append((12, 'red', 1))
    print(flat_list)
    playable_items = find_matches(flat_list)
    print("Found the following matches:")
    print(playable_items)
    print(len(playable_items))
    print("Removing double moves")
    playable_items = remove_double_streets(playable_items)
    print(len(playable_items))
    print("Checking whether each item is used")
    # best_solution = get_minimum_move_recursive(playable_items, flat_list)
    # print(best_solution)

    # check whether each item is used:
    # unused = unused_item(playable_items, flat_list)
    # if not unused:
    #     print("Each item is used")
    # else:
    #     print("Item that is not used is:" + str(unused))
    #
    #
    # items_used_several_times, streets_used_several_times = items_not_used_once(playable_items)
    # print("Items that are used more than once:")
    # print(items_used_several_times)
    # print(streets_used_several_times)
    # print(len(streets))


def equal_lists(list1, list2):
    list1 = sorted(list1, key=lambda x: x[1])
    list2 = sorted(list2, key=lambda x: x[1])
    if len(list1) != len(list2):
        return False
    unequal = [i for i, j in zip(list1, list2) if i[0] != j[0] or i[1] != j[1] or i[2] != j[2]]
    # print(unequal)
    if len(unequal) == 0:
        return True
    return False


def list_in_lists(street, possible_moves):
    """
    Method that checks whether a list is already in a list of moves
    :param street: List with move that is tested
    :param possible_moves: List of lists with possible moves
    :return: True if list is already in the possible moves
    """
    for street2 in possible_moves:
        if equal_lists(street, street2):
            return True
    return False


def remove_double_streets(playable_moves):
    single_possible_moves = [playable_moves[0]]
    # print(single_possible_moves)
    for street in playable_moves:
        if not list_in_lists(street, single_possible_moves):
            single_possible_moves.append(street)
    print(single_possible_moves)
    return single_possible_moves

# playable = [[(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(10, 'red', 1), (10, 'blue', 0), (10, 'yellow', 0)], [(13, 'red', 1), (13, 'blue', 0), (13, 'yellow', 0)]]
# playable = [[(10, 'black', 1), (10, 'blue', 1), (10, 'red', 0), (10, 'yellow', 1)], [(10, 'blue', 1), (10, 'black', 1), (10, 'red', 0), (10, 'yellow', 1)], [(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(13, 'red', 1), (13, 'blue', 0), (13, 'yellow', 0)], [(10, 'red', 0), (10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(13, 'red', 0), (13, 'blue', 0), (13, 'yellow', 0)], [(10, 'red', 1), (10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(10, 'yellow', 1), (10, 'black', 1), (10, 'blue', 1), (10, 'red', 0)], [(13, 'yellow', 0), (13, 'blue', 0), (13, 'red', 1)], [(10, 'yellow', 0), (10, 'black', 1), (10, 'blue', 1), (10, 'red', 0)], [(3, 'red', 0), (4, 'red', 1), (5, 'red', 0), (6, 'red', 1)], [(4, 'red', 1), (5, 'red', 0), (6, 'red', 1)], [(9, 'yellow', 1), (10, 'yellow', 1), (11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(10, 'yellow', 1), (11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(10, 'yellow', 0), (11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(10, 'red', 0), (11, 'red', 0), (12, 'red', 1), (13, 'red', 1)], [(10, 'red', 1), (11, 'red', 0), (12, 'red', 1), (13, 'red', 1)], [(11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(11, 'red', 0), (12, 'red', 1), (13, 'red', 1)]]
# remove_double_streets(playable)

# streets = [[(12, 'black', 0), (12, 'blue', 0), (12, 'yellow', 1)], [(9, 'black', 0), (9, 'blue', 0), (9, 'yellow', 0)], [(11, 'black', 0), (11, 'blue', 1), (11, 'red', 1)], [(13, 'black', 1), (13, 'red', 0), (13, 'yellow', 1)], [(12, 'blue', 0), (12, 'black', 0), (12, 'yellow', 1)], [(9, 'blue', 0), (9, 'black', 0), (9, 'yellow', 0)], [(11, 'blue', 1), (11, 'black', 0), (11, 'red', 1)], [(11, 'red', 1), (11, 'black', 0), (11, 'blue', 1)], [(13, 'red', 0), (13, 'black', 1), (13, 'yellow', 1)], [(12, 'yellow', 1), (12, 'black', 0), (12, 'blue', 0)], [(9, 'yellow', 0), (9, 'black', 0), (9, 'blue', 0)]]
# gameboard = [[(10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(9, 'yellow', 1), (10, 'yellow', 0), (11, 'yellow', 1), (12, 'yellow', 1)], [(3, 'red', 0), (4, 'red', 1), (5, 'red', 0), (6, 'red', 1)], [(10, 'red', 0), (11, 'red', 0), (12, 'red', 1), (13, 'red', 0)]]
gameboard = [[(10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(9, 'yellow', 1), (10, 'yellow', 0), (11, 'yellow', 1), (12, 'yellow', 1)], [(3, 'red', 0), (4, 'red', 1), (5, 'red', 0), (6, 'red', 1)]]
# items = [(2, 'black', 1), (5, 'black', 0), (3, 'black', 1), (1, 'blue', 0), (4, 'blue', 0), (13, 'blue', 0), (6, 'red', 1), (4, 'red', 0), (1, 'red', 1), (5, 'red', 0), (10, 'yellow', 0), (12, 'yellow', 1), (3, 'yellow', 1), (13, 'yellow', 0), (12, 'yellow', 0)]

flat_list = [item for sublist in gameboard for item in sublist]
flat_list.append((10, 'red', 1))
print("Adding "+ str((10, 'red', 1)))
get_minimum_moves(flat_list)

def add_to_gameboard(player, gameboard):
    """
        Method to find best possible move for player, once he is in the game
        :param player: Player whose turn it is
        :return: best move the player can do
        """
    print("Adding to gameboard")
    first_item = player.hand[0]
    flat_list = [item for sublist in gameboard for item in sublist]
    flat_list.append(first_item)
    print("Adding "+ str(first_item))
    playable_items = find_matches(flat_list)

    '''
    Idea:
    If at least one item is not used, continue with player.hand[1]
    If every item is used: 
        Check if item is used twice
    
    # TODO add way to add two chips to gameboard at once
    '''
    # TODO
    # TODO recursive check
    # recursive_get_minimum_moves(playable_items, flat_list)
    # flat_list_playable_items = [item for sublist in playable_items for item in sublist]

    print("Possible moves")
    print(playable_items)

    # gameboard = playable_items
    # return playable_items
    # # TODO sometimes does not find the same street twice if it didnt work the first time
    # possible_options = []
    # possible_options_points = []
    # for start_street in playable_items:
    #     total_points = calculate_points_for_street(start_street)
    #     streets = [start_street]
    #     items = []
    #     items = add_street_to_items(start_street, items)
    #     print("Items")
    #     print(items)
    #     for street in playable_items:
    #         points = calculate_points_for_street(street)
    #         can_be_added = street_not_in_use(street, items)
    #         if can_be_added:
    #             streets.append(street)
    #             total_points += points
    #             items = add_street_to_items(street, items)
    #     possible_options.append(streets)
    #     possible_options_points.append(total_points)
    # if len(possible_options_points) > 0:
    #     max_points = max(possible_options_points)
    #     best_move = possible_options[possible_options_points.index(max_points)]
    #     print("Found best move")
    #     print(best_move)
    #     print(max_points)
    #     if max_points >= 30:
    #         print("Able to go out")
    #         return best_move
    # return []


def move(player, gameboard):
    """
    Method to create move for player. Distinguishes whether the player is in the game or not
    :param player:
    :return:
    """
    street = []
    if not player.entered_game:
        street = get_in_the_game(player)
        if street:
            player.entered_game = True
    # else:
        # street = add_to_gameboard(player, gameboard)
    return street