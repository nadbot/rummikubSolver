from Agent import DQNAgent
from keras.utils import to_categorical
from flask_tutorial.rummikub import rummikub
from flask_tutorial.rummikub.Player import Player
from flask_tutorial.rummikub import rummikub_functions as rf
import numpy as np
import copy
import random
import statistics

def define_parameters():
    params = dict()
    # Neural Network
    params['epsilon_decay_linear'] = 1/75
    params['learning_rate'] = 0.0005
    params['first_layer_size'] = 50   # neurons in the first layer
    params['second_layer_size'] = 300   # neurons in the second layer
    params['third_layer_size'] = 50    # neurons in the third layer
    params['episodes'] = 150
    params['memory_size'] = 2500
    params['batch_size'] = 1000
    # Settings
    params['weights_path'] = 'weights/weights3.hdf5'
    params['load_weights'] = False
    params['train'] = True
    params['plot_score'] = True
    return params


params = define_parameters()


class Game:
    def __init__(self):
        self.player = Player(0, 'Player_test', [(4, 'black', 0), (6, 'yellow', 0)])
        self.player.entered_game = True
        # self.piece_stack = rf.create_piece_stack()
        self.piece_stack = [(4, 'yellow', 0), (4, 'blue', 0), (5, 'yellow', 0), (6, 'blue', 0), (7, 'yellow', 0)]

        self.gameboard = [[(1, 'red', 0), (2, 'red', 0), (3, 'red', 0)],
                     [(1, 'black', 0), (2, 'black', 0), (3, 'black', 0)],
                     [(1, 'blue', 0), (2, 'blue', 0), (3, 'blue', 0)],
                     [(1, 'yellow', 0), (2, 'yellow', 0), (3, 'yellow', 1)]]
        self.player.draw(self.piece_stack.pop(0))
        self.done = False
        self.crash = False
        self.score = 0

    # def do_move(self, hand, new_hand, gameboard, new_gameboard):
    #     # new_gameboard, new_hand = self.random_move(self.gameboard, self.player.hand)
    #     # print(new_hand)
    #     correct, points_played = rummikub.check_move(hand, new_hand, gameboard, new_gameboard)
    #     self.points = 0
    #     if correct:
    #         # update hand, gameboard, draw new chip
    #         self.player.hand = new_hand
    #         self.gameboard = new_gameboard
    #         self.points = points_played
    #         if len(self.player.hand) == 0:
    #             self.done = True
    #     self.player.draw(self.piece_stack.pop(0))
    #
    #     return correct, points_played

    def random_move(self, gameboard, hand):
        new_gameboard = copy.deepcopy(gameboard)
        # only append item to one of the streets
        random_street = random.randrange(0, len(new_gameboard))
        # add +1 to be able to append it at the end
        random_pos = random.randrange(0, len(new_gameboard[random_street]) + 1)
        random_item = random.randrange(0, len(hand))

        new_gameboard[random_street].insert(random_pos, hand[random_item])
        new_hand = hand.copy()
        new_hand.remove(new_hand[random_item])

        print(new_gameboard)

        return new_gameboard, new_hand


# def initialize_game(player, game, food, agent, batch_size):
#     state_init1 = agent.get_state(game, player, food)  # [0 0 0 0 0 0 0 0 0 1 0 0 0 1 0 0]
#     action = [1, 0, 0]
#     player.do_move(action, player.x, player.y, game, food, agent)
#     state_init2 = agent.get_state(game, player, food)
#     reward1 = agent.set_reward(player, game.crash)
#     agent.remember(state_init1, action, reward1, state_init2, game.crash)
#     agent.replay_new(agent.memory, batch_size)


def get_mean_stdev(array):
    return statistics.mean(array), statistics.stdev(array)


def test(display_option, speed, params):
    params['load_weights'] = True
    params['train'] = False
    score, mean, stdev = run()
    return score, mean, stdev


def run():
    agent = DQNAgent(params)
    weights_filepath = params['weights_path']
    if params['load_weights']:
        agent.model.load_weights(weights_filepath)
        print("weights loaded")
    counter_games = 0
    score_plot = []
    counter_plot = []
    record = 0
    total_score = 0
    while counter_games < params['episodes']:
        # Initialize classes
        game = Game()
        player1 = game.player

        # Perform first move
        # initialize_game(player1, game, agent, params['batch_size'])
        # if display_option:
        #     display(player1, food1, game, record)

        while not game.done and not game.crash:
            if not params['train']:
                agent.epsilon = 0.00
            else:
                # agent.epsilon is set to give randomness to actions
                agent.epsilon = 1 - (counter_games * params['epsilon_decay_linear'])

            # get old state
            # state_old = agent.get_state(game, player1, )

            # # perform random actions based on agent.epsilon, or choose the action
            # if random.uniform(0, 1) < agent.epsilon:
            #     final_move = to_categorical(random.randint(0, 2), num_classes=3)
            # else:
                # predict action based on the old state
                # prediction = agent.model.predict(state_old.reshape((1, 11)))
                # final_move = to_categorical(np.argmax(prediction[0]), num_classes=3)

            new_gameboard = copy.deepcopy(game.gameboard)
            # TODO use model prediction:
            #  need to create state of game and predict where to put given chip
            # prediction = agent.model.predict(state_old.reshape((1, 11)))
            # final_move = to_categorical(np.argmax(prediction[0]), num_classes=3)

            # only append item to one of the streets
            # TODO add +1 to range to create new street
            # TODO shuffle streets around
            random_street = random.randrange(0, len(new_gameboard))
            # add +1 to be able to append it at the end
            random_pos = random.randrange(0, len(new_gameboard[random_street]) + 1)
            random_item = random.randrange(0, len(player1.hand))

            new_gameboard[random_street].insert(random_pos, player1.hand[random_item])
            new_hand = player1.hand.copy()
            new_hand.remove(new_hand[random_item])

            # print(new_gameboard)



            # perform new move and get new state
            # correct, points_played = game.do_move(player1.hand, new_hand, game.gameboard, new_gameboard)
            # state_new = agent.get_state(game, player1, food1)
            correct, points_played = rummikub.check_move(player1.hand, new_hand, game.gameboard, new_gameboard)
            if correct:
                # update hand, gameboard, draw new chip
                player1.hand = new_hand
                game.gameboard = new_gameboard
                if len(player1.hand) == 0:
                    game.done = True
                # TODO only draw when move finished (can place multiple items in one move)
                if len(game.piece_stack) == 0:
                    game.crash = True
                else:
                    player1.draw(game.piece_stack.pop(0))
            # set reward for the new state
            reward = agent.set_reward(correct, points_played, game.done, game.crash)
            if correct:
                print("Received reward: ", str(reward))
                print(game.gameboard)
                print(player1.hand)
            game.score += reward
            # if params['train']:
                # train short memory base on the new action and state
                # agent.train_short_memory(state_old, final_move, reward, state_new, game.crash)
                # # store the new data into a long term memory
                # agent.remember(state_old, final_move, reward, state_new, game.crash)

            # record = get_record(game.score, record)
            # if display_option:
            #     display(player1, food1, game, record)
            #     pygame.time.wait(speed)
        if params['train']:
            agent.replay_new(agent.memory, params['batch_size'])
        counter_games += 1
        total_score += game.score
        print(f'Game {counter_games}      Score: {game.score}')
        score_plot.append(game.score)
        counter_plot.append(counter_games)
    mean, stdev = get_mean_stdev(score_plot)
    if params['train']:
        agent.model.save_weights(params['weights_path'])
        # total_score, mean, stdev = test(display_option, speed, params)
    # if params['plot_score']:
    #     plot_seaborn(counter_plot, score_plot, params['train'])
    print('Total score: {}   Mean: {}   Std dev:   {}'.format(total_score, mean, stdev))
    return total_score, mean, stdev


if __name__ == '__main__':
    # Set options to activate or deactivate the game view, and its speed
    # pygame.font.init()
    # parser = argparse.ArgumentParser()
    # params = define_parameters()
    # parser.add_argument("--display", type=bool, default=False)
    # parser.add_argument("--speed", type=int, default=50)
    # args = parser.parse_args()
    params['bayesian_optimization'] = False    # Use bayesOpt.py for Bayesian Optimization
    # run(args.display, args.speed, params)
    run()
