
const initGameState = require("./gameState")
const { makeId } = require("./utils");

const gameRooms = {}
const gameState = {}

function gameLoop(gameState) {

}

function artilleryBattleSocketEventHandler(socket, io) {
    socket.on('keydown', handleKeyDown);
    socket.on('createGame', handleCreateGame);
    socket.on('joinGame', handleJoinGame);
    socket.on('moveCannonTrajectory', handleMoveCannonTrajectory);
    socket.on('moveTank', handleMoveTank);
    socket.on('fireMissile', handleFireMissile);


    function handleKeyDown(key) {
        console.log(key);
    }

    function handleCreateGame(event) {
        console.log("game created: ", event);
        console.log("socket id: ", socket.id);
        
        roomCode = makeId(5); // create room id // TODO: CHECK TO MAKE SURE IT DOESNT ALREADY EXIST!
        gameRooms[socket.id] = roomCode;
        gameState[roomCode] = initGameState();
        socket.join(roomCode);
        socket.number = 1;
        socket.emit('create-game-success', { gameCode: roomCode, playerNumber: 1 });
    }

    function handleJoinGame(gameCode) {
        console.log("gameCode:", gameCode);
        if (!gameCode) {
            socket.emit("unknown-game");
        }

        const room = io.sockets.adapter.rooms.get(gameCode);

        if (!room || room.size === 0 || !gameState[gameCode]) {
            socket.emit("unknown-game");
            return;
        } else if (room.size > 1) {
            socket.emit("too-many-players");
            return;
        }

        gameRooms[socket.id] = gameCode;

        socket.join(gameCode);

        socket.number = 2;

        socket.emit("join-game-success", {playerNumber: 2, gameCode: gameCode});

        console.log("game joined: ", gameCode);

        gameLoop(gameCode, io);
    }

    function handleMoveCannonTrajectory(key) {
        console.log(key);
    }

    function handleMoveTank(key) {
        console.log(key);
    }

    function handleFireMissile(key) {
        console.log(key);
    }
}

module.exports = {
    gameLoop,
    artilleryBattleSocketEventHandler,
    initGameState
}