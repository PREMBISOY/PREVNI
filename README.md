# Avni ♥ Prem — React + Vite Love Site

This React + Vite project is ready to run. It uses Tailwind CSS and Framer Motion for smooth animations.

## Before you start (portable Node on Windows)
You've downloaded a portable Node zip. Extract that to e.g. `C:\node-portable`.

## Quick start using portable Node (Windows CMD)
1. Extract this project somewhere, e.g. `C:\Users\You\Projects\avni-prem`.
2. Open Command Prompt.
3. Run these commands (replace paths as needed):

```
cd C:\path\to\avni-prem
set PATH=C:\path\to\node-portable;%PATH%
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Change password
Edit `src/config.js` and modify `SITE_PASSWORD` to whatever you want.

## Replacing images & music
- Images are in `assets/images/` — replace placeholders with your files (same names recommended).
- Put a background music MP3 at `assets/audio/bg-music.mp3`.

## Build for production
```
set PATH=C:\path\to\node-portable;%PATH%
npm run build
```
Upload the `dist/` folder contents to GitHub Pages / Netlify.

