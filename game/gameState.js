// Author: Nicholas Eby
// Date Created: August 1, 2023
// gameState.js

function initGameState() {
    const gameState = {
        turn: true,
        player1: {
            x: 0,
            y: 0,
            hp: 3,
            missile: {
                x: 0,
                y: 0,
            },
        },
        player2: {
            x: 0,
            y: 0,
            hp: 3,
            missile: {
                x: 0,
                y: 0,
            },
        }
    }
    return gameState
}

module.exports = initGameState;