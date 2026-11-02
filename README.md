# 🌈 Little Words — Owner & Family Guide

A picture-and-speech learning website for a young child. **You do not need to know programming.** This repository is the control center for the public GitHub Pages website.

## ⭐ Quick start: which file should I edit?

| I want to… | Open this file | What to change |
|---|---|---|
| Hide/show Bible Stories, Learn, My People, Practice, Meanings | `config.js` | Under `visibleTabs`, use `true` (show) or `false` (hide) |
| Hide/show Food, Animals, ABCs, Spiritual Learning, etc. | `config.js` | Under `visibleCategories`, use `true` or `false` |
| Teach numbers up to 5, then 10 | `config.js` | Change `maxNumber: 5` to `maxNumber: 10` |
| Change learning words, order, pictures, spoken meanings | `words.js` | Edit the appropriate entry in `raw` or `pictureOverrides` |
| Set default family names and photos | `family.js` | Edit `examplePeople` (see important limitation below) |
| Edit Bible story titles and narrated text | `stories.js` | Edit the appropriate object in `stories` |
| Add a photo or illustration | `images/` | Upload the image, then reference its path in the appropriate `.js` file |
| Change the app's layout or behavior | `index.html` | Ask for AI help; avoid editing this file casually |

**Current defaults:** Bible Stories and Spiritual Learning are hidden. Numbers show 1–5. Letters display A–Z and speak their letter names (not “capital A”).

## ✏️ How to edit a file on GitHub (easy, no software installation)

1. Sign in to GitHub and open the `little-words` repository.
2. Click the file from the table above, such as **config.js**.
3. Click the **pencil (Edit this file)** icon near the top right.
4. Make the small change. **Do not remove commas, quotes, or brackets.**
5. Click **Commit changes** and confirm the commit to the `main` branch.
6. Open **Actions** or **Settings → Pages** to confirm publishing finished.
7. Open the public website and refresh. If you still see the old version, try an Incognito/Private window. Browser caching can delay updates.

**Example: Hide Bible Stories and Spiritual Learning**

In `config.js`, use:

```js
visibleTabs: {learn:true,names:true,stories:false,practice:true,meaning:true},
```

and inside `visibleCategories`:

```js
'Spiritual Learning': false,
```

To restore them later, change both values to `true`, then commit.

## 🧸 How to use the website with a child

1. Open the published website on a phone, tablet, or computer. Turn up the volume.
2. Select **Learn** and a category, for example **My Family** or **Food & Drinks**.
3. Tap a picture. The website speaks its name. Invite the child to repeat it naturally; there is no pressure to answer correctly.
4. Use **My People** to practice recognizing family relationships and names.
5. Use **Practice** to listen and find a matching picture, when ready.
6. Use **Meanings** and its **🔊 Hear meaning** button for longer spoken explanations, when ready.
7. **Bible Stories** can be enabled later in `config.js` for short listening lessons.

The child does **not** need to read or spell. Browser speech voices vary by device. Tap-to-speak usually needs an initial user interaction.

## 🖼️ How to add or replace pictures

1. Open the GitHub repository's **images** folder.
2. Select **Add file → Upload files**, choose a JPG, PNG, or SVG, and **Commit changes**.
3. Note the exact filename, for example `images/dog.jpg` (capitalization matters).
4. For a vocabulary picture, open `words.js` and find `pictureOverrides`. Add or change a mapping like:

```js
'Animals|Dog': 'images/dog.jpg',
```

5. Commit and reload the website. If the picture does not show, check the spelling and path.

**Tip:** For easy maintenance, use small, clear images with simple backgrounds and short filenames such as `dog.jpg`, `table.png`, and `grandma.jpg`.

## 👨‍👩‍👦 Family names and photos — important current behavior

`family.js` contains starter cards like this:

```js
{role:'Mommy',name:'',emoji:'👩',image:''}
```

You can change the name and use `image:'images/mommy.jpg'`. **However, the current website also stores edits made through My People in each visitor's browser. Those local changes may override the GitHub starter cards on that device.** Changes made through the website do **not** automatically publish to other devices. To make a new GitHub default appear, a visitor may need to reset their local My People cards; this can erase their saved names/photos. Ask ChatGPT to help before resetting.

**Privacy:** A public GitHub repository and GitHub Pages website expose uploaded names and photos to anyone who can access the files. Get the family's permission before publishing real names or photos. For private photos, use a private sharing solution instead.

## 📝 How to change words and their spoken meanings

Open `words.js`. The `raw` list contains entries shaped like:

```js
['Animals','Dog','🐶','A dog is an animal.'],
```

These mean **category, word, default symbol, spoken meaning**. You can edit an entry or ask ChatGPT to do it. Keep punctuation and category names intact. The child hears the single word on Learn; the longer explanation is available with speech in Meanings. `config.js` hides whole categories; `words.js` is where individual words are maintained.

## 📖 How to change Bible stories

Open `stories.js`. Each lesson has `title`, `emoji`, and `text`. `text` is what the device reads aloud. Keep sentences short and gentle. A hidden Bible Stories tab retains its lessons, so you can turn it on later.

## 🤖 Copy-and-paste prompt for ChatGPT

Upload the **latest complete website ZIP** (or the relevant `.js` files) to ChatGPT, then paste:

> I manage a toddler learning website called **Little Words** on GitHub Pages. I am not a programmer. Please edit the attached website files for me.
>
> **My requested changes:** [Describe what to add, remove, hide, rename, or replace. Attach any new photos.]
>
> Please preserve everything else: existing words, category order, Bible stories, family names, pictures, audio behavior, and tab visibility. Keep the site friendly for a 2–3-year-old. Make changes in `config.js`, `words.js`, `family.js`, or `stories.js` where possible. Check the JavaScript syntax and that image paths and labels match. Do not claim to have tested audio on my device. Return a complete ZIP with the correct GitHub Pages folder structure, and tell me exactly which files to upload and how to commit them. Explain any privacy risks if I include names or photos. Do not silently replace existing family information.

**Example requests to ChatGPT:**

- “Hide Bible Stories and Spiritual Learning; keep the lessons saved for later.”
- “Show numbers 1 through 10, but keep alphabet cards in uppercase and say only the letter.”
- “Put Dog, Cat, Fish, and Bird first and hide the other animal words.”
- “Replace the picture for Table with the photo I attached.”
- “Change the meaning of Apple to a short sentence that can be spoken aloud.”

**If ChatGPT gives you an updated ZIP:** download it, extract it, upload the changed files (not the ZIP) to GitHub, commit, and check the website. Keep a backup of the previous version before replacing files.

## 📤 First-time publishing to GitHub Pages

1. Create a **public** GitHub repository named `little-words` under the website owner's account.
2. Extract the website ZIP and upload **all files at the repository root**, including the `images/` folder. `index.html` must be at the root.
3. Open **Settings → Pages**. Select **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After deployment, visit `https://YOUR-USERNAME.github.io/little-words/` and share that URL.

## 🔒 What GitHub controls — and what it does not

- GitHub controls the **published defaults** and is the source for public website updates.
- Visitors cannot commit to the repository unless the owner grants them GitHub write access.
- Hiding a tab is **not** a security feature. Hidden content remains in publicly accessible code.
- There is no secure private admin login, cloud database, or automatic synchronization of visitor edits.
- The website's browser storage and cached files may differ across devices. Do not rely on them as a backup.
- `allowVisitorEditing: false` is intended to hide the public Grown-ups editing interface; it is not authentication.

## 🛠️ If a change does not appear

1. Confirm the commit is visible in the correct GitHub repository and branch.
2. Check **Actions** for a successful GitHub Pages deployment.
3. Open the published `config.js` URL directly (e.g. `https://YOUR-USERNAME.github.io/little-words/config.js`) to see which values are being served.
4. Try a Private/Incognito window. If that works, the regular browser likely has stale cache or local data.
5. Avoid clearing browser storage until you've backed up local family names and photos.
6. If still stuck, upload a screenshot, the latest ZIP, and the GitHub Pages URL to ChatGPT and ask it to diagnose the issue.

---

**Owner's checklist before sharing:** correct words and pictures • intended tabs visible • audio tested on the child's device • no private photos/names published without consent.
