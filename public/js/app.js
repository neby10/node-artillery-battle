// Connect to the Socket.io server
const socket = io();

// getElementById variables
const createGameButton = document.getElementById("createGameButton");
const joinGameButton = document.getElementById("joinGameButton");
const lobbyScreen = document.getElementById("lobbyScreen");
const gameCode = document.getElementById("gameCode");
const gameScreen = document.getElementById("gameScreen");
const gameCodeDisplay = document.getElementById("gameCodeDisplay");
const canvas = document.getElementById("canvas");
// Event Listeners
createGameButton.addEventListener('click', handleCreateGame);
joinGameButton.addEventListener('click', handleJoinGame);

// Client Variables
gameState = {
    turn: true,
    player1: { x: 0, y: 0, hp: 3, missile: { x: 0, y: 0, }, },
    player2: { x: 0, y: 0, hp: 3, missile: { x: 0, y: 0, }, },
}
playerVars = {
    playerNumber: 0,
    gameCode: "",
}

// Add event listeners and emit data as needed
socket.on('connect', () => {
    console.log('Connected to server');
});

// Listen for server events and update the game state accordingly
socket.on('gameState', (data) => {
    console.log(data);
})

socket.on('create-game-success', (data) => {
    playerVars.gameCode = data.gameCode;
    playerVars.playerNumber = data.playerNumber;
    gameCodeDisplay.innerHTML = playerVars.gameCode;
    console.log(playerVars);
});

socket.on('join-game-success', (data) => {
    console.log("join game success");
    playerVars.gameCode = data.gameCode;
    playerVars.playerNumber = data.playerNumber;
    gameCodeDisplay.innerHTML = playerVars.gameCode;
    console.log(playerVars);
});

socket.on('unknown-game', () => {
    console.log("unknown game");
});

socket.on('too-many=players', () => {
    console.log("too many players");
});

// listen for keys
document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        console.log(event.key);
        socket.emit("moveCannonTrajectory", event.key)
    } else if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
        console.log(event.key);
        socket.emit("moveTank", event.key);
    } else if (event.key == " ") {
        console.log(event.key);
        socket.emit("fireMissile", event.key);
    }
})

function handleCreateGame(event) {
    console.log("handleCreateGame");
    lobbyScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    socket.emit("createGame", event);
}

function handleJoinGame(event) {
    console.log("handleJoinGame");
    lobbyScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    const gc = gameCode.value;
    gameCodeDisplay.innerHTML = gc;
    socket.emit("joinGame", gc);
}