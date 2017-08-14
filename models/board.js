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
