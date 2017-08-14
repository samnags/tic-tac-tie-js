var assert = require('assert');
var expect = require('expect.js');
var Player = require('../models/player');
var Board = require('../models/board');
var Cell = require('../models/cell');
var Game = require('../models/game');

describe('Player', () => {
  it('is created with a token', () => {
    let player = new Player('X');
    assert(player.token == 'X');
  });

  // it('can make a move', () => {
  //   let Game
  //   let player = new Player();
  //   let game = new Game();
  //   player.move();
  //   console.log(player);
  //   assert(player.token === 'X');
  // });
});
