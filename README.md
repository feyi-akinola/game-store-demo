## Try it out
[🚀 Live Preview](game-store-demo-c2uvm5oav-feyisayo-akinolas-projects.vercel.app)

<div align="center">
  <img src="./public/showcase/image-1.png" alt="Game Store Demo banner" />
  
  <h1>Game Store Demo</h1>
  
  <p>
    React + TypeScript single-page demo for a gaming e-commerce landing experience.<br/>
    Built with Vite, Tailwind CSS v4, and SVGR for SVGs.
  </p>
  
  <p>
    <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=222" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwindcss&logoColor=white" />
  </p>
</div>

## Overview

Game Store Demo is a front-end showcase of a modern landing page for a gaming e-commerce site. It demonstrates a clean component structure with a navbar, search, game listings, and rating UI.

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite`)
- **SVGs**: SVGR (`vite-plugin-svgr`) + `lucide-react` icons
- **Linting**: ESLint

> Note: Mobile responsiveness is a work-in-progress.

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm (this repo includes `package-lock.json`)

### Installation
```bash
npm install
```

### Development
Start the dev server with hot reload:
```bash
npm run dev
```
The app will be available at the URL printed in your terminal (typically `http://localhost:5173`).

### Build
Create a production build:
```bash
npm run build
```
Preview the built app locally:
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## Project Structure

```txt
.
├─ public/               # Static assets
│  ├─ images/            # Marketing images (jpg/webp)
│  └─ showcase/          # Screenshots / banners
├─ src/
│  ├─ assets/            # Local SVGs
│  │  └─ svg/
│  ├─ components/        # Reusable UI components (SearchBar, StarRating)
│  ├─ sections/          # Page sections (NavBar, Main)
│  ├─ App.tsx            # Root app component
│  ├─ main.tsx           # React root entry
│  └─ index.css          # Tailwind styles entry
├─ index.html            # Vite HTML entry
├─ vite.config.ts        # Vite + React + Tailwind + SVGR plugins
├─ tsconfig*.json        # TypeScript configs
└─ eslint.config.js      # ESLint configuration
```

## Key Implementation Notes

- **Tailwind CSS v4**: Integrated via `@tailwindcss/vite` plugin in `vite.config.ts`. Utilities are available out of the box—no separate Tailwind config file needed.
- **SVGR**: Import SVGs as React components via `vite-plugin-svgr`.
- **Icons**: `lucide-react` is available for vector icons.

## Available Scripts

From `package.json`:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## Deployment

This is a static SPA. After `npm run build`, the production-ready files in `dist/` can be deployed to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Acknowledgements

Bootstrapped with the official Vite + React + TypeScript setup. Tailwind v4 integration via the official Vite plugin. SVG handling via SVGR. Icons provided by `lucide-react`.


