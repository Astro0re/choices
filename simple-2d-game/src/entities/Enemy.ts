class Enemy {
    // Position of the enemy on the canvas
    position: { x: number; y: number };
    
    // Velocity of the enemy, determining its movement speed
    velocity: { x: number; y: number };
    
    // Constructor to initialize the enemy's position and velocity
    constructor(x: number, y: number, vx: number, vy: number) {
        this.position = { x: x, y: y };
        this.velocity = { x: vx, y: vy };
    }

    // Method to update the enemy's position based on its velocity
    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    // Method to render the enemy on the canvas
    render(context: CanvasRenderingContext2D) {
        context.fillStyle = 'red'; // Color of the enemy
        context.fillRect(this.position.x, this.position.y, 50, 50); // Draw a square as the enemy
    }
}

export default Enemy;