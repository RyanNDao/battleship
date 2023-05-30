export class Ship {
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

export class Gameboard {
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

export class Player{
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

export class Game{
    constructor(players){
        this.players = players
        this.playerTurn = players[Math.floor(Math.random()*2)];
    }
}