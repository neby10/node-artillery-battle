// Connect to the Socket.io server
const socket = io();

// Add event listeners and emit data as needed
socket.on('connect', () => {
    console.log('Connected to server');

    // Emit player movement event to the server
    socket.emit('playerMove', { x: 100, y: 200 });
});

// Listen for server events and update the game state accordingly
socket.on('playerMoved', (data) => {
        console.log('Another player moved:', data);
        // Update the game state with the received data
});
