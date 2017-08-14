(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Board = require('./models/Board.js');
var Game = require('./models/Game.js');
var Player = require('./models/Player.js');

},{"./models/Board.js":2,"./models/Game.js":3,"./models/Player.js":4}],2:[function(require,module,exports){
// var Cell = require('./cell');

class Board {
  constructor(cells = ['', '', '', '', '', '', '', '', '']) {
    this.cells = cells;
  }

  positionTaken(pos) {
    return this.cells[pos] == '' ? false : true;
  }

  validMove(pos) {
    return pos >= 0 && pos < 9;
  }

  full() {
    return this.cells.every(cell => cell !== '');
  }

  inputToIndex(input) {
    return input - 1;
  }

  updateCell(player, input) {
    this.cells[input] = player.token;
    return this;
  }
  displayBoard() {
    let cells = this.cells;
    console.log(`  ${cells[0]}  |  ${cells[1]}  |  ${cells[2]}`);
    console.log(`--------------`);
    console.log(`  ${cells[3]}  |  ${cells[4]}  |  ${cells[5]}`);
    console.log(`--------------`);
    console.log(`  ${cells[6]}  |  ${cells[7]}  |  ${cells[8]}`);
  }
}

module.exports = Board;

},{}],3:[function(require,module,exports){
// var Board = require('./board');

class Game {
  constructor() {
    this.turns = 0;
    this.board = new Board();
    this.winCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  // start() {
  //   prompt.start();
  //   prompt.get(['Pick a token'], (err, result) => {
  //     console.log(result);
  //   });
  // }

  over() {
    return this.turns == 9 ? true : false;
  }

  won() {
    var board = this.board;
    var test = this.winCombos.find(isAMatch);

    function isAMatch(combo) {
      return (
        board.cells[combo[0]] == board.cells[combo[1]] &&
        board.cells[combo[1]] == board.cells[combo[2]]
      );
    }
    console.log(test);
    return test;
  }

  //draw?
  //winner?
  //turn
  //play
}

// Game.prototype.winCombos = function() {
//   return [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
// };

module.exports = Game;

},{}],4:[function(require,module,exports){
// var prompt = require('prompt');

class Player {
  constructor(token) {
    this.token = token;
  }

  // setToken() {
  //   prompt.start();
  //   prompt.get('piece', (err, result) => {
  //     this.token = result.piece;
  //   });
  // }

  // getMove;
}

module.exports = Player;

},{}]},{},[1]);
