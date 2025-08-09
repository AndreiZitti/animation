# Anime.js Animation Library

A comprehensive collection of reusable anime.js animations organized into categories, built with React and TypeScript.

## Features

- 🎯 **5 Categories** of animations:

  - Core Transforms (Pop & Settle, Slide & Fade, Pulse Loop, Rotate-in Badge)
  - Staggered Lists & Grids (Row Reveal, Center Burst, Wave Grid, Color Sweep)
  - Timelines & Choreographies (Hero Entrance, Card Flip, Toast, Modal)
  - SVG Line Drawing (Signature Stroke, Blueprint, Dashed Trace, Circuit Highlight)
  - SVG Morphing (Blob Morph, Play/Pause Icons, Heart Like, Loader Ripple)

- 🎨 **20+ Animation Components** ready to use
- 🎮 **Interactive Demos** - hover to trigger animations
- 🔧 **TypeScript** support with proper typing
- 📦 **Modular** - import only what you need
- 🎯 **Production Ready** - optimized and tested

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the animation library in action.

## Usage

### Import Categories

```typescript
import {
  CoreTransforms,
  Staggered,
  Timelines,
  SvgLineDrawing,
  SvgMorphing,
} from "./src";
```

### Import Individual Components

```typescript
import { PopAndSettle } from "./src/categories/coreTransforms";

// Use in your React app
<PopAndSettle auto={true} />;
```

### Use the Complete Library

```typescript
import { categories } from "./src";

// Render all categories
categories.forEach((category) => {
  category.demos.forEach((demo) => {
    // Render demo.Component
  });
});
```

## Component Props

Each animation component accepts an optional `auto` prop:

- `auto={false}` (default): Animation triggers on hover
- `auto={true}`: Animation plays automatically

## Project Structure

```
src/
├── types.ts              # TypeScript definitions
├── lib/
│   ├── AnimationCard.tsx  # Reusable card wrapper
│   └── useHoverPlay.ts    # Custom hook for hover interactions
├── categories/
│   ├── coreTransforms.tsx
│   ├── staggered.tsx
│   ├── timelines.tsx
│   ├── svgLineDrawing.tsx
│   └── svgMorphing.tsx
├── App.tsx               # Demo application
├── main.tsx              # Entry point
└── index.ts              # Barrel exports
```

## Key Features

- **Anime.js Integration**: Uses the real anime.js API with `anime()`, `anime.timeline()`, `anime.stagger()`
- **SVG Animation Support**: Line drawing and path morphing with compatible SVG paths
- **Responsive Design**: Grid layouts that adapt to different screen sizes
- **Clean Architecture**: Well-organized, modular code structure
- **Type Safety**: Full TypeScript support with proper typing

## Build

```bash
npm run build
```

## Dependencies

- [anime.js](https://animejs.com/) - JavaScript animation library
- [React](https://reactjs.org/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool

## License

MIT
