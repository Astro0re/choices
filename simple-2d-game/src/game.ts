// game.ts
// This file manages the overall game state, including the current scene and game loop.
// It handles updating and rendering the game.

import { BootScene } from './scenes/BootScene';
import { PreloadScene } from './scenes/PreloadScene';
import { MainScene } from './scenes/MainScene';

class Game {
    private currentScene: any; // Holds the current active scene
    private lastTime: number = 0; // Tracks the last frame time

    constructor() {
        this.currentScene = new BootScene(this); // Initialize with BootScene
    }

    // Start the game loop
    public start() {
        requestAnimationFrame(this.gameLoop.bind(this)); // Bind the game loop to the current context
    }

    // Main game loop
    private gameLoop(timestamp: number) {
        const deltaTime = timestamp - this.lastTime; // Calculate time since last frame
        this.lastTime = timestamp; // Update lastTime for the next frame

        this.update(deltaTime); // Update the current scene
        this.render(); // Render the current scene

        requestAnimationFrame(this.gameLoop.bind(this)); // Request the next frame
    }

    // Update the current scene
    private update(deltaTime: number) {
        if (this.currentScene.update) {
            this.currentScene.update(deltaTime); // Call update method of the current scene
        }
    }

    // Render the current scene
    private render() {
        if (this.currentScene.render) {
            this.currentScene.render(); // Call render method of the current scene
        }
    }

    // Change the current scene
    public changeScene(newScene: any) {
        this.currentScene = new newScene(this); // Instantiate the new scene
    }
}

// Export the Game class for use in other modules
export default Game;