import { Ship, Gameboard, Player } from './src/battleship.js'


test('Create new ship returns object', ()=>{
    const ship = new Ship();
    expect(typeof(ship)).toBe('object');
})

test('Create ship happy path', ()=>{
    const ship = new Ship(4, 2);
    expect(typeof(ship)).toBe('object');
    expect(ship.length).toBe(4);
    expect(ship.numHits).toBe(2);
    expect(ship.sunk).toBe(false);
})

test('Test ship object\'s hit function', ()=>{
    const ship = new Ship(4, 2, false);
    ship.hit();
    expect(ship.numHits).toBe(3);
})

test('Test ship object\'s sunk attribute', ()=>{
    const ship = new Ship(4, 3, false);
    expect(ship.numHits).toBe(3);
    expect(ship.sunk).toBe(false);
    ship.hit();
    expect(ship.numHits).toBe(4);
    expect(ship.sunk).toBe(true);
})

test('Gameboard has 10 rows and columns', ()=>{
    const game = new Gameboard();
    expect(game.tiles.length).toBe(10);
    for (let row of game.tiles){
        expect(row.length).toBe(10); 
    }
})

test('Game tiles are all initially periods (empty)', ()=>{
    const game = new Gameboard();
    for (let row of game.tiles){
        row.map((tile)=>{
            expect(tile).toBe('.')
        })
    }
})

test('Place ship horizontally to the right, ship is present on grid', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    game.placeShip(ship, [5,6], 'right');
    expect(game.tiles[5][6].toString()).toBe('O');
    expect(game.tiles[5][7].toString()).toBe('O');
    expect(game.tiles[5][8].toString()).toBe('O');
    expect(game.tiles[8][9].toString()).not.toBe('O');
    expect(game.tiles[8][5].toString()).not.toBe('O');
})

test('Place ship vertically downwards, ship is present on grid', ()=>{
    const game = new Gameboard();
    const ship = new Ship(2);
    game.placeShip(ship, [5,6], 'down');
    expect(game.tiles[5][6].toString()).toBe('O');
    expect(game.tiles[6][6].toString()).toBe('O');
    expect(game.tiles[7][6].toString()).not.toBe('O');
    expect(game.tiles[4][6].toString()).not.toBe('O');
})


test('Place ship horizontally to the left, location has ship object', ()=>{
    const game = new Gameboard();
    const ship = new Ship(4);
    game.placeShip(ship, [5,6], 'left');
    expect(typeof(game.tiles[5][6])).toBe('object');
    expect(typeof(game.tiles[5][5])).toBe('object');
    expect(typeof(game.tiles[5][4])).toBe('object');
    expect(typeof(game.tiles[5][3])).toBe('object');
    expect(typeof(game.tiles[5][2])).not.toBe('object');
    expect(typeof(game.tiles[5][7])).not.toBe('object');
    
})

test('Place ship vertically upwards, location has ship object', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    game.placeShip(ship, [5,6], 'up');
    expect(typeof(game.tiles[5][6])).toBe('object');
    expect(typeof(game.tiles[4][6])).toBe('object');
    expect(typeof(game.tiles[3][6])).toBe('object');
    expect(typeof(game.tiles[2][6])).not.toBe('object');
    expect(typeof(game.tiles[6][6])).not.toBe('object');
})

test('Test game object boundaries', ()=>{
    const game = new Gameboard();
    expect(typeof(game.tiles[0][10])).toBe('undefined');
    expect(typeof(game.tiles[10])).toBe('undefined');
    expect(typeof(game.tiles[0][0])).not.toBeUndefined();
})

test('Ship placed is out of maximum bounds', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    game.placeShip(ship, [4,8], 'right');
    expect(game.tiles[4][8].toString()).not.toBe('O');
    expect(game.tiles[4][9].toString()).not.toBe('O');
    expect(typeof(game.tiles[4][10])).toBe('undefined');
})


test('Ship placed is out of minimum bounds', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    game.placeShip(ship, [1,8], 'up');
    expect(game.tiles[1][8].toString()).not.toBe('O');
    expect(game.tiles[0][9].toString()).not.toBe('O');
})

test('Ship was hit', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    expect(ship.numHits).toBe(0);
    game.placeShip(ship, [4,3], 'right');
    expect(ship.hitTiles).not.toContainEqual([4,4])
    game.receiveAttack([4,4])
    expect(ship.hitTiles).toContainEqual([4,4])
    expect(ship.hitTiles).not.toContainEqual([4,3])
    expect(ship.numHits).toBe(1);
})

test('Ship was missed', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    expect(ship.numHits).toBe(0);
    game.placeShip(ship, [4,3], 'right');
    game.receiveAttack([4,9]);
    expect(game.tiles[4][9].toString()).toBe('X')
    expect(ship.numHits).toBe(0);
})

test('Gameboard properly keeps track of shots', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    game.placeShip(ship, [4,3], 'right');
    game.receiveAttack([4,9])
    game.receiveAttack([2,3])
    game.receiveAttack([4,3])
    expect(game.shotTiles).toContainEqual([4,9])
    expect(game.shotTiles).toContainEqual([2,3])
    expect(game.shotTiles).toContainEqual([4,3])
    expect(game.shotTiles).not.toContainEqual([1,1])
})

test('Ship correctly registers as sunk', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    expect(ship.numHits).toBe(0);
    game.placeShip(ship, [4,3], 'right');
    game.receiveAttack([4,3])
    expect(ship.numHits).toBe(1);
    expect(ship.sunk).toBe(false);
    game.receiveAttack([4,4])
    expect(ship.numHits).toBe(2);
    expect(ship.sunk).toBe(false);
    game.receiveAttack([4,5])
    expect(ship.numHits).toBe(3);
    expect(ship.sunk).toBe(true);
})

test('Ship cannot be hit twice in the same tile', ()=>{
    const game = new Gameboard();
    const ship = new Ship(3);
    expect(ship.numHits).toBe(0);
    game.placeShip(ship, [4,3], 'right');
    game.receiveAttack([4,3])
    expect(ship.numHits).toBe(1);
    game.receiveAttack([4,3])
    expect(ship.numHits).toBe(1);
})

test('Gameboard\'s list of ships is correctly adding ships', ()=>{
    const game = new Gameboard();
    expect(game.shipsList.length).toBe(0);
    const shipOne = new Ship(3);
    game.placeShip(shipOne, [5,6], 'right');
    expect(game.shipsList.length).toBe(1);
    const shipTwo = new Ship(2);
    game.placeShip(shipTwo, [3,2], 'right');
    expect(game.shipsList.length).toBe(2);
    const shipThree = new Ship(5);
    game.placeShip(shipThree, [1,1], 'down');
    expect(game.shipsList.length).toBe(3);
})

test('All ships properly registered as sunk', ()=>{
    const game = new Gameboard();
    const shipOne = new Ship(3);
    const shipTwo = new Ship(2);
    expect(game.allShipsSunk()).toBe(false);
    game.placeShip(shipOne, [5,6], 'right');
    game.placeShip(shipTwo, [7,2], 'down');
    game.receiveAttack([5,6])
    game.receiveAttack([5,7])
    game.receiveAttack([5,8])
    expect(shipOne.sunk).toBe(true);
    expect(game.allShipsSunk()).toBe(false);
    game.receiveAttack([7,2])
    game.receiveAttack([8,2])
    expect(shipTwo.sunk).toBe(true);
    expect(game.allShipsSunk()).toBe(true);
})

test('Ships cannot be placed on another ship\'s tile', ()=>{
    const game = new Gameboard();
    const shipOne = new Ship(3);
    const shipTwo = new Ship(2);
    game.placeShip(shipOne, [5,6], 'right');
    expect(game.shipsList.length).toBe(1);
    game.placeShip(shipTwo, [5,7], 'down');
    expect(game.shipsList.length).toBe(1);
})

test('Player creation happy path',()=>{
    const board = new Gameboard();
    const player = new Player(board);
    expect(player).toBeInstanceOf(Player)
})

test('Player is called without a gameboard',()=>{
    expect(()=>{new Player()}).toThrow()
})

test('Player can place ships',()=>{
    const board = new Gameboard();
    const player = new Player(board);
    const shipOne = new Ship(3);
    const shipTwo = new Ship(2);
    expect(player.board.shipsList.length).toBe(0);
    player.board.placeShip(shipOne, [2,3], 'right');
    expect(player.board.shipsList.length).toBe(1);
    player.board.placeShip(shipTwo, [7,8], 'up');
    expect(player.board.shipsList.length).toBe(2);
})

test('Player has opponent and vice versa',()=>{
    const boardOne = new Gameboard();
    const boardTwo = new Gameboard();
    const playerOne = new Player(boardOne);
    expect(playerOne.opponent).toBe(undefined)
    const playerTwo = new Player(boardTwo, playerOne);
    expect(playerOne.opponent).toBe(playerTwo);
    expect(playerTwo.opponent).toBe(playerOne);
})

test('Players cannot share boards',()=>{
    const board = new Gameboard();
    const playerOne = new Player(board);
    const playerTwo = new Player(board, playerOne);
    expect(playerOne.opponent).toBe(undefined);
    expect(playerTwo.opponent).toBe(undefined);

})

test('Player shot opponent ship', ()=>{
    const boardOne = new Gameboard();
    const boardTwo = new Gameboard();
    const playerOne = new Player(boardOne);
    const playerTwo = new Player(boardTwo, playerOne);
    const ship = new Ship(3)
    playerTwo.board.placeShip(ship, [4,4], 'right')
    playerOne.makeMove([4,4])
    expect(playerTwo.board.tiles[4][4].numHits).toBe(1)
    expect(playerTwo.board.tiles[4][5].numHits).toBe(1)
    playerOne.makeMove([4,5])
    expect(playerTwo.board.tiles[4][4].numHits).toBe(2)
    expect(playerTwo.board.tiles[4][5].numHits).toBe(2)
})

test('Opponent makes a random move', ()=>{
    const boardOne = new Gameboard();
    const boardTwo = new Gameboard();
    const playerOne = new Player(boardOne);
    const playerTwo = new Player(boardTwo, playerOne);
    expect(playerOne.board.getPossibleMoves().length).toBe(100)
    playerTwo.makeMove()
    expect(playerOne.board.getPossibleMoves().length).toBe(99)
    playerTwo.makeMove()
    expect(playerOne.board.getPossibleMoves().length).toBe(98)
})