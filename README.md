# Find Your Voice — Speak & Learn

A simple, mobile-friendly six-page toddler learning website inspired by the supplied racing-theme HTML.

## Pages
1. Family: Mommy, Daddy, Talen (editable names and photos)
2. Food & Drinks: Milk, Juice, Water, Candy, Apple, Banana, Cookie, Bread, Ice Cream, Strawberry, Orange, Cheese
3. Alphabets: A–Z with large letters and matching picture symbols
4. Numbers: 0–5
5. Colors: Blue, Red, Green, Yellow
6. Shapes: Circle, Square, Triangle (the request repeated Circle; Triangle is used as the third distinct shape)

## Use
Open `index.html` in a browser, choose a page, and tap a picture or letter to hear it. On Family, expand **Grown-ups: Names & Photos** to enter the child's name, pronunciation, Mommy/Daddy names, or upload photos. Save names. Photos save automatically. The app uses the device's built-in speech synthesis and may require an initial tap.

## Important photo privacy
Photos selected through the website stay in that device's browser storage. They do not sync across devices, and clearing browser data can remove them. The shared ZIP does not contain family photos. If you want pictures to appear on every device, obtain family permission before publishing them in a public GitHub repository.

## Publish on GitHub Pages
Create a GitHub repository, upload `index.html` at the root, commit, then enable Settings → Pages → Deploy from branch → main → /(root). No build step or dependencies are needed.

## ChatGPT editing prompt
> I manage the Find Your Voice Speak & Learn website for a toddler. I am not technical. I attached the latest website ZIP. Please update only these items: [describe changes]. Preserve the six pages, tap-to-speak, racing theme, and editable family names/photos. Return a complete standalone HTML and a ready-to-upload ZIP, plus simple GitHub instructions. Do not turn on Bible or Spiritual lessons.

## Notes
This is a deliberately simplified six-page version, not the previous multi-category Little Words application. The A–Z cards use large picture symbols rather than external photo assets, so the whole site works offline.


## Picture Library (new)

Open **📷 Pictures** in the website. Select the learning page, select the word/tag (for example, **Food & Drinks → Milk**), choose an image, then click **Save image to card**. That image will automatically display on the matching card. Repeat for any family, food, alphabet, number, color, or shape card. The library lists saved pictures and has a **Remove** button to restore the original default illustration.

Family photos can also be added using **Family → Grown-ups: Names & Photos**. If both methods have pictures for the same family card, the Picture Library picture takes priority.

**Important:** Images added in the Picture Library are stored in the current browser only (localStorage), not in the HTML file or GitHub repository. They do not sync across devices, and clearing browser data may erase them. To permanently distribute pictures to all visitors, supply the original image files to the person updating the published website; obtain permission before publishing private family photos.

### Prompt to request website changes with ChatGPT

> I manage Find Your Voice, a six-page toddler learning website. I am attaching the latest ZIP. Please make these changes: [describe changes]. Keep the six learning pages, picture library with page-and-word tags, tap-to-speak, and the racing theme. Preserve existing content unless I ask otherwise. Return a complete updated ZIP and simple GitHub upload instructions. Do not add other learning categories.

## NEW: Simple ON/OFF page controls

Open the website and select **⚙️ Grown-up controls** near the top. Each learning page has an ON/OFF checkbox. Switches apply immediately to this browser.

To publish the same switches for everyone:
1. Set the switches the way you want.
2. Click **Download site-settings.js**.
3. In your GitHub repository, replace the root `site-settings.js` with the downloaded file and commit.
4. Wait for GitHub Pages to finish deployment and refresh the website.
5. If your browser still shows your own previous switches, click **Use published defaults** in Grown-up controls.

You can also edit `site-settings.js` directly on GitHub: `true` means visible; `false` means hidden. This is not a password-protected admin feature, and browser changes are device-specific. The Picture Library still stores uploaded pictures in the browser only.

## Ready-to-copy ChatGPT update prompt

> I manage the Find Your Voice learning website for a young child. I am not a programmer. I am uploading the latest GitHub ZIP. Please make these changes: [DESCRIBE CHANGES]. Keep the six learning categories, picture tagging, speech, and Grown-up controls working. Do not change anything else. Return a complete tested GitHub ZIP and simple publishing instructions. Keep family photos private unless I explicitly authorize publishing them.

## Navigation fix
The learning tabs use high-contrast, fully visible text and a responsive two-, three-, or four-column grid. Upload the updated index.html to GitHub and refresh after Pages finishes deploying.


## Alphabet and number card improvements
- Alphabet cards display **A–Z**, but tapping a letter speaks its **letter name only** (for example “ay”, “bee”, “see”), not “capital A”. Pronunciation can vary slightly by device voice.
- Numbers **0–5** use tidy two/three-column cards with small counting dots (zero says “Zero”) instead of oversized star emojis.
- The page background and headings have explicit contrast for browser previews.


## New learning pages (November update)
- **Clothes:** Shirt, Pants, Socks, Shoes, Hat, Dress, Shorts, Coat.
- **Inside the House:** Bed, Chair, Table, Door, Window, Lamp, Clock, Sofa, TV, Book, Cup, Spoon.
- **Everyday Words:** Hello, Bye-bye, Please, Thank you, Yes, No, Help, More, Stop, All done, Eat, Drink, Sleep, Wash, Come, Go.

The top pickup truck now faces the direction of travel. The new pages can be shown/hidden in Grown-up controls. Add custom pictures through Picture Library by selecting the new page and word tag. These browser-uploaded images are local to the current browser.


## Shared image folder (new)

All published pictures live in the `images/` folder, grouped into `family/`, `food/`, `alphabet/`, `numbers/`, `colors/`, `shapes/`, `clothes/`, `home/`, and `daily/`.

The separate `image-assets.js` file maps each **page + word tag** to its image file. For example:

```js
const IMAGE_ASSETS = {
  home: { Table: 'images/home/table.svg' },
  clothes: { Glasses: 'images/clothes/glasses.jpg' },
  family: { Mommy: 'images/family/mommy.jpg' }
};
```

To replace a published image without touching `index.html`: **upload** a picture to the appropriate `images/<page>/` folder in GitHub. Then **edit `image-assets.js`** to point to the filename. Commit the changes and refresh the live site after GitHub Pages deploys. If you replace a file with the same filename, a hard refresh may be needed because of browser caching.

To add a picture for Glasses, upload `images/clothes/glasses.jpg`, then add `Glasses: 'images/clothes/glasses.jpg'` inside the `clothes` mapping. File names and letter case must match exactly. If a word has no published image, its default emoji or shape is shown.

The **Picture Library** tab remains for local experiments. Photos uploaded there live only in that browser and take priority over published pictures on that device. To see the newly published picture, remove its local override in Picture Library or clear that browser's site storage (which removes other local customizations too). The website cannot write directly into the GitHub folder from a normal browser.

**Alphabet speech:** the displayed letters are A–Z; tapping them speaks an explicit US-English letter-name approximation (A = “ay”, B = “bee”, C = “see”, etc.), not “capital A”. Actual pronunciation depends on the device's installed speech voice. Test A, E, G, H, I, Q, R, W, Y on the target device. If an exact pronunciation is essential, use recorded letter audio in a future update.

**Latest lesson changes:** Clothes now has Glasses, without Dress or Coat. Shapes includes Rectangle. Colors includes White and Black. Table, Hello, Bye-bye, Please, Thank you, and Eat have separate built-in SVG illustrations.

## Supervisor quick reference — GitHub ON/OFF controls

**To choose what children see on every device:** open `site-settings.js` in the GitHub repository, click the pencil icon, and change the `true`/`false` values. Commit the change, wait for GitHub Pages to deploy, and refresh the site. The file includes detailed comments and examples beside every switch.

| Setting | Page | Example |
|---|---|---|
| `family` | Mommy, Daddy, Me | `family: true,` |
| `food` | Food & Drinks | `food: false,` hides it |
| `alphabet` | Alphabet A–Z | `alphabet: true,` |
| `numbers` | Numbers 0–5 | `numbers: true,` |
| `colors` | Colors | `colors: true,` |
| `shapes` | Shapes | `shapes: true,` |
| `clothes` | Clothes | `clothes: true,` |
| `home` | Inside the House | `home: true,` |
| `daily` | Everyday Words | `daily: true,` |
| `pictures` | Picture Library | `pictures: false,` hides its tab |

**Two ways to control pages:**
- **GitHub (published default):** edit `site-settings.js` and commit; visitors see the new defaults after deployment and refresh.
- **On-screen Grown-up controls:** toggle a page immediately on the current browser. To publish those choices, select **Download site-settings.js**, upload/replace that file on GitHub, and commit.

**If GitHub changes don't appear on the supervisor's device:** choose **Grown-up controls → Use published defaults** to clear older browser-only switches, then refresh. The site does not auto-update without a reload after a GitHub deployment.

**Do not use the switches to protect sensitive information:** they only hide navigation; public repository content is still accessible. `pictures: false` hides the Picture Library tab but does not erase existing photos stored in a browser.

### Copy-and-paste prompt for future control changes

> I manage the Find Your Voice learning website. I am attaching the latest ZIP. Please update only the page visibility defaults in `site-settings.js` as follows: [LIST PAGES TO SHOW AND HIDE]. Preserve all lessons, images, speech, and other settings. Keep the comments and beginner-friendly instructions. Return the updated file and a complete GitHub ZIP, and tell me exactly what to upload and commit.
