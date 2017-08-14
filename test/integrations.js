var assert = require('assert');
var Board = require('../models/board');
var Game = require('../models/game');
var Player = require('../models/player');

var player1 = new Player('X');
var player2 = new Player('Y');
var game = new Game();
var board = new Board();

board.cells[0] = 'X';
boardWithFirstSpotTaken = board;

module.exports = {
  boardWithFirstSpotTaken
  // testBoard
};
