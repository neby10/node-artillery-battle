# Artillery Battle: My Notes

## To Do List
- create game state
    - define data structure for game state
        - player position, bullets, cannon position and trajectory
- set up game canvas
    - add tank.png, cannon.png, hill and other scenery
    - player scores and other game info
- add socket events for game and update game state accordingly
    - turns basic logic
    - missile firing
    - handle player movements
        - tank movement
        - cannon trajectory
    - health display
- synchronize game state, emit game state updates to all connected clients regularly
- ensure that player movements and actions are validated
- collision detection logic to check for collision
- handle game over conditions
    - 3 hits? or depending on proximity of hits is determines damage?
    - broadcast game result and ability to play again
- implement client side logic to handle user input and send events to server

## Later
- Test and debug: Test your game thoroughly to identify and fix any bugs or issues.
- Deploy


## Completed
- Friday August 4, 2023
    - 
- Thursday August 3, 2023
    - adding create game and join game socket event listeners
- Wednesday August 2, 2023
    - added makeId utility function for generating random id's, initGameState function
    - create artilleryBattleSocketEventHandler
    - simplified pages to only Home and About
    - added document event listener for keys, need to implement logic on server yet
- Tuesday August 1, 2023
    - installed socket.io
    - handle basic socket connections on server and client with socket.io
    - css to make minimum view height the full screen
    - defined starting game state
- Monday July 31, 2023
    - Initial project setup
    - initialized with npm and git, installed express
    - installed ejs as templating engine