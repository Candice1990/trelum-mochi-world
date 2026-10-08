# Mochi · Snack Catch — Trelum

Play: https://candice1990.github.io/trelum-mochi-world/

A single-rule arcade game: move the cat and its bowl left and right, catch falling fish-shaped treats, and try to beat your best. Three missed treats ends the round. Speed increases every five catches.

Mouse or arrow keys on desktop; swipe on a phone. On-screen direction buttons also work. Pause and replay are available. Switching tabs pauses the game automatically. Best score saves locally on this browser; no accounts, purchases, analytics or remote API calls.

The lifelike cat uses three AI-generated transparent poses with breathing, paw and jump animations. It is a 2D animated asset with photographic depth, not a real-time 3D model. Trelum brand assets are supplied by the brand owner. This is a prepared product showcase, not a submitted child’s project.

## Files and verification

- index.html: game interface
- style.css: responsive stage and character animation
- state.js: scoring, collisions, spawning, difficulty and score validation
- app.js: input, animation, sound, pause, result and local best score
- cat-poses.png: three photographic cat poses, generated using the built-in image generation tool

Open index.html or serve this folder with a static server. No build step or dependencies.

Source tests: `node --test state.test.cjs`. Browser QA checks real catches, increasing scores, missed catches, game over, replay, pause and persistent best score. Mobile layouts checked at 390px width. The old pet-care version is kept in the local archive-v1 folder and is not deployed.

## Cat image generation prompt

Built-in image generation; transparent background. Prompt: “Three separate full-body poses of the same realistic young ginger-and-white domestic cat, in three equal-width cells: sitting front-facing, crouched with one forepaw lifted, and an energetic hop with both front paws lifted. Natural anatomy, lifelike amber eyes, fine fur strands, photographic three-dimensional volume, warm studio light from upper left. Fixed camera, identical character size, all paws and tail inside the frame. Transparent background, no floor, props, text, clothing or cartoon styling.”

Original image retained in the source project at assets/cat-poses.png. GitHub Pages publishes the flat deployment folder from main / root.
