// PreloadScene.ts
// This file defines the PreloadScene class, which is responsible for loading game assets before transitioning to the main gameplay scene.

import { Scene } from 'phaser'; // Importing the Scene class from Phaser framework

export class PreloadScene extends Scene {
    constructor() {
        super({ key: 'PreloadScene' }); // Setting the key for this scene
    }

    preload() {
        // Load game assets here
        this.load.image('player', 'assets/player.png'); // Load player image
        this.load.image('enemy', 'assets/enemy.png'); // Load enemy image
        this.load.audio('backgroundMusic', 'assets/music.mp3'); // Load background music
        // Add more assets as needed
    }

    create() {
        // Once assets are loaded, transition to the main scene
        this.scene.start('MainScene'); // Start the MainScene
    }
}