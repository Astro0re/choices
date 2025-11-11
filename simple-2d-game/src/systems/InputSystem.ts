class InputSystem {
    private keys: Set<string>; // Set to store currently pressed keys

    constructor() {
        this.keys = new Set(); // Initialize the keys set
        this.setupInputListeners(); // Set up event listeners for keyboard input
    }

    // Method to set up event listeners for keydown and keyup events
    private setupInputListeners(): void {
        window.addEventListener('keydown', (event) => {
            this.keys.add(event.key); // Add the pressed key to the set
        });

        window.addEventListener('keyup', (event) => {
            this.keys.delete(event.key); // Remove the released key from the set
        });
    }

    // Method to check if a specific key is currently pressed
    public isKeyPressed(key: string): boolean {
        return this.keys.has(key); // Return true if the key is in the set
    }

    // Method to clear the input state (optional, for resetting input)
    public clearInput(): void {
        this.keys.clear(); // Clear all keys from the set
    }
}

export default InputSystem; // Export the InputSystem class for use in other modules