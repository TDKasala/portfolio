# Portfolio Website

A fast, responsive single-page portfolio built with plain **HTML, CSS, and JavaScript** — no build step, no dependencies.

## Features

- 🎨 Clean, modern design with light/dark mode (remembers your choice)
- 🗂️ Project cards with category filtering (All / Web / Mobile / Tools)
- 📱 Fully responsive with a mobile nav menu
- ⚡ Zero build tooling — just open the file or host the folder anywhere

## Project structure

```
portfolio/
├── index.html     # Page markup (hero, projects, about, contact)
├── styles.css     # All styling + design tokens / theming
├── projects.js    # ← Edit this to add/change your projects
├── script.js      # Rendering, filtering, theme toggle, mobile nav
└── README.md
```

## Adding your projects

Open **`projects.js`** and edit the `projects` array. Each entry looks like:

```js
{
  title: "My Cool App",
  description: "A short summary of what it does.",
  icon: "🚀",                       // any emoji
  category: "web",                  // "web" | "mobile" | "tool"
  tags: ["React", "Node.js"],
  demo: "https://my-app.com",       // "" to hide the Live link
  source: "https://github.com/...", // "" to hide the Code link
}
```

Save and refresh — the cards regenerate automatically.

## Personalizing

- **Name / bio / skills:** edit the text in `index.html`.
- **Contact links:** update the email, GitHub, and LinkedIn links in the Contact section of `index.html`.
- **Colors:** tweak the CSS variables under `:root` and `[data-theme="dark"]` in `styles.css`.

## Running locally

Just open `index.html` in your browser. Or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Because it's static, you can host it for free on:

- **GitHub Pages** — push to a repo, enable Pages on the branch.
- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the folder or connect the repo.
