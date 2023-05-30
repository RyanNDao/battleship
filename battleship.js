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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQjtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQyx1QkFBdUIsV0FBVztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QiwwQkFBMEIsTUFBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxxQ0FBcUM7QUFDdEc7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9iYXR0bGVzaGlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgbnVtSGl0cyl7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLm51bUhpdHMgPSBudW1IaXRzID8gbnVtSGl0cyA6IDA7XG4gICAgICAgIHRoaXMuaGl0VGlsZXMgPSBbXVxuICAgIH1cblxuICAgIGhpdCA9ICgpPT4ge1xuICAgICAgICB0aGlzLm51bUhpdHMgKz0gMTtcbiAgICB9XG5cbiAgICBnZXQgc3Vuaygpe1xuICAgICAgICByZXR1cm4gdGhpcy5udW1IaXRzID49IHRoaXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB0aWxlSWNvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pY29uID8gdGhpcy5pY29uIDogJ08nO1xuICAgIH1cblxuICAgIHNldCB0aWxlSWNvbihuZXdJY29uKXtcbiAgICAgICAgdGhpcy5pY29uID0gbmV3SWNvbjtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpe1xuICAgICAgICByZXR1cm4gdGhpcy50aWxlSWNvbjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudGlsZXMgPSB0aGlzLiNjcmVhdGVUaWxlcygpO1xuICAgICAgICB0aGlzLnNob3RUaWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzTGlzdCA9IFtdO1xuICAgIH1cblxuICAgICNjcmVhdGVUaWxlcyA9ICgpPT57XG4gICAgICAgIGxldCB0aWxlcyA9IFtdXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwxMDtpKyspe1xuICAgICAgICAgICAgbGV0IHRpbGVSb3cgPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPDEwOyBqKyspe1xuICAgICAgICAgICAgICAgIHRpbGVSb3cucHVzaCgnLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aWxlcy5wdXNoKHRpbGVSb3cpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRpbGVzXG4gICAgfVxuXG4gICAgI3NoaXBQbGFjZW1lbnRPdXRPZkJvdW5kcyA9IChzaGlwLCBjb29yZHMsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcpe1xuICAgICAgICAgICAgaWYgKGNvb3Jkc1sxXSArIChzaGlwLmxlbmd0aC0xKSA+PSAxMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzFdIC0gKHNoaXAubGVuZ3RoLTEpIDwgMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd1cCcpe1xuICAgICAgICAgICAgaWYgKGNvb3Jkc1swXSAtIChzaGlwLmxlbmd0aC0xKSA8IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpe1xuICAgICAgICAgICAgaWYgKGNvb3Jkc1swXSArIChzaGlwLmxlbmd0aC0xKSA+PSAxMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAjaW50ZXJzZWN0c0Fub3RoZXJTaGlwID0gKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTxzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JyB8fCBkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnQgPSAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdK21vdmVtZW50XSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndXAnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tjb29yZHNbMF0rbW92ZW1lbnRdW2Nvb3Jkc1sxXV0gaW5zdGFuY2VvZiBTaGlwKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmICggIShkaXJlY3Rpb24pIHx8ICEoY29vcmRzKSB8fCAhKHNoaXApKXtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdNaXNzaW5nIHBhcmFtZXRlcnMuIFBhc3MgaW4gc2hpcCBvYmplY3QsIGNvb3JkaW5hdGVzLCBhbmQgYSBkaXJlY3Rpb24hJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb29yZHMubWFwKChheGlzKT0+e3JldHVybiAoYXhpcyA8IDEwICYmIGF4aXMgPj0gMCl9KS5maWx0ZXIoKHNoaXBWYWxpZCk9Pnshc2hpcFZhbGlkfSkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1NoaXAgY2FuXFwndCBiZSBwbGFjZWQgb3V0IG9mIGJvdW5kcyEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy4jc2hpcFBsYWNlbWVudE91dE9mQm91bmRzKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1BhcnQgb2Ygc2hpcCBpcyBvdXQgb2YgYm91bmRzIScpXG4gICAgICAgICAgICByZXR1cm4gJ1BhcnQgb2Ygc2hpcCBpcyBvdXQgb2YgYm91bmRzISc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4jaW50ZXJzZWN0c0Fub3RoZXJTaGlwKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1NoaXAgY2Fubm90IGJlIHBsYWNlZCBvbiBhbm90aGVyIHNoaXAhJylcbiAgICAgICAgICAgIHJldHVybiAnU2hpcCBjYW5ub3QgYmUgcGxhY2VkIG9uIGFub3RoZXIgc2hpcCEnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNoaXBzTGlzdC5sZW5ndGggPj0gNyl7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RvbyBtYW55IHNoaXBzISBNYXhpbXVtIG9mIDcgc2hpcHMgY2FuIGJlIHBsYWNlZCEnKVxuICAgICAgICAgICAgcmV0dXJuICdUb28gbWFueSBzaGlwcyEgTWF4aW11bSBvZiA3IHNoaXBzIGNhbiBiZSBwbGFjZWQhJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXSttb3ZlbWVudF0gPSBzaGlwO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3VwJyB8fCBkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKXtcbiAgICAgICAgICAgICAgICBsZXQgbW92ZW1lbnQgPSAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlc1tjb29yZHNbMF0rbW92ZW1lbnRdW2Nvb3Jkc1sxXV0gPSBzaGlwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaGlwc0xpc3QucHVzaChzaGlwKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgICAgIGxldCB0aWxlID0gdGhpcy50aWxlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXV1cbiAgICAgICAgaWYgKCF0aWxlKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nvb3JkaW5hdGVzIHdlcmUgbm90IHZhbGlkIScpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRQb3NzaWJsZU1vdmVzKCkpLmluZGV4T2YoSlNPTi5zdHJpbmdpZnkoY29vcmRzKSkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGlzIHRpbGUgd2FzIGFscmVhZHkgc2hvdCEnKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGlsZSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3QgaGl0IGEgc2hpcCEnLCBjb29yZHMpXG4gICAgICAgICAgICB0aWxlLmhpdCgpXG4gICAgICAgICAgICB0aGlzLnNob3RUaWxlcy5wdXNoKGNvb3Jkcyk7XG4gICAgICAgICAgICB0aWxlLmhpdFRpbGVzLnB1c2goY29vcmRzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3QgbWlzc2VkIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKVxuICAgICAgICAgICAgdGhpcy50aWxlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSAnWCc7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwc0xpc3Qpe1xuICAgICAgICAgICAgaWYgKCFzaGlwLnN1bmspe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzTGlzdC5sZW5ndGggIT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UG9zc2libGVNb3ZlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBvc3NpYmxlTW92ZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBbaSxqXVxuICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnNob3RUaWxlcykuaW5kZXhPZihKU09OLnN0cmluZ2lmeSh0aWxlKSkgPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHRpbGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkLCBvcHBvbmVudCl7XG4gICAgICAgIGlmICghYm9hcmQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1BsYXllciBtdXN0IGJlIGluc3RhbnRpYXRlZCB3aXRoIGEgZ2FtZWJvYXJkIG9iamVjdCEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgaWYgKG9wcG9uZW50ICYmIHRoaXMuYm9hcmQgIT09IG9wcG9uZW50LmJvYXJkKXtcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudDtcbiAgICAgICAgICAgIG9wcG9uZW50Lm9wcG9uZW50ID0gdGhpcztcbiAgICAgICAgfSBlbHNlIChcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIG1ha2VNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBpZiAoIWNvb3Jkcyl7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IHRoaXMub3Bwb25lbnQuYm9hcmQuZ2V0UG9zc2libGVNb3ZlcygpXG4gICAgICAgICAgICBjb29yZHMgPSBwb3NzaWJsZU1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwb3NzaWJsZU1vdmVzLmxlbmd0aCldXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3QgPSB0aGlzLm9wcG9uZW50LmJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgICAgICAgcmV0dXJuIHNob3Q7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXJzLCBodW1hblBsYXllcil7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnM7XG4gICAgICAgIHRoaXMucGxheWVyVHVybiA9IHBsYXllcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjIpXTtcbiAgICAgICAgdGhpcy5odW1hblBsYXllciA9IGh1bWFuUGxheWVyO1xuICAgICAgICB0aGlzLndpbm5lciA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwbGF5TmV4dFR1cm4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdmlkZXJNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdmlkZXItbWVzc2FnZScpO1xuICAgICAgICBjb25zdCBnYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IG9wcG9uZW50Qm9hcmRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLW92ZXJsYXknKTtcbiAgICAgICAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcHBvbmVudC5ib2FyZCcpO1xuICAgICAgICBpZiAodGhpcy5odW1hblBsYXllci5ib2FyZC5hbGxTaGlwc1N1bmsoKSl7XG4gICAgICAgICAgICBkaXZpZGVyTWVzc2FnZS50ZXh0Q29udGVudCA9ICdPUFBPTkVOVCBIQVMgV09OISBBTEwgWU9VUiBTSElQUyBXRVJFIFNVTkshJztcbiAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5odW1hblBsYXllci5vcHBvbmVudDtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGxheWVyVHVybiA9PT0gdGhpcy5odW1hblBsYXllcil7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1tZXNzYWdlJykudGV4dENvbnRlbnQgPSB3aW5kb3cub3Bwb25lbnRTaG90UmVzdWx0cztcbiAgICAgICAgICAgIGRpdmlkZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ0lUIElTIE5PVyBZT1VSIFRVUk4hJztcbiAgICAgICAgICAgIG9wcG9uZW50Qm9hcmQucmVtb3ZlQ2hpbGQob3Bwb25lbnRCb2FyZE92ZXJsYXkpO1xuICAgICAgICAgICAgZ2FtZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdGhpcy5wbGF5ZXJzWzFdO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpdmlkZXJNZXNzYWdlLnRleHRDb250ZW50ID0gJ0lUIElTIE5PVyBPUFBPTkVOVFxcJ1MgVFVSTiEnO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gdGhpcy5wbGF5ZXJzWzBdO1xuICAgICAgICAgICAgZ2FtZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICBsZXQgc2hvdCA9IHRoaXMuaHVtYW5QbGF5ZXIub3Bwb25lbnQubWFrZU1vdmUoKTtcbiAgICAgICAgICAgIHdpbmRvdy5vcHBvbmVudFNob3RSZXN1bHRzID0gYE9wcG9uZW50XFwncyBzaG90IGhhcyAke3Nob3QgPyAnc2hvdCB5b3VyIHNoaXAhJyA6ICdtaXNzZWQhJ31gO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==