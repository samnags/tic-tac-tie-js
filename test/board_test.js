var assert = require('assert');
var expect = require('expect.js');
var _ = require('lodash');

var Board = require('../models/board');
var Player = require('../models/player');
var Cell = require('../models/cell');
var int = require('./integrations');

describe('Board', function() {
  // describe('#new', function() {
  //   it('should be an array of nine cells', function() {
  //     let board = new Board();
  //     assert(
  //       (board.cells = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell])
  //     );
  //   });
  // });

  describe('#new', function() {
    it('should be an array of nine cells', function() {
      let board = new Board();
      assert((board = ['', '', '', '', '', '', '', '', '']));
    });
  });

  describe('#positionTaken', () => {
    it('should prevent a player from taking a filled spot', () => {
      let board = int.boardWithFirstSpotTaken;
      assert(board.positionTaken(0) == true);
    });
  });

  describe('#validMove', () => {
    it('should prevent making an invalid move', () => {
      let board = int.boardWithFirstSpotTaken;
      assert(board.validMove(10) == false);
    });
  });

  describe('#full', () => {
    it('should return true when board is full', () => {
      let board = new Board(['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']);
      assert(board.full() == true);
    });

    it('should return false when board isn not full', () => {
      let board = new Board();
      assert(board.full() == false);
    });
  });

  describe('#inputToIndex', () => {
    it('should take user input and return correct position', () => {
      let board = new Board();
      let input = 1;
      assert(board.inputToIndex(input) == 0);
    });
  });

  describe('#updateCell', () => {
    it("should update a board's cell with the provided index", () => {
      let subject = new Board();
      let player1 = new Player('X');
      let result = new Board(['', 'X', '', '', '', '', '', '', '']);
      assert(_.isEqual(subject.updateCell(player1, 1), result));
    });
  });
});
