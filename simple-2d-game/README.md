# Simple 2D Game

## Overview
This project is a simple 2D game built using TypeScript and Vite. It features a basic game loop, multiple scenes, and player and enemy entities. The game is designed to be easily extensible and serves as a foundation for further development.

## Project Structure
```
simple-2d-game
├── public
│   └── index.html          # Main HTML entry point for the game
├── src
│   ├── main.ts            # Entry point of the game, initializes the game engine
│   ├── game.ts            # Manages overall game state and game loop
│   ├── scenes              # Contains different game scenes
│   │   ├── BootScene.ts   # Loads initial assets and sets up the environment
│   │   ├── PreloadScene.ts # Loads game assets before gameplay
│   │   └── MainScene.ts    # Main gameplay logic
│   ├── entities            # Contains game entities
│   │   ├── Player.ts      # Represents the player character
│   │   └── Enemy.ts       # Represents enemy characters
│   ├── systems             # Contains game systems
│   │   ├── InputSystem.ts  # Handles user input
│   │   └── PhysicsSystem.ts # Manages physics calculations
│   ├── utils               # Contains utility functions
│   │   └── helpers.ts      # General helper functions
│   └── types               # TypeScript interfaces and types
│       └── index.ts        # Exports types for type safety
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── vite.config.ts          # Vite configuration file
└── README.md               # Project documentation
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd simple-2d-game
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Game
To start the development server, run:
```
npm run dev
```
This will launch the game in your default web browser.

## Building for Production
To build the project for production, run:
```
npm run build
```
This will create a `dist` folder with the production-ready files.

## Gameplay
- The player controls a character that can move around the screen.
- Enemies will appear and interact with the player.
- The game includes multiple scenes for loading assets and gameplay.

## Contributing
Feel free to submit issues or pull requests to improve the game. Contributions are welcome!

## License
This project is licensed under the MIT License. See the LICENSE file for details.