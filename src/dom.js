import { Ship, Gameboard, Player, Game } from './battleship.js'
const gameContainer = document.querySelector('.game-container');
const mainContainer = document.querySelector('.main-container');
const gameMessage = document.querySelector('.game-message');
import './style.css';

function designStartScreen(){
    let startOverlay = createElement('div', 'start-overlay','');
    let startScreen = createElement('div','start-screen','')
    let startMessage = createElement('p','start-message','CLICK THE BUTTON TO BEGIN THE GAME!');
    let startButton = createElement('button','start-button','START GAME!');
    startButton.addEventListener('click',()=>{
        let newGame = designGame();
        window.currentGame = newGame;
    });
    startOverlay.appendChild(startScreen);
    startScreen.appendChild(startMessage);
    startScreen.appendChild(startButton);
    mainContainer.appendChild(startOverlay);
}

function designGame(){
    const startOverlay = document.querySelector('.start-overlay');
    startOverlay.style.display = 'none';
    const boardOne = new Gameboard();
    const boardTwo = new Gameboard();
    let playerOne = new Player(boardOne);
    let playerTwo = new Player(boardTwo, playerOne);
    gameContainer.innerHTML = '';
    document.querySelector('.game-message').textContent = '';
    designBoards(playerOne);
    return new Game([playerOne, playerTwo], playerOne)
}

export function designBoards(player){
    let playerBoard = createPlayerBoard();
    playerBoard.classList.add('player')
    gameContainer.appendChild(playerBoard);
    gameContainer.appendChild(designDividerContainer(player));
    let opponentBoard = createPlayerBoard();
    opponentBoard.classList.add('opponent');
    gameContainer.appendChild(opponentBoard);
    addEventListenersOnOpponentBoard(player);
    createOverlayOnOpponentBoard();
}

function designDividerContainer(player){
    let dividerContainer = createElement('div','divider-container','');
    let dividerMessageBox = createElement('p','divider-message','PLACE YOUR SHIPS!');
    let placeShipsDiv = createPlaceShipForm(player);
    dividerContainer.appendChild(dividerMessageBox);
    dividerContainer.appendChild(placeShipsDiv);
    let gameButton = createElement('button','game-button','FINISH PLACING SHIPS');
    let errorMessage = createElement('p','form-error','');
    dividerContainer.appendChild(errorMessage);
    gameButton.addEventListener('click',()=>{
        if (player.board.shipsList.length === 0){
            errorMessage.textContent = 'No ships were placed!';
            return;
        } else {
            dividerMessageBox.textContent = window.currentGame.playerTurn === player ? `YOU GO FIRST. PRESS CONTINUE TO START` : 'OPPONENT GOES FIRST.';
            replaceGameButton(gameButton, 'CONTINUE', ()=>{
                window.currentGame.playNextTurn();
                updatePlayerBoard(player.board);
            })
            errorMessage.textContent = '';
            placeShipsDiv.style.display = 'none';
            
        }
    })
    dividerContainer.appendChild(gameButton);
    return dividerContainer;
}

function replaceGameButton(original, text, eventListenerCallback){
    original.style.display = '';
    original.textContent = text;
    let newGameButton = original.cloneNode(true);
    original.parentNode.replaceChild(newGameButton, original);
    if (eventListenerCallback){
        newGameButton.addEventListener('click',eventListenerCallback)
    }
    return newGameButton
}


function createPlaceShipForm(player){
    let placeShipDiv = createElement('div','place-ship-form-container','');
    let placeShipForm = createElement('form','place-ship-form','');
    let shipLength = createFormDropdown('length-dropdown', 'Ship Length:', true, [1,2,3,4,5]);
    let xCoords = createFormDropdown('x-coords-dropdown', 'X-Axis Location:', true, [0,1,2,3,4,5,6,7,8,9]);
    let yCoords = createFormDropdown('y-coords-dropdown', 'Y-Axis Location:', true, [0,1,2,3,4,5,6,7,8,9]);
    let direction = createFormDropdown('direction-dropdown', 'Direction:', true, ['right','down','left','up']);
    placeShipForm.appendChild(shipLength);
    placeShipForm.appendChild(xCoords);
    placeShipForm.appendChild(yCoords);
    placeShipForm.appendChild(direction);
    let placeShipButton = createElement('button','place-ship-button','PLACE SHIP!');
    placeShipButton.addEventListener('click',(e)=>{
        e.preventDefault();
        placeShipOnPlayerBoard(player);
        updatePlayerBoard(player.board);
    })
    placeShipForm.appendChild(placeShipButton);
    placeShipDiv.appendChild(placeShipForm);
    return placeShipDiv
}

function placeShipOnPlayerBoard(player){
    let xCoords = Number(document.getElementById('x-coords-dropdown').value);
    let yCoords = Number(document.getElementById('y-coords-dropdown').value);
    let direction = document.getElementById('direction-dropdown').value;
    let shipLength = Number(document.getElementById('length-dropdown').value);
    let newShip = new Ship(shipLength);
    let errorMessage = player.board.placeShip(newShip, [yCoords, xCoords], direction)
    let errorMessageElement = document.querySelector('.form-error');
    errorMessageElement.textContent = errorMessage ? errorMessage : '';
    if (!errorMessage){
        let newOpponentShip = new Ship(shipLength);
        do {
            xCoords = Math.floor(Math.random()*10);
            yCoords = Math.floor(Math.random()*10);
            direction = ['right','down','left','up'][Math.floor(Math.random()*4)];
        } while (player.opponent.board.placeShip(newOpponentShip,[yCoords, xCoords], direction))
    }

}

function addEventListenersOnOpponentBoard(player){
    let allOpponentGameTiles = document.querySelectorAll('.opponent.board .board-tile[class$="_gametile"]')
    allOpponentGameTiles.forEach((tileElement)=>{
        let tileCoordsString = tileElement.classList.toString().match(/xcoords-\d-ycoords-\d/)[0];
        let xCoords = Number(tileCoordsString.slice(8,9));
        let yCoords = Number(tileCoordsString.slice(18,19));
        let coords = [yCoords, xCoords];
        tileElement.addEventListener('click', ()=>{
            let shot = player.makeMove(coords);
            gameMessage.textContent = `Your shot at (${coords}) has ${shot ? 'hit the opponent\'s ship!' : 'missed!'}`
            updateOpponentBoard(player.opponent);
            createOverlayOnOpponentBoard();
            if (player.opponent.board.allShipsSunk()){
                window.currentGame.winner = player;
                document.querySelector('.divider-message').textContent = 'YOU HAVE WON! YOU HAVE SUNK ALL OF YOUR OPPONENT\'S SHIPS!';
                const gameButton = document.querySelector('.game-button');
                replaceGameButton(gameButton, 'RESTART', designGame);
            } else { 
                window.currentGame.playNextTurn();
            }
            
        }, {
            once: true
        })
    })
}

function createOverlayOnOpponentBoard(){
    const opponentBoard = document.querySelector('.board.opponent');
    opponentBoard.appendChild(createElement('div','board-overlay',''));
}

export function updateOpponentBoard(opponent){
    let newBoard = (new Gameboard()).tiles;
    for (let shotCoords of opponent.board.shotTiles){
        newBoard[shotCoords[0]][shotCoords[1]] = 'X';
    }
    for (let opponentShip of opponent.board.shipsList){
        for (let shotOpponentShipTiles of opponentShip.hitTiles){
            newBoard[shotOpponentShipTiles[0]][shotOpponentShipTiles[1]] = '*';
        }
    }
    for (let rowIdx in newBoard){
        let row = newBoard[rowIdx]
        for (let colIdx in row){
            let tile = row[colIdx]
            if (tile === 'X') {
                let tileDom = document.querySelector(`.board.opponent .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('missed-tile');
                tileDom.textContent = 'X';
            } else if (tile === '*') {
                let tileDom = document.querySelector(`.board.opponent .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('shot-tile');
                tileDom.textContent = '*';
            }
        }
    }
    return newBoard
}

export function updatePlayerBoard(board){
    let iconBoard = convertPlayerBoardToIcons(board);
    for (let rowIdx in iconBoard){
        let row = iconBoard[rowIdx]
        for (let colIdx in row){
            let tile = row[colIdx]
            if (tile === 'O'){
                let tileDom = document.querySelector(`.board.player .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('ship-tile');
                tileDom.textContent = 'O';
            } else if (tile === 'X') {
                let tileDom = document.querySelector(`.board.player .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('missed-tile');
                tileDom.textContent = 'X';
            } else if (tile === '*') {
                let tileDom = document.querySelector(`.board.player .board-tile[class*="xcoords-${colIdx}-ycoords-${rowIdx}"]`)
                tileDom.classList.add('shot-tile');
                tileDom.classList.remove('ship-tile');
                tileDom.textContent = '*';
            }
        }
    }
    return iconBoard
}


function createPlayerBoard(){
    let domBoard = createElement('div','board','');
    for (let i=0; i<11;i++){
        let row = createElement('div','board-row','');
        for (let j=0; j<11; j++){
            if (i === 0 & j !== 0){
                var coords = `${j-1}`;
            } else if (i !== 0 && j === 0){
                var coords = `${i-1}`;
            } else {
                var coords = '';
            }
            let tile = createElement('div','board-tile', coords);
            if (coords === '' && i !== 0 & j !== 0){
                tile.classList.add(`xcoords-${j-1}-ycoords-${i-1}_gametile`);
            }
            let verticalLine = createElement('div','vertical-line','');
            row.appendChild(tile)
            if (j !== 10){
                row.appendChild(verticalLine)
            }
        }
        domBoard.appendChild(row);
        let horizontalLine = createElement('div','horizontal-line','');
        if (i !== 10){
            domBoard.appendChild(horizontalLine);
        }   
    }
    return domBoard
}

function convertPlayerBoardToIcons(board){
    let iconBoard = board.tiles.map((tileRow)=>{
        let iconTileRow = tileRow.map((tile)=>{
            return tile.toString();
        })
        return iconTileRow
    })
    for (let ship of board.shipsList){
        for (let hitCoords of ship.hitTiles){
            iconBoard[hitCoords[0]][hitCoords[1]] = '*';
        }
    }
    return iconBoard
}

export function createElement(type, classes, text){
    let element = document.createElement(type);
    if (classes.length !== 0){
        typeof(classes) === 'object' ? element.classList.add(...classes) : element.classList.add(classes);
    }
    element.textContent = text ? text : '';
    return element;
}

function createFormDropdown(id='',name='',required=false, optionValues=[], optionTextList=[]){
    let formInputDiv = createElement('div','form-input','');
    let formLabel = createElement('label','',name);
    formLabel.for = id;
    let formDropdown = createElement('select','','');
    formDropdown.id = id;
    formDropdown.required = required;
    if (optionValues.length > 0 && optionTextList.length === 0){
        optionTextList = optionValues;
    }
    if (optionValues.length !== optionTextList.length){
        throw Error('Options value list and option text list must be the same size!');
    }
    for (let optionIdx in optionValues){
        let option = createElement('option','',optionTextList[optionIdx].toString());
        option.value = optionValues[optionIdx];
        formDropdown.appendChild(option);
    }
    formInputDiv.appendChild(formLabel);
    formInputDiv.appendChild(formDropdown);
    return formInputDiv;
}

designStartScreen();