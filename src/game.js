import { Ship, Gameboard, Player, Game } from './battleship.js';
import { designBoards, updateOpponentBoard, updatePlayerBoard, designStartScreen } from './dom.js'
import './style.css';

function startGame(){
    /*
    const boardOne = new Gameboard();
    const boardTwo = new Gameboard();
    boardOne.placeShip(new Ship(3),[1,1],'right');
    boardOne.placeShip(new Ship(2),[6,5],'up');
    boardTwo.placeShip(new Ship(3),[8,9],'left');
    boardTwo.placeShip(new Ship(2),[3,3],'down');
    boardOne.receiveAttack([3,3]);
    boardOne.receiveAttack([1,2]);
    boardTwo.receiveAttack([1,2]);
    boardTwo.receiveAttack([3,3]);
    let playerOne = new Player(boardOne);
    let playerTwo = new Player(boardTwo, playerOne);
    designBoards(playerOne);
    */
    // window.playerToMove = playerOne;

    // while (!playerOne.board.allShipsSunk() || !playerTwo.board.allShipsSunk()){

    // }
}

designStartScreen();


// startGame()