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
            return false
        }
        if (JSON.stringify(this.getPossibleMoves()).indexOf(JSON.stringify(coords)) === -1) {
            console.error('This tile was already shot!')
            return false
        } else if (tile instanceof Ship){
            console.log('Shot hit a ship!', coords)
            tile.hit()
            this.shotTiles.push(coords);
            tile.hitTiles.push(coords);
        } else {
            console.log('Shot missed!', coords)
            this.shotTiles.push(coords)
            this.tiles[coords[0]][coords[1]] = 'X';
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
        this.opponent.board.receiveAttack(coords);
        return this.opponent;
    }
}

class Game{
    constructor(players){
        this.players = players
        this.playerTurn = players[Math.floor(Math.random()*2)];
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGxlc2hpcC5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQjtBQUNBLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGdDQUFnQyx1QkFBdUIsV0FBVztBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixNQUFNO0FBQzVCLDBCQUEwQixNQUFNO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2JhdHRsZXNoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoLCBudW1IaXRzKXtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtSGl0cyA9IG51bUhpdHMgPyBudW1IaXRzIDogMDtcbiAgICAgICAgdGhpcy5oaXRUaWxlcyA9IFtdXG4gICAgfVxuXG4gICAgaGl0ID0gKCk9PiB7XG4gICAgICAgIHRoaXMubnVtSGl0cyArPSAxO1xuICAgIH1cblxuICAgIGdldCBzdW5rKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm51bUhpdHMgPj0gdGhpcy5sZW5ndGggPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHRpbGVJY29uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmljb24gPyB0aGlzLmljb24gOiAnTyc7XG4gICAgfVxuXG4gICAgc2V0IHRpbGVJY29uKG5ld0ljb24pe1xuICAgICAgICB0aGlzLmljb24gPSBuZXdJY29uO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbGVJY29uO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy50aWxlcyA9IHRoaXMuI2NyZWF0ZVRpbGVzKCk7XG4gICAgICAgIHRoaXMuc2hvdFRpbGVzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHNMaXN0ID0gW107XG4gICAgfVxuXG4gICAgI2NyZWF0ZVRpbGVzID0gKCk9PntcbiAgICAgICAgbGV0IHRpbGVzID0gW11cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPDEwO2krKyl7XG4gICAgICAgICAgICBsZXQgdGlsZVJvdyA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgdGlsZVJvdy5wdXNoKCcuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZVJvdylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGlsZXNcbiAgICB9XG5cbiAgICAjc2hpcFBsYWNlbWVudE91dE9mQm91bmRzID0gKHNoaXAsIGNvb3JkcywgZGlyZWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0Jyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzFdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2xlZnQnKXtcbiAgICAgICAgICAgIGlmIChjb29yZHNbMV0gLSAoc2hpcC5sZW5ndGgtMSkgPCAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3VwJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdIC0gKHNoaXAubGVuZ3RoLTEpIDwgMCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICBpZiAoY29vcmRzWzBdICsgKHNoaXAubGVuZ3RoLTEpID49IDEwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgICNpbnRlcnNlY3RzQW5vdGhlclNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnbGVmdCcpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3JpZ2h0JykgPyBpIDogLWkgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbY29vcmRzWzBdXVtjb29yZHNbMV0rbW92ZW1lbnRdIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICd1cCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdkb3duJyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpID8gaSA6IC1pIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSBpbnN0YW5jZW9mIFNoaXApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKCAhKGRpcmVjdGlvbikgfHwgIShjb29yZHMpIHx8ICEoc2hpcCkpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ01pc3NpbmcgcGFyYW1ldGVycy4gUGFzcyBpbiBzaGlwIG9iamVjdCwgY29vcmRpbmF0ZXMsIGFuZCBhIGRpcmVjdGlvbiEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvb3Jkcy5tYXAoKGF4aXMpPT57cmV0dXJuIChheGlzIDwgMTAgJiYgYXhpcyA+PSAwKX0pLmZpbHRlcigoc2hpcFZhbGlkKT0+eyFzaGlwVmFsaWR9KSl7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcignU2hpcCBjYW5cXCd0IGJlIHBsYWNlZCBvdXQgb2YgYm91bmRzIScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLiNzaGlwUGxhY2VtZW50T3V0T2ZCb3VuZHMoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJylcbiAgICAgICAgICAgIHJldHVybiAnUGFydCBvZiBzaGlwIGlzIG91dCBvZiBib3VuZHMhJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLiNpbnRlcnNlY3RzQW5vdGhlclNoaXAoc2hpcCwgY29vcmRzLCBkaXJlY3Rpb24pKXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignU2hpcCBjYW5ub3QgYmUgcGxhY2VkIG9uIGFub3RoZXIgc2hpcCEnKVxuICAgICAgICAgICAgcmV0dXJuICdTaGlwIGNhbm5vdCBiZSBwbGFjZWQgb24gYW5vdGhlciBzaGlwISc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hpcHNMaXN0Lmxlbmd0aCA+PSA3KXtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignVG9vIG1hbnkgc2hpcHMhIE1heGltdW0gb2YgNyBzaGlwcyBjYW4gYmUgcGxhY2VkIScpXG4gICAgICAgICAgICByZXR1cm4gJ1RvbyBtYW55IHNoaXBzISBNYXhpbXVtIG9mIDcgc2hpcHMgY2FuIGJlIHBsYWNlZCEnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8c2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdyaWdodCcgfHwgZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCkgPT09ICdsZWZ0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG1vdmVtZW50ID0gKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAncmlnaHQnKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdK21vdmVtZW50XSA9IHNoaXA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndXAnIHx8IGRpcmVjdGlvbi50b0xvd2VyQ2FzZSgpID09PSAnZG93bicpe1xuICAgICAgICAgICAgICAgIGxldCBtb3ZlbWVudCA9IChkaXJlY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gJ2Rvd24nKSA/IGkgOiAtaSBcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzW2Nvb3Jkc1swXSttb3ZlbWVudF1bY29vcmRzWzFdXSA9IHNoaXBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzTGlzdC5wdXNoKHNoaXApXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnRpbGVzW2Nvb3Jkc1swXV1bY29vcmRzWzFdXVxuICAgICAgICBpZiAoIXRpbGUpe1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ29vcmRpbmF0ZXMgd2VyZSBub3QgdmFsaWQhJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLmdldFBvc3NpYmxlTW92ZXMoKSkuaW5kZXhPZihKU09OLnN0cmluZ2lmeShjb29yZHMpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgdGlsZSB3YXMgYWxyZWFkeSBzaG90IScpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIGlmICh0aWxlIGluc3RhbmNlb2YgU2hpcCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2hvdCBoaXQgYSBzaGlwIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRpbGUuaGl0KClcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKTtcbiAgICAgICAgICAgIHRpbGUuaGl0VGlsZXMucHVzaChjb29yZHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3QgbWlzc2VkIScsIGNvb3JkcylcbiAgICAgICAgICAgIHRoaXMuc2hvdFRpbGVzLnB1c2goY29vcmRzKVxuICAgICAgICAgICAgdGhpcy50aWxlc1tjb29yZHNbMF1dW2Nvb3Jkc1sxXV0gPSAnWCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5zaGlwc0xpc3Qpe1xuICAgICAgICAgICAgaWYgKCFzaGlwLnN1bmspe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzTGlzdC5sZW5ndGggIT09IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0UG9zc2libGVNb3ZlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHBvc3NpYmxlTW92ZXMgPSBbXVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8MTA7IGkrKyl7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8MTA7IGorKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSBbaSxqXVxuICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnNob3RUaWxlcykuaW5kZXhPZihKU09OLnN0cmluZ2lmeSh0aWxlKSkgPT09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKHRpbGUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkLCBvcHBvbmVudCl7XG4gICAgICAgIGlmICghYm9hcmQpe1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1BsYXllciBtdXN0IGJlIGluc3RhbnRpYXRlZCB3aXRoIGEgZ2FtZWJvYXJkIG9iamVjdCEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICAgICAgaWYgKG9wcG9uZW50ICYmIHRoaXMuYm9hcmQgIT09IG9wcG9uZW50LmJvYXJkKXtcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSBvcHBvbmVudDtcbiAgICAgICAgICAgIG9wcG9uZW50Lm9wcG9uZW50ID0gdGhpcztcbiAgICAgICAgfSBlbHNlIChcbiAgICAgICAgICAgIHRoaXMub3Bwb25lbnQgPSB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgIH1cblxuICAgIG1ha2VNb3ZlID0gKGNvb3JkcykgPT4ge1xuICAgICAgICBpZiAoIWNvb3Jkcyl7XG4gICAgICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IHRoaXMub3Bwb25lbnQuYm9hcmQuZ2V0UG9zc2libGVNb3ZlcygpXG4gICAgICAgICAgICBjb29yZHMgPSBwb3NzaWJsZU1vdmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwb3NzaWJsZU1vdmVzLmxlbmd0aCldXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHBvbmVudC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wcG9uZW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IocGxheWVycyl7XG4gICAgICAgIHRoaXMucGxheWVycyA9IHBsYXllcnNcbiAgICAgICAgdGhpcy5wbGF5ZXJUdXJuID0gcGxheWVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMildO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=