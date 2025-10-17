# Copilot Instructions for AI Agents

## Project Overview
- This is a single-page React application bootstrapped with Create React App.
- Source code is in `src/`, with main entry points: `App.js`, `index.js`, and supporting components/styles.
- Static assets (images, PDFs, CSS, JS) are in `public/` and `build/`.

## Key Workflows
- **Development:** Use `npm start` to run locally. Hot reload is enabled.
- **Build:** Use `npm run build` to generate production assets in `build/`.
- **Testing:** Use `npm test` for interactive test runner (Jest).
- **Deployment:** Deploy contents of `build/`.

## Patterns & Conventions
- Main UI logic is in `App.js`. Additional pages/components should be placed in `src/`.
- Static files (images, PDFs) are referenced from `public/images/`, `public/Pdf files/`, and similar paths.
- CSS is modular: use `App.css`, `index.css`, or create new CSS files in `src/` for new components.
- Avoid direct DOM manipulation; use React state and props.
- No custom routing detected; navigation is likely single-page or handled in `App.js`.
- No backend/API integration present; all data is local/static.

## External Dependencies
- Relies on React and Create React App scripts (see `package.json`).
- No custom middleware, service layers, or API clients detected.

## Example: Adding a New Component
1. Create `src/NewComponent.js` and `src/NewComponent.css`.
2. Import and use in `App.js`:
   ```js
   import NewComponent from './NewComponent';
   // ...
   <NewComponent />
   ```
3. Reference static assets via `public/` paths.

## Useful References
- `README.md`: Build/test/deploy instructions.
- `src/App.js`: Main application logic and UI structure.
- `public/`: Static assets for use in the app.

## AI Agent Guidance
- Follow React/JSX conventions for new code.
- Use functional components unless class components are required.
- Keep styles modular and scoped to components.
- Update this file if new architectural patterns or workflows are introduced.
