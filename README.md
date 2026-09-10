# Run the Red Dot

Website for **Run the Red Dot**, Atalia's guided running tours of Singapore.

Plain HTML, CSS and one small JavaScript file. No build step, no frameworks.
You can open `index.html` straight in a browser and it works.

---

## Files

| File | What it is |
|------|-----------|
| `index.html` | The whole one-page site |
| `waiver.html` | The participant waiver, linked from the site |
| `styles.css` | All the styling. Colours live at the top in the `:root` block |
| `script.js` | Fills in the form link and email, runs the mobile menu |
| `assets/img/` | Photos |
| `favicon.svg` | The little red dot in the browser tab |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is |

---

## The things Atalia will want changed

### 1. The registration form links

Each run has its own Google Form. Open `script.js` and you will see:

```js
var FORMS = {
  sunrise:   "https://forms.gle/...",
  breakfast: "https://docs.google.com/forms/d/e/.../viewform",
  night:     "https://forms.gle/...",
  nature:    "https://docs.google.com/forms/d/e/.../viewform"
};
```

Paste each run's form link next to its name. That is the only place any form
link lives. Every "Register for this run" button on a tour, plus the four
buttons in the Register section, read from this list.

The plain "Book a run" and "Register" buttons in the header, menu, hero and
footer do not open a form. They scroll down to the Register section so the
person can pick which run they want first. Nothing to configure there.

### 2. The contact email

Also in `script.js`:

```js
var CONTACT_EMAIL = "hello@example.com";
```

Change it to Atalia's real address.

### 3. Price

Every tour shows **S$35 per person**, written as plain text in `index.html`.
Search the file for `S$35` and change each one if a price changes.

### 4. The bits marked TODO

Search `index.html` for `TODO`. These are answers only Atalia can give:

- Whether breakfast is included in the Breakfast Run price
- What to bring
- How to pay, and the refund / cancellation policy
- Private group bookings
- Age limit for kids
- Her own words for the About section (the current text is pulled from her
  Tripadvisor listing as a placeholder)

The `class="todo"` and `.tour-note` styling makes these stand out on the page
so they are hard to forget. Delete the TODO note once the real answer is in.

### 5. Photos

`assets/img/` currently has stock photos of Singapore landmarks from Unsplash
(free to use, no attribution required, credited below anyway).

Swap in Atalia's own photos when she has them, especially:

- **About section**: there is a placeholder box that says "Photo of Atalia goes
  here". Drop a real photo in `assets/img/`, then in `index.html` replace the
  `<div class="placeholder">...</div>` with
  `<img src="assets/img/atalia.jpg" alt="Atalia">`.
- **Tour photos**: each tour has one `tour-photo` image at the top. Replace the
  file or change the `src`.

Keep photos around 1600px wide and run them through something like
[squoosh.app](https://squoosh.app) so the page stays fast.

### 6. Font

Headings use "Baloo 2" and body text uses "Nunito" from Google Fonts, picked to
look close to the rounded font in Atalia's Instagram posts. If she tells you the
exact font she used in Canva, change the family names in two places: the
`<link ... fonts.googleapis.com ...>` line in `index.html` and the
`--font-head` / `--font-body` lines near the top of `styles.css`.

---

## Putting it online with GitHub Pages (free)

**This is already done.** The site lives at
<https://calebcffs.github.io/runthereddot/> and is served from the `main` branch
of <https://github.com/Calebcffs/runthereddot>. The rest of this section explains
what happened and how to push future changes.

GitHub Pages serves a website straight from a GitHub repository. Here is the
whole path from this folder to a live URL.

### One time setup

```bash
# You are in the run-the-red-dot folder. It is already a git repo
# (git init was run). Stage everything and make the first commit.
git add .
git commit -m "First version of the Run the Red Dot site"
```

`git add .` stages every file so git knows to include it.
`git commit` saves that staged snapshot to the repo history with a message.

Now make an empty repository on GitHub (github.com, "New repository", no README,
no licence). Call it something like `run-the-red-dot`. GitHub shows you a URL
that looks like `https://github.com/YOURNAME/run-the-red-dot.git`. Then:

```bash
# Tell git where the remote copy lives, and call it "origin".
git remote add origin https://github.com/YOURNAME/run-the-red-dot.git

# Rename the local branch to "main" to match GitHub's default.
git branch -M main

# Push your commit up to GitHub. -u links the branches so next time
# you can just type "git push".
git push -u origin main
```

Then on GitHub: **Settings > Pages**. Under "Build and deployment", set
**Source** to "Deploy from a branch", pick branch **main** and folder **/ (root)**,
and Save. Wait a minute or two. GitHub gives you a URL like
`https://YOURNAME.github.io/run-the-red-dot/`. That is the live site.

Put that URL in the Instagram and TikTok bios.

### 7. Social share preview (already set)

The two `og:url` / `og:image` lines near the top of `index.html` are set to
`https://calebcffs.github.io/runthereddot/`. That is what makes a picture show
up when the link is shared in WhatsApp or an Instagram DM. Only touch these if
the site moves to a custom domain, in which case swap in the new address.

### Every time you change something after that

```bash
git add .
git commit -m "Short note about what changed"
git push
```

GitHub Pages picks up the push and updates the live site within a minute.

### Seeing changes before you push

Just open `index.html` in a browser (double click it, or drag it into a browser
tab). Everything except the Google Fonts will look right offline. To be closer
to the real thing you can run a tiny local server:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`. Stop it with Ctrl+C.

---

## Custom domain (optional, later)

If Atalia buys a domain like `runthereddot.com`, add a file named `CNAME` (no
extension) to this folder containing just the domain, push it, then set the
domain under Settings > Pages and follow GitHub's DNS instructions.

---

## Photo credits

All from [Unsplash](https://unsplash.com), which allows free commercial use with
no attribution required. Credited here as a courtesy.

| File | Source |
|------|--------|
| `hero-marinabay-sunrise.jpg` | unsplash.com/photos/UBtYZrDNktQ |
| `skyline-flyer.jpg` | unsplash.com/photos/3GRENNknIsw |
| `skyline-night.jpg` | unsplash.com/photos/-WmBbH6IEuo |
| `merlion-day.jpg` | unsplash.com/photos/HKvQY4l0bFM |
| `merlion-alt.jpg` | unsplash.com/photos/yaPVUlxOTe4 |
| `merlion-night.jpg` | unsplash.com/photos/WhXZIQEYfF4 |
| `coast-sunset.jpg` | unsplash.com/photos/TZwu17e-W3s |
| `coast-trees.jpg` | unsplash.com/photos/7ILPdqG7Qn0 |
| `og-image.jpg` | cropped from `hero-marinabay-sunrise.jpg` |

Replace these with Atalia's own photos when you can.
