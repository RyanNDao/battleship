/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(length, numHits){
        this.length = length;
        this.numHits = numHits ? numHits : 0;
        this.hitTiles = []
    }

    hit = ()=> {
        this.numHits += 1;
    }

    get sunk(){
        return this.numHits >= this.length ? true : false;
    }

    get tileIcon(){
        return this.icon ? this.icon : 'O';
    }

    set tileIcon(newIcon){
        this.icon = newIcon;
    }

    toString(){
        return this.tileIcon;
    }
}

class Gameboard {
    constructor(){
        this.tiles = this.#createTiles();
        this.shotTiles = [];
        this.shipsList = [];
    }

    #createTiles = ()=>{
        let tiles = []
        for (let i=0; i<10;i++){
            let tileRow = []
            for (let j=0; j<10; j++){
                tileRow.push('.')
            }
            tiles.push(tileRow)
        }
        return tiles
    }

    #shipPlacementOutOfBounds = (ship, coords, direction) => {
        if (direction.toLowerCase() === 'right'){
            if (coords[1] + (ship.length-1) >= 10){
                return true
            }
        }
        if (direction.toLowerCase() === 'left'){
            if (coords[1] - (ship.length-1) < 0){
                return true
            }
        }
        if (direction.toLowerCase() === 'up'){
            if (coords[0] - (ship.length-1) < 0){
                return true
            }
        }
        if (direction.toLowerCase() === 'down'){
            if (coords[0] + (ship.length-1) >= 10){
                return true
            }
        }
        return false
    }

    #intersectsAnotherShip = (ship, coords, direction) => {
        for (let i=0; i<ship.length; i++){
            if (direction.toLowerCase() === 'right' || direction.toLowerCase() === 'left'){
                let movement = (direction.toLowerCase() === 'right') ? i : -i 
                if (this.tiles[coords[0]][coords[1]+movement] instanceof Ship){
                    return true
                };
            } else if (direction.toLowerCase() === 'up' || direction.toLowerCase() === 'down'){
                let movement = (direction.toLowerCase() === 'down') ? i : -i 
                if (this.tiles[coords[0]+movement][coords[1]] instanceof Ship){
                    return true
                }
            }
        }
        return false
    }

    placeShip = (ship, coords, direction) => {
        if ( !(direction) || !(coords) || !(ship)){
            throw Error('Missing parameters. Pass in ship object, coordinates, and a direction!');
        }
        if (!coords.map((axis)=>{return (axis < 10 && axis >= 0)}).filter((shipValid)=>{!shipValid})){
            throw Error('Ship can\'t be placed out of bounds!');
        }
        if (this.#shipPlacementOutOfBounds(ship, coords, direction)){
            console.warn('Part of ship is out of bounds!')
            return 'Part of ship is out of bounds!';
        }

        if (this.#intersectsAnotherShip(ship, coords, direction)){
            console.warn('Ship cannot be placed on another ship!')
            return 'Ship cannot be placed on another ship!';
        }
        if (this.shipsList.length >= 7){
            console.warn('Too many ships! Maximum of 7 ships can be placed!')
            return 'Too many ships! Maximum of 7 ships can be placed!';
        }
        
        for (let i=0; i<ship.length; i++){
            if (direction.toLowerCase() === 'right' || direction.toLowerCase() === 'left'){
                let movement = (direction.toLowerCase() === 'right') ? i : -i 
                this.tiles[coords[0]][coords[1]+movement] = ship;
            } else if (direction.toLowerCase() === 'up' || direction.toLowerCase() === 'down'){
                let movement = (direction.toLowerCase() === 'down') ? i : -i 
                this.tiles[coords[0]+movement][coords[1]] = ship
            }
        }
        this.shipsList.push(ship)
        return null
    }

    receiveAttack = (coords) => {
        let tile = this.tiles[coords[0]][coords[1]]
        if (!tile){
            console.error('Coordinates were not valid!')
            return null;
        }
        if (JSON.stringify(this.getPossibleMoves()).indexOf(JSON.stringify(coords)) === -1) {
            console.error('This tile was already shot!')
            return null;
        } else if (tile instanceof Ship){
            console.log('Shot hit a ship!', coords)
            tile.hit()
            this.shotTiles.push(coords);
            tile.hitTiles.push(coords);
            return true;
        } else {
            console.log('Shot missed!', coords)
            this.shotTiles.push(coords)
            this.tiles[coords[0]][coords[1]] = 'X';
            return false;
        }
    }

    allShipsSunk = () => {
        for (let ship of this.shipsList){
            if (!ship.sunk){
                return false
            }
        }
        return this.shipsList.length !== 0 ? true : false;
    }

    getPossibleMoves = () => {
        let possibleMoves = []
        for (let i=0; i<10; i++){
            for (let j=0; j<10; j++){
                let tile = [i,j]
                if (JSON.stringify(this.shotTiles).indexOf(JSON.stringify(tile)) === -1){
                    possibleMoves.push(tile)
                }
            }
        }
        return possibleMoves
    }
}

class Player{
    constructor(board, opponent){
        if (!board){
            throw Error('Player must be instantiated with a gameboard object!')
        }
        this.board = board;
        if (opponent && this.board !== opponent.board){
            this.opponent = opponent;
            opponent.opponent = this;
        } else (
            this.opponent = undefined
        )
    }

    makeMove = (coords) => {
        if (!coords){
            let possibleMoves = this.opponent.board.getPossibleMoves()
            coords = possibleMoves[Math.floor(Math.random()*possibleMoves.length)]
        }
        let shot = this.opponent.board.receiveAttack(coords);
        return shot;
    }
}

class Game{
    constructor(players, humanPlayer){
        this.players = players;
        this.playerTurn = players[Math.floor(Math.random()*2)];
        this.humanPlayer = humanPlayer;
        this.winner = undefined;
    }

    playNextTurn = () => {
        console.log('playingturn')
        const dividerMessage = document.querySelector('.divider-message');
        const gameButton = document.querySelector('.game-button');
        const opponentBoardOverlay = document.querySelector('.board-overlay');
        const opponentBoard = document.querySelector('.opponent.board');
        if (this.humanPlayer.board.allShipsSunk()){
            dividerMessage.textContent = 'OPPONENT HAS WON! ALL YOUR SHIPS WERE SUNK!';
            this.winner = this.humanPlayer.opponent;
            return null
        }
        if (this.playerTurn === this.humanPlayer){
            document.querySelector('.game-message').textContent = window.opponentShotResults;
            dividerMessage.textContent = 'IT IS NOW YOUR TURN!';
            opponentBoard.removeChild(opponentBoardOverlay);
            gameButton.style.display = 'none';
            this.playerTurn = this.players[1];
            return undefined;
        } else {
            dividerMessage.textContent = 'IT IS NOW OPPONENT\'S TURN!';
            this.playerTurn = this.players[0];
            gameButton.style.display = '';
            let shot = this.humanPlayer.opponent.makeMove();
            window.opponentShotResults = `Opponent\'s shot has ${shot ? 'shot your ship!' : 'missed!'}`;
        }
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQjtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQyx1QkFBdUIsV0FBVztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QiwwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLHFDQUFxQztBQUN0RztBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBudW1IaXRzKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtSGl0cyA9IG51bUhpdHMgPyBudW1IaXRzIDogMDtcbiAgICAgICAgdGhpcy5oaXRUaWxlcyA9IFtdXG4gICAgfVxuXG4gICAgaGl0ID0gKCk9PiB7XG4gICAgICAgIHRoaXMubnVtSGl0cyArPSAxO1xuICAgIH1cblxuICAgIGdldCBzdW5rKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm51bUhpdHMgPj0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHRpbGVJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmljb24gPyB0aGlzLmljb24gOiAnTyc7XG4gICAgfVxuXG4gICAgc2V0IHRpbGVJY29uKG5ld0ljb24pe1xuICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVJY29uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50aWxlcyA9IHRoaXMuI2NyZWF0ZVRpbGVzKCk7XG4gICAgICAgIHRoaXMuc2hvdFRpbGVzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHNMaXN0ID0gW107XG4gICAgfVxuXG4gICAgI2NyZWF0ZVRpbGVzID0gKCk9PntcbiAgICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwO2krKyl7XG4gICAgICAgICAgICBsZXQgdGlsZVJvdyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGlsZVJvdy5wdXNoKCcuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZVJvdylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZXNcbiAgICB9XG5cbiAgICAjc2hpcFBsYWNlbWVudE91dE9mQm91bmRzID0gKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzFdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMV0gLSAoc2hpcC5sZW5ndGgtMSkgPCAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3VwJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdIC0gKHNoaXAubGVuZ3RoLTEpIDwgMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgICNpbnRlcnNlY3RzQW5vdGhlclNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV0rbW92ZW1lbnRdIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd1cCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCAhKGRpcmVjdGlvbikgfHwgIShjb29yZHMpIHx8ICEoc2hpcCkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVycy4gUGFzcyBpbiBzaGlwIG9iamVjdCwgY29vcmRpbmF0ZXMsIGFuZCBhIGRpcmVjdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvb3Jkcy5tYXAoKGF4aXMpPT57cmV0dXJuIChheGlzIDwgMTAgJiYgYXhpcyA+PSAwKX0pLmZpbHRlcigoc2hpcFZhbGlkKT0+eyFzaGlwVmFsaWR9KSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2hpcCBjYW5cXCd0IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiNzaGlwUGxhY2VtZW50T3V0T2ZCb3VuZHMoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJylcbiAgICAgICAgICAgIHJldHVybiAnUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNpbnRlcnNlY3RzQW5vdGhlclNoaXAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hpcCBjYW5ub3QgYmUgcGxhY2VkIG9uIGFub3RoZXIgc2hpcCEnKVxuICAgICAgICAgICAgcmV0dXJuICdTaGlwIGNhbm5vdCBiZSBwbGFjZWQgb24gYW5vdGhlciBzaGlwISc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpcHNMaXN0Lmxlbmd0aCA+PSA3KXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVG9vIG1hbnkgc2hpcHMhIE1heGltdW0gb2YgNyBzaGlwcyBjYW4gYmUgcGxhY2VkIScpXG4gICAgICAgICAgICByZXR1cm4gJ1RvbyBtYW55IHNoaXBzISBNYXhpbXVtIG9mIDcgc2hpcHMgY2FuIGJlIHBsYWNlZCEnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdK21vdmVtZW50XSA9IHNoaXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndXAnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSA9IHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGlzdC5wdXNoKHNoaXApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXVxuICAgICAgICBpZiAoIXRpbGUpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ29vcmRpbmF0ZXMgd2VyZSBub3QgdmFsaWQhJylcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLmdldFBvc3NpYmxlTW92ZXMoKSkuaW5kZXhPZihKU09OLnN0cmluZ2lmeShjb29yZHMpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgdGlsZSB3YXMgYWxyZWFkeSBzaG90IScpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aWxlIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdCBoaXQgYSBzaGlwIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRpbGUuaGl0KClcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKTtcbiAgICAgICAgICAgIHRpbGUuaGl0VGlsZXMucHVzaChjb29yZHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdCBtaXNzZWQhJywgY29vcmRzKVxuICAgICAgICAgICAgdGhpcy5zaG90VGlsZXMucHVzaChjb29yZHMpXG4gICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXSA9ICdYJztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzTGlzdCl7XG4gICAgICAgICAgICBpZiAoIXNoaXAuc3Vuayl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNMaXN0Lmxlbmd0aCAhPT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRQb3NzaWJsZU1vdmVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDsgaSsrKXtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IFtpLGpdXG4gICAgICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHRoaXMuc2hvdFRpbGVzKS5pbmRleE9mKEpTT04uc3RyaW5naWZ5KHRpbGUpKSA9PT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2godGlsZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlTW92ZXNcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJ7XG4gICAgY29uc3RydWN0b3IoYm9hcmQsIG9wcG9uZW50KXtcbiAgICAgICAgaWYgKCFib2FyZCl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignUGxheWVyIG11c3QgYmUgaW5zdGFudGlhdGVkIHdpdGggYSBnYW1lYm9hcmQgb2JqZWN0IScpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib2FyZCA9IGJvYXJkO1xuICAgICAgICBpZiAob3Bwb25lbnQgJiYgdGhpcy5ib2FyZCAhPT0gb3Bwb25lbnQuYm9hcmQpe1xuICAgICAgICAgICAgdGhpcy5vcHBvbmVudCA9IG9wcG9uZW50O1xuICAgICAgICAgICAgb3Bwb25lbnQub3Bwb25lbnQgPSB0aGlzO1xuICAgICAgICB9IGVsc2UgKFxuICAgICAgICAgICAgdGhpcy5vcHBvbmVudCA9IHVuZGVmaW5lZFxuICAgICAgICApXG4gICAgfVxuXG4gICAgbWFrZU1vdmUgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGlmICghY29vcmRzKXtcbiAgICAgICAgICAgIGxldCBwb3NzaWJsZU1vdmVzID0gdGhpcy5vcHBvbmVudC5ib2FyZC5nZXRQb3NzaWJsZU1vdmVzKClcbiAgICAgICAgICAgIGNvb3JkcyA9IHBvc3NpYmxlTW92ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnBvc3NpYmxlTW92ZXMubGVuZ3RoKV1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hvdCA9IHRoaXMub3Bwb25lbnQuYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICAgICAgICByZXR1cm4gc2hvdDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1le1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcnMsIGh1bWFuUGxheWVyKXtcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gcGxheWVycztcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gcGxheWVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xuICAgICAgICB0aGlzLmh1bWFuUGxheWVyID0gaHVtYW5QbGF5ZXI7XG4gICAgICAgIHRoaXMud2lubmVyID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHBsYXlOZXh0VHVybiA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXlpbmd0dXJuJylcbiAgICAgICAgY29uc3QgZGl2aWRlck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2aWRlci1tZXNzYWdlJyk7XG4gICAgICAgIGNvbnN0IGdhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1idXR0b24nKTtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRCb2FyZE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtb3ZlcmxheScpO1xuICAgICAgICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wcG9uZW50LmJvYXJkJyk7XG4gICAgICAgIGlmICh0aGlzLmh1bWFuUGxheWVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKXtcbiAgICAgICAgICAgIGRpdmlkZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ09QUE9ORU5UIEhBUyBXT04hIEFMTCBZT1VSIFNISVBTIFdFUkUgU1VOSyEnO1xuICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLmh1bWFuUGxheWVyLm9wcG9uZW50O1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJUdXJuID09PSB0aGlzLmh1bWFuUGxheWVyKXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW1lc3NhZ2UnKS50ZXh0Q29udGVudCA9IHdpbmRvdy5vcHBvbmVudFNob3RSZXN1bHRzO1xuICAgICAgICAgICAgZGl2aWRlck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnSVQgSVMgTk9XIFlPVVIgVFVSTiEnO1xuICAgICAgICAgICAgb3Bwb25lbnRCb2FyZC5yZW1vdmVDaGlsZChvcHBvbmVudEJvYXJkT3ZlcmxheSk7XG4gICAgICAgICAgICBnYW1lQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLnBsYXllcnNbMV07XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGl2aWRlck1lc3NhZ2UudGV4dENvbnRlbnQgPSAnSVQgSVMgTk9XIE9QUE9ORU5UXFwnUyBUVVJOISc7XG4gICAgICAgICAgICB0aGlzLnBsYXllclR1cm4gPSB0aGlzLnBsYXllcnNbMF07XG4gICAgICAgICAgICBnYW1lQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGxldCBzaG90ID0gdGhpcy5odW1hblBsYXllci5vcHBvbmVudC5tYWtlTW92ZSgpO1xuICAgICAgICAgICAgd2luZG93Lm9wcG9uZW50U2hvdFJlc3VsdHMgPSBgT3Bwb25lbnRcXCdzIHNob3QgaGFzICR7c2hvdCA/ICdzaG90IHlvdXIgc2hpcCEnIDogJ21pc3NlZCEnfWA7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9