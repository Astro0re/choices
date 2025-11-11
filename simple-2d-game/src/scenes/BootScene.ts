// BootScene.ts
// This file defines the BootScene class, responsible for loading initial assets and setting up the game environment.

import { Scene } from 'phaser'; // Importing the Scene class from Phaser framework

export class BootScene extends Scene {
    constructor() {
        super({ key: 'BootScene' }); // Setting the key for this scene
    }

    preload() {
        // Load any assets required for the game here
        // Example: this.load.image('logo', 'assets/logo.png');
    }

    create() {
        // Set up the game environment here
        // Example: this.add.image(400, 300, 'logo'); // Add a logo image to the scene

        // Transition to the PreloadScene after setup
        this.scene.start('PreloadScene'); // Start the PreloadScene
    }
}