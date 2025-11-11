// This file contains utility functions that can be used throughout the game.

// Function to generate a random number between a minimum and maximum value
export function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min; // Calculate and return the random number
}

// Function to clamp a value between a minimum and maximum range
export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value)); // Ensure the value stays within the specified range
}

// Function to interpolate between two values
export function lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t; // Calculate and return the interpolated value
}

// Function to check if two rectangles overlap (collision detection)
export function isColliding(rectA: { x: number, y: number, width: number, height: number }, rectB: { x: number, y: number, width: number, height: number }): boolean {
    return rectA.x < rectB.x + rectB.width &&
           rectA.x + rectA.width > rectB.x &&
           rectA.y < rectB.y + rectB.height &&
           rectA.y + rectA.height > rectB.y; // Return true if rectangles overlap
}