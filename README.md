# Mochi’s Little World · Trelum

A cozy, English-language virtual bunny game. Feed and cuddle Mochi, play a four-pair memory game, earn pretend coins, decorate the room and collect friendship badges.

## Play

Open index.html, or serve this folder with a local static web server. No build step or dependencies are required. Layout adapts to phones and desktop screens.

- Tap the bunny for a cuddle; use Snack time and Cozy nap for care.
- Complete Snack match to earn 12 coins, plus a once-per-adventure task bonus.
- Spend game coins on furniture and a strawberry hat. Owned items can be shown or hidden without paying again.
- Complete four little moments to unlock the next adventure. Adventures advance only when you choose; nothing worsens while you are away.
- Progress saves in this browser. Settings can download or restore a JSON backup. Clearing browser data removes the local save; saves do not sync across devices.

No accounts, real payments, ads, analytics or remote AI calls. All gameplay runs locally. The Trelum logo belongs to the brand owner.

## Project scope

This is a prepared product showcase, not a claim that a particular child made it. The core ideas—buttons updating numbers, conditions, shuffled matching cards, ownership lists and saving data—can be built incrementally by a child with guidance and AI support. The polished presentation is a demonstration of what a finished project can become.

## Verification

Run `node --test state.test.cjs` in the source folder. Tests cover care limits, once-per-adventure bonuses, purchasing and ownership, adventure gating, save validation and match rewards. Browser checks cover a completed memory round, shopping, persistent progress and a 390px mobile layout.

## Hosting

A static GitHub Pages site, published from main / root. The deployment folder contains the game and brand assets only.
