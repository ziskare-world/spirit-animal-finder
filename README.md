# Spirit Animal Finder — Discover Your Inner Nature
Run with Node.js 24. Install with `npm ci`, run `npm test` and start the development server with `npm run dev`. Build a static export with `npm run build`.

## Deploy
Push the source to a GitHub repository and import it into Netlify. Keep the base directory at the repository root. The included netlify.toml uses npm run build and publishes out. No credentials, database or external API is required.

## Matching
Each of the 18 questions measures one of six dimensions. Every dimension receives three equally weighted observations from 0 to 3. The score is 100 times one minus the root mean squared distance from an animal's profile divided by three. Profiles are sorted by unrounded score, with ties resolved in guide order. Scores represent symbolic similarity only.

Progress and completed readings are stored locally in this browser. Sharing sends a text summary via native sharing or clipboard. Clearing site data removes saved readings.
