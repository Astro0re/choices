// MainScene.ts
// This file defines the MainScene class, which contains the main gameplay logic.
// It is responsible for rendering the player and enemies, as well as handling game updates.

import { Scene } from 'some-game-engine'; // Importing the base Scene class from the game engine
import { Player } from '../entities/Player'; // Importing the Player class
import { Enemy } from '../entities/Enemy'; // Importing the Enemy class

export class MainScene extends Scene {
    private player: Player; // Instance of the Player class
    private enemies: Enemy[]; // Array to hold enemy instances

    constructor() {
        super(); // Call the constructor of the base Scene class
        this.player = new Player(); // Initialize the player
        this.enemies = []; // Initialize the enemies array
        this.createEnemies(); // Call method to create enemies
    }

    // Method to create enemies and add them to the enemies array
    private createEnemies(): void {
        for (let i = 0; i < 5; i++) { // Create 5 enemies
            const enemy = new Enemy(); // Create a new enemy instance
            this.enemies.push(enemy); // Add the enemy to the array
        }
    }

    // Method to update the scene
    public update(deltaTime: number): void {
        this.player.update(deltaTime); // Update the player
        this.enemies.forEach(enemy => enemy.update(deltaTime)); // Update each enemy
    }

    // Method to render the scene
    public render(context: CanvasRenderingContext2D): void {
        this.player.render(context); // Render the player
        this.enemies.forEach(enemy => enemy.render(context)); // Render each enemy
    }
}