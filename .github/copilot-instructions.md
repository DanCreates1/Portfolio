# Copilot / AI Agent instructions for this repo 🚀

Quick, actionable notes to help an AI coding agent be productive immediately.

## Project snapshot
- Single-page React app built with Vite. Entry: `src/main.jsx`, app root: `src/App.jsx`.
- All UI components live under `src/components/` (functional components, default exports).
- Static assets are served from `public/` and referenced with absolute paths (e.g. `/projectsImg/codeva.png`).
- No TypeScript and no automated test suite present.

## Common commands (use from repo root)
- Start dev server (HMR): `npm run dev` (runs `vite`).
- Create a production build: `npm run build`.
- Preview built output: `npm run preview`.
- Run linter: `npm run lint` (eslint configured in `eslint.config.js`).

Note: when editing `.env` style files, restart Vite for new env vars to be picked up.

## Important environment variables
- Contact form uses EmailJS and expects these Vite-style env vars in your local env (example `.env.local`):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

- Code references: `src/components/Contact.jsx` reads `import.meta.env.VITE_EMAILJS_*` and sends a `formData` object containing `{ name, email, subject, message }` to EmailJS.
- If you add other secrets, follow the `VITE_` prefix convention (Vite exposes only vars with `VITE_`).

## Patterns & conventions to preserve
- Components: simple React functional components, default exports (e.g. `Contact.jsx`, `RubiksCube.jsx`, `Hero.jsx`). Keep file naming consistent with existing files (note: `projects.jsx` is lowercase — maintain current naming unless refactoring whole project).
- Global CSS: single global stylesheet at `src/index.css` — classes are global; do not introduce CSS Modules unless you also update build and code references.
- Icons: `@fortawesome/fontawesome-free` is imported in `src/App.jsx` via CSS.
- Assets: add static assets to `public/` and reference via leading slash (e.g. `/ProgrammingIcons/tailwindCssLogo.png`).

## Platform-specific and implementation notes (examples found in repo)
- Three.js usage (see `src/components/RubiksCube.jsx`):
  - The component creates a WebGLRenderer and appends `renderer.domElement` to a container ref.
  - A `ResizeObserver` (when available) and `window.resize` listener are used to keep canvas sized.
  - Cleanup is explicit: remove event listeners, disconnect ResizeObserver, remove DOM node, and call `renderer.dispose()` — follow this pattern for any Three.js/Canvas components to avoid memory leaks.

- Contact form (`src/components/Contact.jsx`):
  - Uses `emailjs-com` to send data. Form fields: `name, email, subject, message`.
  - Basic loading and success/error states are implemented; errors show a generic message. When changing submission logic, preserve UX states: `loading`, `submitted`, and `error`.

## Linting and code style
- ESLint is configured in `eslint.config.js` with React hooks and Vite plugin. Run `npm run lint` before opening PRs.
- Rule note: `no-unused-vars` is an error but allows names that match `/^[A-Z_]/` (useful for intentionally unused vars).

## Developer workflow notes
- Development: run `npm run dev` and iterate with HMR. Check the `/#contact` anchor to test the contact form.
- When adding dependencies: update `package.json` and run `npm install`. Keep changes minimal and verify `npm run dev` and `npm run lint` pass.
- There are no tests in the repo — do not assume CI tests exist.

## When to ask the maintainer
- Missing env vars for EmailJS or other secrets.
- Doubt about renaming `projects.jsx` or switching to TypeScript / CSS Modules — these are repo-level decisions.
- Changes to build system (Vite) or introducing new tooling (test runner, CI) — get confirmation first.

---
If anything above is unclear or you'd like me to include an example PR template, CI config, or tests, tell me which area to expand and I’ll iterate. ✅
