# 🏁 Find Your Voice —  Complete Guide

A simple, colorful learning website for a young child. **No server or paid hosting is needed**: GitHub Pages hosts the static website. This project is a **modular frontend**, not separate networked microservices. Each learning page is maintained independently.

## 1. Files and what to edit

```text
index.html                  Main website entry point — normally DO NOT edit
site-settings.js            Turn learning pages ON or OFF for everyone
pages/
  family.js                 Family cards, names, spoken names, photo paths
  food.js                   Food & Drinks words and emoji
  alphabet.js               A–Z and alphabet illustrations
  numbers.js                Numbers 0–5
  colors.js                 Colors including White and Black
  shapes.js                 Circle, Square, Triangle, Rectangle
  clothes.js                Clothes including Glasses
  home.js                   Household words and embedded illustrations
  daily.js                  Everyday words and embedded illustrations
assets/
  app.js                    Shared speech, navigation, and on-device controls
  styles.css                Colors, card layout, mobile design
images/
  family/                    ONLY shared family photos belong here
README.md                   This guide
```

**Why only one image folder?** Most learning cards already have their emoji, colored shapes, or embedded SVG illustration **inside their own page `.js` file**. They don't need separate image files. The only externally stored pictures are family photos, which your supervisor can replace over time.

## 2. First-time publishing to GitHub

1. Download the ZIP and **extract it** (do not upload the ZIP itself).
2. Open your existing GitHub repository on the **Code** tab.
3. Choose **Add file → Upload files** and upload the extracted files and folders to the **repository root** (alongside `index.html`).
4. Commit changes. Remove any obsolete files from the previous version (`config.js`, `words.js`, `stories.js`, `sw.js`, etc.) once you've verified they're no longer needed. Keep any photos you want to retain.
5. In **Settings → Pages**, use **Deploy from a branch**, branch **main**, folder **/(root)**.
6. Wait for the Pages deployment to complete and refresh the website. For stale pages, try a private window and clear old site/service-worker cache if necessary.

## 3. Show or hide pages for EVERY visitor

Open **`site-settings.js`** in GitHub, click the pencil, and edit `true`/`false`:

```js
const SITE_SETTINGS = {
  pages: {
    family: true,    // show family
    food: false,     // hide food (example)
    alphabet: true,
    numbers: true,
    colors: true,
    shapes: true,
    clothes: true,
    home: true,
    daily: true
  }
};
```

`true` means visible, `false` means hidden. Keep at least one page enabled. Commit, wait for GitHub Pages, then refresh. **Grown-up controls** on the website can also switch pages instantly **for that browser only**. If those local settings override GitHub, click **Use published defaults**. The website can export a new `site-settings.js` for uploading to GitHub. This is not password protection; hidden content remains in the public source files.

## 4. Add Mommy, Daddy, and Talen's photos

1. In GitHub, open **`images/family/`**, choose **Add file → Upload files**.
2. Upload images named `mommy.jpg`, `daddy.jpg`, and `talen.jpg`. Use JPG, PNG, or WebP; the extension in the code **must match** the uploaded file.
3. Open **`pages/family.js`**. The first three entries look like:

```js
const FAMILY_MEMBERS = [
  {id:'mom', name:'Mommy', say:'Mommy', emoji:'👩', photo:'images/family/mommy.jpg'},
  {id:'dad', name:'Daddy', say:'Daddy', emoji:'👨', photo:'images/family/daddy.jpg'},
  {id:'me', name:'Talen', say:'Tay-len', emoji:'🧒', photo:'images/family/talen.jpg'},
];
```

4. Commit. Refresh the website after publishing. **Until a photo exists**, the card displays its emoji fallback. You can leave `photo:''` to use only the emoji.

### Add more family members later

Upload `grandma.jpg` into `images/family/`, then add this entry **inside** `FAMILY_MEMBERS` before the closing `];`:

```js
{id:'grandma', name:'Grandma', say:'Grandma', emoji:'👵', photo:'images/family/grandma.jpg'},
```

You can add Grandpa, Uncle, Auntie, siblings, cousins, etc. Give each a unique `id` such as `grandpa` or `uncle_raj`. To change the displayed label, edit `name`; to change the spoken name, edit `say`. For example `name:'Grandma Susan', say:'Grandma'`.

**Privacy:** A public GitHub repository and public GitHub Pages site make uploaded family photos publicly accessible. Get permission before uploading, especially children's photos. Browser photo uploads in the Grown-ups area stay on that browser and do not sync to GitHub.

## 5. Edit Food, Clothes, Home, and Everyday Words

Open the matching file in **`pages/`**. Most word pages contain a simple list:

```js
const food = [
  ['Milk','🥛'],
  ['Juice','🧃'],
  ['Water','💧'],
  ['Candy','🍬'],
];
```

To add a word, add another row **before `];`**:

```js
['Grapes','🍇'],
```

To remove a word, delete its whole row. To reorder words, move the row. Keep quotes, square brackets, and commas. The speech engine automatically speaks the **first value** (`Grapes`) when the card is tapped. No recording needed.

- `pages/clothes.js`: Shirt, Pants, Socks, Shoes, Hat, Shorts, Glasses.
- `pages/home.js`: household words, with an embedded table illustration.
- `pages/daily.js`: everyday words, with embedded Hello, Bye-bye, Please, Thank you, Eat illustrations.
- For a different emoji, change the **second value**. For an embedded illustration, the corresponding page contains an `*_ART` mapping; ask ChatGPT to replace it rather than manually editing its long encoded string.

## 6. Alphabet pronunciation

`pages/alphabet.js` controls which letters and illustrative emoji appear. `assets/app.js` has a `letterSounds` mapping for spoken letter names. The card displays **A**, but the speech engine receives **`ay`**. Example:

```js
const letterSounds = {A:'ay', B:'bee', C:'see', /* ... */ Z:'zee'};
```

Browser voices vary, so **test A, H, I, R, W, and Z** on the actual device. If a letter sounds wrong, edit its spoken value in `assets/app.js`, or use a recorded audio approach for fully consistent pronunciation. Do not change uppercase display letters to lowercase just to fix speech.

## 7. Numbers, Colors, Shapes

- **Numbers:** `pages/numbers.js` currently renders 0–5. To extend the list, change `[0,1,2,3,4,5]` and check that the counting-dot layout still fits.
- **Colors:** `pages/colors.js` has `['Blue','#2879f7']` pairs. Add another color name and CSS color value in the same format.
- **Shapes:** `pages/shapes.js` has `['Circle','circle']` pairs. New shape types also require matching CSS in `assets/styles.css`; ask ChatGPT if unsure.

## 8. How to use the website with the child

Open the website on a phone, tablet, or computer. Choose a page tab. Tap a large card to hear its word or letter. Family photos and labels can be customized. Use **⚙️ Grown-up controls** to show or hide pages locally. To make the changes apply to **everyone**, update the repository files and commit. The website uses the device's browser speech voices; sound must be enabled.

## 9. What happens after editing GitHub?

**GitHub Pages is static.** It doesn't automatically push changes into an already-open browser tab. After committing, wait for deployment and **refresh** the site. On devices with saved local settings, click **Use published defaults** to pick up GitHub visibility changes. Browser-local photos and names can override published values on that one device.

## 10. Copy-and-paste ChatGPT prompt

> I manage a toddler learning website called Find Your Voice, hosted on GitHub Pages. I am not a programmer. I attached my latest complete ZIP. Please make these changes: **[WRITE CHANGES HERE]**. Keep the project modular: each learning page must remain in its own `pages/*.js` file. Keep all shared family photos in `images/family/`; keep illustrations and word lists for all other pages inside their own page JavaScript files. Preserve existing content, page ON/OFF controls, names, and pronunciation unless I request changes. Make the changes for me, check JavaScript syntax, provide a complete updated ZIP and simple GitHub upload instructions. Update this README when needed. Do not expose private photos or add unrelated categories.

## 11. Troubleshooting

- **Photo missing:** check filename, extension, exact capitalization, and the `photo` path in `pages/family.js`. The emoji should appear as a fallback.
- **New word missing:** confirm you edited the correct `pages/*.js` file and committed it.
- **Page hidden:** check `site-settings.js` and reset local page overrides under Grown-up controls.
- **Old website showing:** wait for deployment, refresh, and clear old site cache if needed.
- **Speech sounds wrong:** test a different browser voice or edit spoken text; pronunciation varies by device.
- **Broken page:** check commas/brackets in the edited JS file. Revert the last commit if necessary.
