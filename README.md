# Ahmed Elkmashi — Futuristic AI Portfolio

A premium, production-ready personal portfolio & AI career assistant for **Ahmed Khaled Elkmashi** — IT learner and AI enthusiast based in Jena, Germany.

---

## ✨ Features

- 🌌 **Futuristic dark dashboard UI** — Apple × OpenAI × Linear aesthetics
- 🤖 **AI Career Assistant** — powered by OpenAI (with smart fallbacks if no key)
- 📱 **Fully responsive** — desktop 3-column, tablet 2-column, mobile stacked
- ⚡ **Framer Motion animations** — particles, floating orbits, glassmorphism
- 🧠 **Honest skill presentation** — no exaggeration, real levels shown
- 📄 **Downloadable CV** — beautiful HTML CV with print-to-PDF support
- 🌍 **Multilingual AI** — answers in German, English, and Arabic

---

## 🚀 Quick Start

```bash
# 1. Clone or unzip the project
cd ahmed-portfolio

# 2. Install dependencies
npm install

# 3. (Optional) Add your OpenAI key
cp .env.example .env
# Edit .env and set VITE_OPENAI_API_KEY=sk-...

# 4. Start development server
npm run dev
# → Opens at http://localhost:5173
```

---

## 🔑 OpenAI API Key (Optional)

The AI assistant works **without** an API key using built-in smart fallback responses.

To enable real OpenAI responses:

1. Get a key at [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Copy `.env.example` → `.env`
3. Set `VITE_OPENAI_API_KEY=sk-your-key-here`
4. Restart the dev server

> ⚠️ Never commit your `.env` file. It's in `.gitignore` by default.

---

## 🏗️ Build for Production

```bash
npm run build
# Output in /dist — ready to deploy
```

---

## 🌐 Deployment

### Vercel (Recommended — free)

```bash
# Option A: Vercel CLI
npm i -g vercel
vercel

# Option B: Connect GitHub repo at vercel.com
# Framework: Vite
# Build command: npm run build
# Output dir: dist
```

Add your OpenAI key in **Vercel Dashboard → Settings → Environment Variables**:
```
VITE_OPENAI_API_KEY = sk-your-key-here
```

---

### Render (Free tier)

1. Push to GitHub
2. Go to [render.com](https://render.com) → New → Static Site
3. Settings:
   - **Build command:** `npm install && npm run build`
   - **Publish dir:** `dist`
4. Add env var `VITE_OPENAI_API_KEY` in the Render dashboard

---

### Netlify

1. Drag & drop the `dist/` folder at [app.netlify.com](https://app.netlify.com/drop)
2. Or connect your GitHub repo
3. Add `VITE_OPENAI_API_KEY` in **Site settings → Environment variables**

---

### GitHub Pages

Uncomment the `base` line in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/ahmed-portfolio/', // ← set to your repo name
})
```

Then run:

```bash
npm run build
# Push /dist to the gh-pages branch
```

---

## 📱 Mobile AI Assistant

On mobile (< 1024px), the AI assistant appears as a **floating blue chat button** (bottom-right corner).

- Tap to open a full bottom-sheet chat modal
- Suggested questions appear automatically
- Typing indicator while AI responds
- Free text input + send button
- Works in portrait and landscape

---

## 🗂️ Project Structure

```
ahmed-portfolio/
├── public/
│   ├── ahmed-cv.html       # Downloadable CV (print to PDF)
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Hero.jsx
│   │   ├── StatsCards.jsx
│   │   ├── AboutSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── AIAssistant.jsx   ← Desktop panel + Mobile modal
│   │   ├── Timeline.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── profile.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── timeline.js
│   ├── lib/
│   │   └── ai.js             ← OpenAI integration + fallbacks
│   ├── App.jsx               ← 3-column desktop / 2-column tablet / mobile
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.3 | UI framework |
| Vite | 5.4 | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.383 | Icons |
| OpenAI API | gpt-4o-mini | AI assistant |

---

## 🔧 Customization

All personal data lives in `src/data/`:

- `profile.js` — name, contact, languages, images
- `skills.js` — skill levels and descriptions
- `projects.js` — project cards
- `timeline.js` — career timeline

AI system prompt is in `src/lib/ai.js` → `SYSTEM_PROMPT` constant.

---

## 📄 CV

The CV is at `public/ahmed-cv.html`. Open it in a browser and use **Ctrl+P → Save as PDF** to generate a PDF version.

---

*© 2026 Ahmed Elkmashi. Built with passion, curiosity and AI.*
