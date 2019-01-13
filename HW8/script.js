"use strict";

let boxes = [];
let turn;

let gameBoard = document.getElementById('gameBoard');
let squares = gameBoard.getElementsByClassName('square');



const initGame = () => {
  boxes = [['', '', ''], ['', '', ''], ['', '', '']];
  turn = '';
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = "&nbsp;";
    squares[i].classList.remove('playerOne');
    squares[i].classList.remove('playerTwo');
  }
}

const click = (e) => {
  turn = turn === 'X' ? 'O' : 'X';
  let index = e.target.dataset.index.split(',');
  if(alreadyPlace(index[0],index[1], turn)){
    e.target.innerHTML = turn;

    if(turn === 'X') {
      e.target.className += ' playerOne';
    }else {
      e.target.className += ' playerTwo';
    }

    place(index[0],index[1], turn);
  }
}

const isFilled = () => {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      if(boxes[i][j] === '')
        return false;
    }
  }
  return true;
}



const alreadyPlace = (x, y, val) => {
  if(boxes[x][y] !== '')
    return false;
  return true;
}

const checkForWinner = () => {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i][0] !== '' && boxes[i][0] === boxes[i][1] && boxes[i][1] === boxes[i][2]) {
      showWinner(boxes[i][0]);
      return;
    }

    if (boxes[0][i] !== '' && boxes[0][i] === boxes[1][i] && boxes[1][i] === boxes[2][i]) {
      showWinner(boxes[0][i]);
      return;
    }

    if (boxes[0][0] !== '' && boxes[0][0] === boxes[1][1] && boxes[1][1] === boxes[2][2]) {
      showWinner(boxes[0][0]);
      return;
    }

    if (boxes[2][0] !== '' && boxes[2][0] === boxes[1][1] && boxes[1][1] === boxes[0][2]) {
      showWinner(boxes[2][0]);
      return;
    }
  }

  if(isFilled()) {
    alert("Cats game!");
    initGame();
  }
}

const showWinner = (winner) => {
  setTimeout(function(){
        alert(winner + " has won!");
        initGame();
  }, 500);
}

const place = (x, y, val) => {
  boxes[x][y] = val;
  checkForWinner();
}

for (var i = 0; i < squares.length; i++) {
  squares[i].innerHTML = "&nbsp;";
  squares[i].addEventListener('click', click);
}

initGame();
