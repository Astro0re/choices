// Player.ts
// This file defines the Player class, which represents the player character in the game.

class Player {
    // Player's position on the canvas
    position: { x: number; y: number };
    
    // Player's velocity for movement
    velocity: { x: number; y: number };

    // Constructor to initialize the player with default values
    constructor() {
        this.position = { x: 100, y: 100 }; // Starting position
        this.velocity = { x: 0, y: 0 }; // Initial velocity
    }

    // Method to update the player's position based on velocity
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    // Method to render the player on the canvas
    render(context: CanvasRenderingContext2D) {
        context.fillStyle = 'blue'; // Color of the player
        context.fillRect(this.position.x, this.position.y, 50, 50); // Draw the player as a square
    }

    // Method to set the player's velocity based on input
    setVelocity(x: number, y: number) {
        this.velocity.x = x;
        this.velocity.y = y;
    }
}

export default Player; // Export the Player class for use in other modules