var Board = require('./board');

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
    return this.winCombos.find(isAMatch);

    function isAMatch(combo) {
      return (
        board.cells[combo[0]] == board.cells[combo[1]] &&
        board.cells[combo[1]] == board.cells[combo[2]] &&
        board.positionTaken(board.cells[combo[0]])
      );
    }
  }

  winner() {
    var winningArray = this.won();
    if (winningArray) {
      return this.board.cells[winningArray[0]];
    }
  }

  draw() {
    return this.over() && !this.won();
  }

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
