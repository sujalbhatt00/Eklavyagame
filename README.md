# Just Divide - React Game

## Overview

Just Divide is a simple math puzzle game for kids, built with React. The player drags and drops number tiles onto a 4x4 grid, aiming to merge or divide tiles according to the rules. The game features a next-tile queue, a keep slot, a trash slot, and a timer. The UI is designed to be colorful and friendly for ages 7–12.

## Approach

- **React** was chosen for its component-based structure and easy state management.
- The grid is a 4x4 array, rendered with drag-and-drop support for tiles.
- Game logic (merging, dividing, scoring) is handled in small helper functions.
- The UI uses custom CSS for a playful look, with a cat mascot and bright colors.
- Assets (images/icons) are stored in the `/assets` folder for easy reference.

## Decisions Made

- Used functional React components for clarity and simplicity.
- Kept all game state in the main `App.jsx` and passed props to child components.
- Used localStorage to save the best score between sessions.
- Made the layout responsive for tablets and smaller screens.
- Added a "keep" slot and "trash" slot for more strategic play.

## Challenges

- Getting the drag-and-drop to work smoothly across browsers.
- Making the grid and side panels look good with different screen sizes.
- Handling merge/divide rules without bugs (especially edge cases).
- Balancing the UI so it looks fun but not cluttered.

## What I Would Improve

- Add sound effects and animations for merges/divisions.
- Make the game mobile-friendly with touch support.
- Add more levels or challenges for older kids.
- Improve accessibility (keyboard controls, better color contrast).
- Refactor some logic for easier testing and future features.

---

**How to run:**

```bash
npm install
npm run dev
```

See `index.html`, `main.jsx`, and `/assets` for the main files.