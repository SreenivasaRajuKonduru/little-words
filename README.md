# Little Words — GitHub Pages publisher edition

## Where are tab customizations?
Open **config.js** in your GitHub repository. Edit `visibleTabs` for main tabs and `visibleCategories` for learning sub-tabs (true = show; false = hide), then click **Commit changes**. This is the publisher control; there is no public Grown-ups tab by default.

## What to edit
- **config.js** — public tabs, learning category sub-tabs, and visitor-editing settings. Keep `allowVisitorEditing: false` and `allowVisitorTabChanges: false` for read-only visitors.
- **family.js** — the child's name, relatives' names, and image paths. Replace `name: ''` with a real name. To use an image, upload it into `images/` and set `image: 'images/mommy.jpg'`. Public GitHub photos and names are visible to everyone.
- **words.js** — learning words, categories, emoji and meanings. Letters are uppercase A–Z.
- **stories.js** — Bible lesson titles, illustrations (emoji), and narrated text.
- **index.html** — app layout and logic; normally no changes needed.

## Upload to GitHub Pages
1. Extract this ZIP. Upload **all the files and the images folder** into the root of a public repository (not the ZIP itself).
2. Repository → Settings → Pages → Deploy from a branch → main → / (root) → Save.
3. Site URL: `https://USERNAME.github.io/REPOSITORY/`.
4. Later, edit one of the `.js` files directly on GitHub, click **Commit changes**, and refresh the published website after deployment.

## Important limitations
This is a static, public website, not an authenticated admin dashboard. Visitors cannot publish changes to the GitHub repository unless granted GitHub write access. Any data committed to a public repository, including names and pictures, is public. The code is viewable by anyone. Changes to a device's browser storage do not synchronize to other devices. Browser speech uses the device's installed voices. For reliable updates after publishing, reload the website; browsers may cache files.

**Note:** The previous local-only family-name and vocabulary edits are intentionally not used in this publisher edition; GitHub files are the published source of truth. Copy wanted names/words into `family.js`/`words.js` before replacing the previous site.

## Show or hide learning sub-tabs
In `config.js`, set `visibleCategories` entries to `false` to hide individual category buttons in Learn and Meanings (for example, `'Vehicles': false`). Practice also excludes words from hidden categories. The learning content remains in `words.js` and can be shown again by changing the setting to `true`. Keep at least one category enabled.


### Version 3 teaching adjustments
- ABCs display uppercase A–Z; tapping speaks the letter only (no “capital”).
- Numbers: `maxNumber: 5` in `config.js` shows 1–5. Increase later.
- Animals start Dog, Cat, Fish, Bird.
- Yellow uses a vivid yellow swatch; Table uses `images/table.svg`.
- Removed Soap; replaced Jacket with Pants; changed Help and Please visuals.
- `words.js` contains the vocabulary and default symbols. To replace a symbol, edit the entry or add an image mapping to `pictureOverrides`; upload the corresponding image to `images/`.
- Browser/device emoji designs vary; review the published page on the child's actual device.
