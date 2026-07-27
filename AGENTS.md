# AGENTS.md

## Commit Rules

1. **Commit message format**: Follow the existing format in `git log`:

   ```
   type: Short description - bullet details
   ```

   - Types: `feat`, `fix`, `chore`, `perf`, `docs`
   - First line: imperative mood, concise
   - Body: dash-prefixed bullet points describing changes

2. **Minify before commit**: Always minify `css/style.css` and `js/script.js` before committing:

   ```
   cmd /c "npx --yes terser js/script.js -o js/script.js -c -m"
   cmd /c "npx --yes clean-css-cli -o css/style.css css/style.css"
   ```

3. **Update service worker cache**: When adding, removing, or modifying static assets (images, icons, HTML, CSS, JS, fonts), bump the cache version in `sw.js` by incrementing the number in `CACHE_NAME` (e.g., `nookab-cache-v1` → `nookab-cache-v2`). This ensures browsers download fresh assets.
