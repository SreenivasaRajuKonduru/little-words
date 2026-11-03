/*
  FIND YOUR VOICE — SUPERVISOR'S PAGE CONTROLS
  ------------------------------------------------
  Edit this file in GitHub to choose which pages EVERY visitor sees.

  HOW TO EDIT:
  1. Open site-settings.js in your GitHub repository.
  2. Click the pencil (Edit this file).
  3. Change ONLY true or false next to the page you want.
       true  = ON  (show the page)
       false = OFF (hide the page)
  4. Click Commit changes. Wait for GitHub Pages to publish.
  5. Refresh the website. If this device still shows an old selection,
     open Grown-up controls and click "Use published defaults".

  EXAMPLE: To hide Food & Drinks, change:
       food: true,
     to:
       food: false,

  EXAMPLE: To show it again, change food: false back to food: true.

  IMPORTANT:
  - Keep the commas, braces, page names, and 'const SITE_SETTINGS' intact.
  - Do not put quotes around true or false.
  - Keep at least ONE learning page ON.
  - The on-screen Grown-up switches change only that browser until you
    download site-settings.js and commit it to GitHub.
  - Browser-specific switches OVERRIDE this file until "Use published defaults".
  - These are visibility settings, not password protection. The source files
    remain accessible in a public GitHub repository.
*/
const SITE_SETTINGS = {
  pages: {
    family: true,     // 👨‍👩‍👦 Mommy, Daddy, Me / Talen
    food: true,       // 🥛 Food & Drinks
    alphabet: true,   // 🔤 Alphabet A–Z
    numbers: true,    // 🔢 Numbers 0–5
    colors: true,     // 🎨 Colors including White and Black
    shapes: true,     // 🔺 Circle, Square, Triangle, Rectangle
    clothes: true,    // 👕 Clothes including Glasses
    home: true,       // 🏠 Inside the House
    daily: true       // 💬 Everyday Words
  }
};
