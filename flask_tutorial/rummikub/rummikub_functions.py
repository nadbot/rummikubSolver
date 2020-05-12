import random
import networkx as nx


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


def correct_move(gameboard, streets, added_pieces):
    """
    Method to check whether the planned move is correct.
    A move is correct if all items of the gameboard are still there and only the added values are new.
    Additionally, each list must contain 3 or more items
    :param gameboard: Gameboard before the move
    :param streets: Gameboard after the move
    :param added_pieces: Pieces added during the move
    :return: True if the move is correct, otherwise False
    """
    flat_list_gameboard = [item for sublist in gameboard for item in sublist]
    flat_list_new_gameboard = [item for sublist in streets for item in sublist]
    if len(flat_list_gameboard) + len(added_pieces) != len(flat_list_new_gameboard):
        return False
    for item in flat_list_gameboard:
        if item not in flat_list_new_gameboard:
            return False
    for street in streets:
        if len(street) < 3:
            return False
    return True


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
    # print(items)

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
                # print("Found double")
                # print(element)
                # print(same_color[index_element+1])
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
            # print(possible_street)
            playable_items.append(possible_street)
            # for item in possible_street:
            #     player.hand.remove(item)
    # adds smaller substreets to the possible moves
    playable_items = find_smaller_streets(playable_items)
    # print("Possible street moves:")
    # print(playable_items)
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


def find_smaller_of_a_kind(playable_items):
    """
        Gets list of playable moves from find_3_of_a_kind and adds smaller possible moves to that list
        For (3b,3g,3r,3s) this will add (3b,3g,3r), (3b,3g,3s), ...
        :param playable_items: Possible moves, the user can do
        :return: list of possible moves, including shorter moves
        """
    # print("Finding smaller of a kind")
    for street in playable_items:
        if len(street) == 4:
            for element in street:
                # print("Removing"+str(element))
                smaller_street = street.copy()
                smaller_street.remove(element)
                # print(smaller_street)
                if smaller_street not in playable_items:
                    playable_items.append(smaller_street)
    return playable_items

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
    # print(items)
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
            # print(possible_street)
            playable_items.append(possible_street)
            # for item in possible_street:
            #     player.hand.remove(item)
    playable_items = find_smaller_of_a_kind(playable_items)
    # print("Possible 3 or more of a kind moves:")
    # print(playable_items)
    return playable_items


def find_matches(stack):
    """
    Method to merge possibilities of streets and 3 of a kind
    :param stack: Pieces that can be used for street or 3 of a kind
    :return: All possible solutions to both
    """
    # print("Length of stack:")
    # print(len(stack))
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
        # print("Items")
        # print(items)
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
    # print("Entering recursion "+str(len(playable_items)))
    # print(playable_items)
    # print(items)
    unused = unused_item(playable_items, items)
    if not unused:
        # print("Each item is used")
        pass
    else:
        # print("Item that is not used is:" + str(unused))
        return False

    items_used_several_times, streets_used_several_times = items_not_used_once(playable_items)
    # print("Items that are used more than once:")
    # print(items_used_several_times)
    # print(streets_used_several_times)
    if len(items_used_several_times) == 0:
        print("Found best solution")
        return playable_items
    # print("Items are used more than once")
    for index, street in enumerate(playable_items):
        # print("Using sublist")
        next_iteration = playable_items.copy()
        next_iteration.pop(index)
        # print(next_iteration)
        solution = get_minimum_move_recursive(next_iteration, items)
        if solution:
            return solution


def shorten_possible_moves(flat_list):
    playable_items = find_matches(flat_list)
    # print("Found the following matches:")
    # print(playable_items)
    print(len(playable_items))
    # print("Removing double moves")
    playable_items = remove_double_streets(playable_items)
    print(len(playable_items))
    print(playable_items)
    unused = unused_item(playable_items, flat_list)
    if unused:
        print("Item that is not used is:" + str(unused))
        return False
    print("Removing items which are constrained by their neighbors")
    necessary_neighbors = values_appearing_together(playable_items, flat_list)
    playable_items = remove_possibilities_violating_necessary_neighbors(playable_items, necessary_neighbors)
    print(playable_items)
    print(len(playable_items))
    return playable_items


def get_minimum_moves(flat_list, added_items, gameboard):
    """
    Method that recursively smallers list until each item is used only once
    :param streets:
    :param items:
    :return:
    """
    # # flat_list = items
    #
    # # print(flat_list)
    # playable_items = find_matches(flat_list)
    # # print("Found the following matches:")
    # # print(playable_items)
    # # print(len(playable_items))
    # # print("Removing double moves")
    # playable_items = remove_double_streets(playable_items)
    # print(len(playable_items))
    # print(playable_items)
    # unused = unused_item(playable_items, flat_list)
    # if unused:
    #     print("Item that is not used is:" + str(unused))
    #     return False
    # print("Removing items which are constrained by their neighbors")
    # necessary_neighbors = values_appearing_together(playable_items, flat_list)
    # playable_items = remove_possibilities_violating_necessary_neighbors(playable_items, necessary_neighbors)
    # print(playable_items)
    # print(len(playable_items))
    playable_items = shorten_possible_moves(flat_list)
    if playable_items:
        clusters = split_clusters(playable_items, flat_list)
        modified_cluster = find_modified_cluster(clusters, added_items)
        untouched_moves = find_unaffected_moves(gameboard, modified_cluster)
        print("Added items:")
        print(added_items)
        print("Modified clusters:")
        print(modified_cluster)
        best_solutions = untouched_moves
        for cluster in modified_cluster:
            flat_list = list(cluster)
            print("Evaluating cluster: ")
            print(flat_list)
            playable_items = shorten_possible_moves(flat_list)
            if playable_items:
                print("Checking whether each item is used")
                print(playable_items)
                print(len(playable_items))
                # TODO sometimes does not find best solution containing all elements:
                #  Previous gameboard: [[(4, 'black', 1), (4, 'blue', 0), (4, 'yellow', 1)],
                #  [(7, 'blue', 0), (7, 'red', 1), (7, 'yellow', 0)],
                #  [(8, 'blue', 1), (9, 'blue', 0), (10, 'blue', 1)], [(9, 'blue', 1), (9, 'red', 0), (9, 'yellow', 0)]]
                #  New gameboard: [[(4, 'black', 1), (4, 'blue', 0), (4, 'yellow', 1)],
                #  [(8, 'blue', 1), (9, 'blue', 0), (10, 'blue', 1)]]

                # TODO ignores double elements:
                #  Previous gameboard:
                #  [[(10, 'blue', 1), (10, 'red', 1), (10, 'yellow', 1)],
                #  [(1, 'black', 1), (2, 'black', 0), (3, 'black', 1)],
                #  [(3, 'red', 1), (4, 'red', 0), (5, 'red', 1)],
                #  [(12, 'black', 1), (12, 'blue', 1), (12, 'red', 0)],
                #  [(10, 'black', 0), (10, 'blue', 0), (10, 'red', 0)],
                #  [(4, 'red', 1), (5, 'red', 0), (6, 'red', 1)],
                #  [(11, 'blue', 0), (12, 'blue', 0), (13, 'blue', 1)]]
                #  New gameboard:
                #  [(10, 'red', 1), (10, 'blue', 1), (10, 'yellow', 1)],
                #  [(1, 'black', 1), (2, 'black', 0), (3, 'black', 1)],
                #  [(10, 'blue', 0), (10, 'black', 0), (10, 'red', 0)],
                #  [(11, 'blue', 0), (12, 'blue', 1), (13, 'blue', 1)],
                #  [(12, 'black', 1), (12, 'blue', 0), (12, 'red', 0)],
                #  [(3, 'red', 1), (4, 'red', 0), (5, 'red', 1), (6, 'red', 1), (7, 'red', 1)]]
                best_solution = get_minimum_move_recursive(playable_items, flat_list)
                if best_solution:
                    print(best_solution)
                    best_solutions = best_solutions + best_solution
                else:
                    return []
        return best_solutions
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
    # print(single_possible_moves)
    return single_possible_moves


def values_appearing_together(playable_moves, items):
    """
    Filters out values that appear together in all combinations.
    Possibilities with values that always appear with this one can be deleted if they appear with a different value
    Example:
    9g,10g,11g always appear together
    So 10g,10r,10b can be deleted
    :param playable_moves: List of possible moves
    :param items: List of elements that need to be used
    :return: dict with necessary neighbors for each element
    """
    necessary_neighbors = {}
    for item in items:
        neighbors = items.copy()
        neighbors.remove(item)
        for move in playable_moves:
            if item in move:
                for element in items:
                    if element not in move and element in neighbors:
                        neighbors.remove(element)
        necessary_neighbors[item] = neighbors
    # print(necessary_neighbors)
    return necessary_neighbors


def remove_possibilities_violating_necessary_neighbors(playable_moves, necessary_neighbors):
    """
    Checks which neighbors are necessary and removes items that violate these
    :param playable_moves: List of possible moves
    :param necessary_neighbors: Dict of necessary neighbors for each item
    :return: List of possible moves where each move respects necessary neighbors
    """
    for element in necessary_neighbors:
        if element[2] == 1:
            id = 0
        else:
            id = 1
        double_element = (element[0], element[1], id)
        for neighbor in necessary_neighbors[element]:
            for move in playable_moves:
                if neighbor in move and element not in move and double_element not in move:
                    # print("Found move to delete")
                    # print(move)
                    # print(element)
                    # print(neighbor)
                    playable_moves.remove(move)
    # print(playable_moves)
    return playable_moves


def split_clusters(playable_moves, items):
    sets = playable_moves
    # sets = [['A', 'B', 'C'], ['C', 'D', 'E'], ['F', 'G', 'H']]
    G = nx.Graph()
    for s in sets:
        l = list(s)
        G.add_edges_from(zip(l, l[1:]))
    print(list(nx.connected_components(G)))
    # print(list(list(nx.connected_components(G))[0]))
    return list(nx.connected_components(G))


def find_modified_cluster(clusters, added_items):
    """
    Method to find cluster that changed when appending an item
    :param clusters: List of clusters of chips
    :param added_items: Item(s) that were added to the board
    :return: clusters in which added item is found
    """
    changed_clusters = []
    for item in added_items:
        for cluster in clusters:
            if item in cluster and cluster not in changed_clusters:
                changed_clusters.append(cluster)
    return changed_clusters


def find_unaffected_moves(gameboard, clusters):
    """
    Method that returns the moves which have not changed because of the cluster
    :param gameboard: Gameboard with existing moves
    :param cluster: List of clusters which is affected by the added values
    :return: List of moves that are not affected by the cluster
    """
    moves = gameboard.copy()
    for cluster in clusters:
        for item in cluster:
            for move in gameboard:
                if item in move and move in moves:
                    moves.remove(move)
    return moves
    # clusters = []
    # neighbors_dict = {}
    # for item in items:
    #     neighbors = []
    #     for move in playable_moves:
    #         if item in move:
    #             for element in move:
    #                 if element not in neighbors:
    #                     neighbors.append(element)
    #     neighbors_dict[item] = neighbors_dict
    #
    # for item in neighbors_dict:
    #     cluster_item = [item]
    #

# playable = [[(6, 'black', 0), (6, 'red', 1), (6, 'yellow', 1)], [(1, 'black', 0), (1, 'blue', 1), (1, 'red', 0), (1, 'yellow', 0)], [(9, 'black', 1), (9, 'blue', 0), (9, 'red', 1), (9, 'yellow', 1)], [(9, 'yellow', 0), (9, 'black', 1), (9, 'blue', 0), (9, 'red', 1)], [(1, 'blue', 1), (1, 'red', 0), (1, 'yellow', 0)], [(1, 'black', 0), (1, 'red', 0), (1, 'yellow', 0)], [(1, 'black', 0), (1, 'blue', 1), (1, 'yellow', 0)], [(1, 'black', 0), (1, 'blue', 1), (1, 'red', 0)], [(9, 'blue', 0), (9, 'red', 1), (9, 'yellow', 1)], [(9, 'black', 1), (9, 'red', 1), (9, 'yellow', 1)], [(9, 'black', 1), (9, 'blue', 0), (9, 'yellow', 1)], [(9, 'black', 1), (9, 'blue', 0), (9, 'red', 1)], [(9, 'yellow', 0), (9, 'blue', 0), (9, 'red', 1)], [(9, 'yellow', 0), (9, 'black', 1), (9, 'red', 1)], [(9, 'yellow', 0), (9, 'black', 1), (9, 'blue', 0)], [(9, 'yellow', 1), (10, 'yellow', 0), (11, 'yellow', 1)], [(9, 'yellow', 0), (10, 'yellow', 0), (11, 'yellow', 1)]]
# items = []
# for move in playable:
#     for item in move:
#         if item not in items:
#             items.append(item)
# print(items)
# split_clusters(playable,items)
# items = [(6, 'black', 0), (6, 'red', 1), (6, 'yellow', 1), (1, 'black', 0), (1, 'blue', 1), (1, 'red', 0), (1, 'yellow', 0), (9, 'black', 1), (9, 'blue', 0), (9, 'red', 1), (9, 'yellow', 1), (9, 'yellow', 0),(10, 'yellow', 0), (11, 'yellow', 1)]


# TODO currently even without double moves, possible combinations is too large
#  for the given example there are 14^14 possible combinations
#  find way to reduce this further
#  (if one value only in one street, don't remove that one, if only in 2, don't remove one of them)
#  split possible moves in different sets, which are not related to each other


# playable = [[(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(10, 'red', 1), (10, 'blue', 0), (10, 'yellow', 0)], [(13, 'red', 1), (13, 'blue', 0), (13, 'yellow', 0)]]
# playable = [[(10, 'black', 1), (10, 'blue', 1), (10, 'red', 0), (10, 'yellow', 1)], [(10, 'blue', 1), (10, 'black', 1), (10, 'red', 0), (10, 'yellow', 1)], [(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(13, 'red', 1), (13, 'blue', 0), (13, 'yellow', 0)], [(10, 'red', 0), (10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(13, 'red', 0), (13, 'blue', 0), (13, 'yellow', 0)], [(10, 'red', 1), (10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(10, 'yellow', 1), (10, 'black', 1), (10, 'blue', 1), (10, 'red', 0)], [(13, 'yellow', 0), (13, 'blue', 0), (13, 'red', 1)], [(10, 'yellow', 0), (10, 'black', 1), (10, 'blue', 1), (10, 'red', 0)], [(3, 'red', 0), (4, 'red', 1), (5, 'red', 0), (6, 'red', 1)], [(4, 'red', 1), (5, 'red', 0), (6, 'red', 1)], [(9, 'yellow', 1), (10, 'yellow', 1), (11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(10, 'yellow', 1), (11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(10, 'yellow', 0), (11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(10, 'red', 0), (11, 'red', 0), (12, 'red', 1), (13, 'red', 1)], [(10, 'red', 1), (11, 'red', 0), (12, 'red', 1), (13, 'red', 1)], [(11, 'yellow', 1), (12, 'yellow', 1), (13, 'yellow', 0)], [(11, 'red', 0), (12, 'red', 1), (13, 'red', 1)]]
# remove_double_streets(playable)

# streets = [[(12, 'black', 0), (12, 'blue', 0), (12, 'yellow', 1)], [(9, 'black', 0), (9, 'blue', 0), (9, 'yellow', 0)], [(11, 'black', 0), (11, 'blue', 1), (11, 'red', 1)], [(13, 'black', 1), (13, 'red', 0), (13, 'yellow', 1)], [(12, 'blue', 0), (12, 'black', 0), (12, 'yellow', 1)], [(9, 'blue', 0), (9, 'black', 0), (9, 'yellow', 0)], [(11, 'blue', 1), (11, 'black', 0), (11, 'red', 1)], [(11, 'red', 1), (11, 'black', 0), (11, 'blue', 1)], [(13, 'red', 0), (13, 'black', 1), (13, 'yellow', 1)], [(12, 'yellow', 1), (12, 'black', 0), (12, 'blue', 0)], [(9, 'yellow', 0), (9, 'black', 0), (9, 'blue', 0)]]
# gameboard = [[(10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(9, 'yellow', 1), (10, 'yellow', 0), (11, 'yellow', 1), (12, 'yellow', 1)], [(3, 'red', 0), (4, 'red', 1), (5, 'red', 0), (6, 'red', 1)], [(10, 'red', 0), (11, 'red', 0), (12, 'red', 1), (13, 'red', 0)]]
# gameboard = [[(10, 'black', 1), (10, 'blue', 1), (10, 'yellow', 1)], [(13, 'blue', 0), (13, 'red', 1), (13, 'yellow', 0)], [(9, 'yellow', 1), (10, 'yellow', 0), (11, 'yellow', 1), (12, 'yellow', 1)], [(3, 'red', 0), (4, 'red', 1), (5, 'red', 0), (6, 'red', 1)]]
# items = [(2, 'black', 1), (5, 'black', 0), (3, 'black', 1), (1, 'blue', 0), (4, 'blue', 0), (13, 'blue', 0), (6, 'red', 1), (4, 'red', 0), (1, 'red', 1), (5, 'red', 0), (10, 'yellow', 0), (12, 'yellow', 1), (3, 'yellow', 1), (13, 'yellow', 0), (12, 'yellow', 0)]

# flat_list = [item for sublist in gameboard for item in sublist]
# flat_list.append((1, 'red', 1))
# print("Adding "+ str((1, 'red', 1)))
# best_move = get_minimum_moves(flat_list)
# print(best_move)

def add_to_gameboard(player, gameboard):
    """
        Method to find best possible move for player, once he is in the game
        :param player: Player whose turn it is
        :return: best move the player can do
        """
    print("Adding to gameboard")
    # TODO add possibility to add multiple items at once to the gameboard
    for first_item in player.hand:
        flat_list = [item for sublist in gameboard for item in sublist]
        flat_list.append(first_item)
        print("Adding "+ str(first_item))
        # playable_items = find_matches(flat_list)
        best_move = get_minimum_moves(flat_list, [first_item], gameboard)
        if best_move:
            print("Added "+str(first_item))
            print("Best move:")
            print(best_move)
            return best_move, [first_item]
        else:
            print("No best move found")
    return [], []
    # '''
    # Idea:
    # If at least one item is not used, continue with player.hand[1]
    # If every item is used:
    #     Check if item is used twice
    #
    # # TODO add way to add two chips to gameboard at once
    # '''
    # TODO
    # TODO recursive check
    # recursive_get_minimum_moves(playable_items, flat_list)
    # flat_list_playable_items = [item for sublist in playable_items for item in sublist]

    # print("Possible moves")
    # print(playable_items)

    # flat_list = [item for sublist in gameboard for item in sublist]
    # flat_list.append((1, 'red', 1))
    # print("Adding " + str((1, 'red', 1)))
    # best_move = get_minimum_moves(flat_list)
    # print(best_move)

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
    added = []
    modified_gameboard = False
    # TODO once in the game, continue playing until no possible move
    if not player.entered_game:
        street = get_in_the_game(player)
        if street:
            player.entered_game = True
    else:
        street, added = add_to_gameboard(player, gameboard)
        modified_gameboard = True
    return street, modified_gameboard, added
