// This file exports TypeScript interfaces and types used throughout the project,
// providing type safety for entities, scenes, and game states.

export interface Vector2 {
    x: number; // The x-coordinate of the vector
    y: number; // The y-coordinate of the vector
}

export interface GameObject {
    position: Vector2; // The position of the game object
    velocity: Vector2; // The velocity of the game object
    update(deltaTime: number): void; // Method to update the game object state
    render(context: CanvasRenderingContext2D): void; // Method to render the game object
}

export interface Scene {
    preload(): void; // Method to preload assets for the scene
    create(): void; // Method to create the scene
    update(deltaTime: number): void; // Method to update the scene
    render(context: CanvasRenderingContext2D): void; // Method to render the scene
}

export interface GameState {
    currentScene: Scene; // The current active scene in the game
    isRunning: boolean; // Indicates if the game is currently running
}