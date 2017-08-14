var assert = require('assert');
var _ = require('lodash');
var Game = require('../models/game');

describe('Game', () => {
  it('asks a player to choose a token', () => {
    let game = new Game();
    game.start;
  });

  describe('#over', () => {
    it('checks to see if a game is over', () => {
      let game = new Game();
      game.turns = 9;
      assert(game.over() == true);
    });
  });

  describe('#won', () => {
    it('checks if there is a winner', () => {
      let game = new Game();
      game.board.cells = ['X', 'X', 'X', 'O', 'X', 'O', 'X', '', ''];
      assert(_.isEqual(game.won(), [0, 1, 2]));
    });
  });

  describe('#winner', () => {
    it('should return the winning player', () => {
      let game = new Game();
      game.board.cells = ['X', 'X', 'X', 'O', 'X', 'O', 'X', '', ''];
      assert(game.winner() == 'X');
    });
  });

  describe('#draw', () => {
    it('should return true if there is a draw', () => {
      let game = new Game();
      game.board.cells = ['O', 'X', 'O', 'O', 'X', 'O', 'X', 'O', 'X'];
      game.turns = 9;
      assert(game.draw() == true);
    });
  });
});
