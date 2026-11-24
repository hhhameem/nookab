# Nookab

**Where words become yours.**

Nookab is an offline-first vocabulary companion for self-directed language learners. Unlike apps that ship pre-built word lists, Nookab starts empty — you fill it with words you encounter while reading, watching, or conversing. Every word in your vocabulary was added by you, for you.

[Get it on Google Play](https://play.google.com/store/apps/details?id=com.hananatelier.nookab) — free, no account needed.

**Website:** [nookab.pages.dev](https://nookab.pages.dev/) (available in English, Deutsch and বাংলা)

---

## Why Nookab?

Four problems with every other vocabulary app:

1. Your vocabulary is stuck in notebooks and scattered across apps
2. No app lets you practice only the words *you* chose to learn
3. Paywalls block the features that actually help
4. Internet dependency kills opportunistic learning on the go

Nookab exists because every feature solves a problem its founder — an SQA Engineer learning a new language — personally faced.

---

## How It Works

### Add Words as You Encounter Them

No pre-loaded lists. You add words from your own reading, conversations, and media. Organize them into categories like Travel, Food, or Business.

### Practice With Three Modes

| Mode | What It Tests |
|------|---------------|
| **Flashcards** | See a word, flip to reveal translation, article, examples, and notes |
| **Quiz** | Pick the correct translation from four multiple-choice options |
| **Spelling** | Type the word from memory with no hints — full recall |

### Master Through Spaced Repetition

A mastery-based algorithm classifies words into tiers and surfaces the ones you're most likely to forget. Words at risk appear first. The algorithm suggests, not commands — it never blocks practice.

**Mastery Tiers:**

- Seedling (Learning): 0–40%
- Chart (Practicing): 41–90%
- Trophy (Mastered): 91–100%

---

## Features

- **Mastery-Based Spaced Repetition** — Words at risk of forgetting surface first
- **Weak Word Detection** — Automatically flags struggling words
- **Quick Practice Shortcuts** — One-tap starters: Quick Sprint, Today's Words, Mastery Boost, Clear Weak Words
- **Detailed Statistics** — Accuracy by word type, category, and over time
- **XLSX Import/Export** — Full data portability; export everything, reimport later
- **Consistency Streaks** — Visual weekly dots with a 7-day window
- **Daily Targets** — Set a daily practice goal with a circular progress ring
- **German Special Characters** — Floating keyboard helper for ä, ö, ü, ß and capitals
- **Text-to-Speech** — German and English pronunciation via speaker icon
- **AI Auto-Fill (optional)** — Suggests translations, grammar and examples using your own free Gemini key; off by default, and your word goes straight from your phone to Google
- **14-Day Activity Chart** — Visual bar graph of daily practice

---

## Privacy-First by Design

- **Offline-First** — Everything works in airplane mode except the optional AI Auto-Fill
- **No Accounts** — No sign-up, no email, no password
- **Your Data Stays Local** — Everything lives on your device
- **No AI Training** — Your vocabulary is never used for ML training

No cloud sync. No Nookab servers. No tracking. No social feeds. No dark patterns.

---

## Stats

| | |
|---|---|
| Practice Modes | 3 |
| Accounts Required | 0 |
| Works Offline | Everything except optional AI Auto-Fill |
| Price | Free forever |

---

## Supported Languages

Nookab currently supports building vocabulary for **German** and **English** learners.

- **German learners** get color-coded articles (der/die/das), plurals, genitive and full conjugations
- **English learners** get past tense and past participle for verbs, and comparative and superlative for adjectives
- **AI Auto-Fill** can translate into English, German, Bangla, Spanish, Portuguese or French

---

## Contact

- **Email:** [contact.nookab@gmail.com](mailto:contact.nookab@gmail.com)
- **Bug Reports & Feature Requests:** [Report a Bug or Request a New Feature](https://forms.gle/iurRmAPYfR1rbgUu5)
- **Website:** [nookab.pages.dev](https://nookab.pages.dev/)
- **Google Play:** [Nookab on Google Play](https://play.google.com/store/apps/details?id=com.hananatelier.nookab)
- [Privacy Policy](https://nookab.pages.dev/pages/privacy) · [Terms of Service](https://nookab.pages.dev/pages/terms)

---

## About This Repository

This repository contains the source of the Nookab website, [nookab.pages.dev](https://nookab.pages.dev/), a static site hosted on **Cloudflare Pages**. There is no build step.

| Path | Contents |
|---|---|
| `index.html` | Landing page |
| `pages/privacy.html`, `pages/terms.html` | Privacy Policy and Terms of Service (served as `/pages/privacy` and `/pages/terms`) |
| `css/style.css`, `js/script.js` | Styles and page interactions |
| `js/i18n.js` | German and Bangla translations of the website copy |
| `js/vendor/` | GSAP, ScrollTrigger and Lenis |
| `sw.js` | Service worker for offline caching |
| `sitemap.xml`, `robots.txt`, `site.webmanifest` | SEO and PWA metadata |

### Preview locally

Run Cloudflare's local server from the repository root, so URLs behave as they do on the live site:

```
npx wrangler pages dev .
```

Then open the address it prints (usually `http://localhost:8788`). A plain static server such as `python -m http.server` will not resolve the extensionless links (`pages/privacy`, `pages/terms`), and opening the HTML files directly from disk will not work either.

### Deploy

Pushes to `main` deploy automatically when the Cloudflare Pages project is connected to this repository. To deploy manually, run this from the repository root:

```
npx wrangler pages deploy . --project-name nookab --branch main
```

### Before committing

See [AGENTS.md](AGENTS.md): minify `css/style.css` and `js/script.js`, and bump `CACHE_NAME` in `sw.js` whenever static assets change.

---

## License

Free to use. No ads. No subscriptions. Built with care for language learners.
