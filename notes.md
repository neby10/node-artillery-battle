# Artillery Battle: My Notes

## To Do List
- 


Create an Express server: Set up a basic Express server to serve your game's client-side files and handle WebSocket connections using Socket.io.
Set up Socket.io: Configure Socket.io to work with your Express server. Make sure to handle WebSocket connections and disconnections appropriately.
Manage game state: Define the data structure that represents the current game state, such as player positions, bullets, and any other relevant game data.
Handle player movements: Implement event listeners on the server to receive player movement events from clients and update the game state accordingly.
Synchronize game state: Emit game state updates to all connected clients regularly. This way, all players receive real-time updates about the game's current state.
Handle player actions: Implement event listeners for player actions, such as shooting bullets or other in-game events, and update the game state accordingly.
Validate player movements and actions: Ensure that you validate player movements and actions to prevent cheating and maintain a fair gaming experience.
Collision detection: Implement collision detection logic to check for collisions between players, bullets, and other objects in the game.
Handle game over conditions: Implement logic to detect when the game is over (e.g., when a player reaches a certain score or survives for a specific time) and broadcast the game result to all players.
Client-side logic: Implement the necessary JavaScript code on the client-side to handle user input (e.g., keyboard controls) and send events to the server via Socket.io.
Create the game interface: Design and build the user interface to display the game canvas, player information, scores, and any other relevant game elements.

## Later
- Test and debug: Test your game thoroughly to identify and fix any bugs or issues.
- Deploy


## Completed
- Friday August 4, 2023
- Thursday August 3, 2023
- Wednesday August 2, 2023
    - 
- Tuesday August 1, 2023
    - installed socket.io
- Monday July 31, 2023
    - Initial project setup
    - initialized with npm and git, installed express
    - installed ejs as templating engine