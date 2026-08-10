# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## \[20260810.1.4\] - 2026-08-10

### Fixed

- **TCX Parser:** Refined speed extraction logic to correctly identify `<Speed>` tags within `Extensions/TPX` nodes, ensuring speed metrics are properly parsed and displayed in the UI upon TCX re-import.

### Changed

- **Version:** Synchronized version number to `20260810.1.4` across `VERSION`, `index.html`, `scss/base/_variables.scss`, `README.md`, and `DESIGN.md`.

## \[20260810.1.3\] - 2026-08-10

### Added

- **PWA Support:** Implemented Progressive Web App functionality, including `manifest.json`, `sw.js` (service worker), and necessary meta tags in `index.html` for home screen installation on iOS and Android.
- **Service Worker Caching:** Updated `sw.js` to cache essential JavaScript library files (Leaflet, Bootstrap, Chart.js) and Bootstrap Icons fonts from `node_modules` for offline access.
- **README.md Enhancements:** Updated README to include PWA features, compliance highlights, and project badges.

### Fixed

- **TCX Import:** Corrected parsing logic to extract speed data from both direct `<Speed>` tags and `<Extensions><TPX><Speed>` paths, ensuring speed metrics are correctly loaded upon re-import.
- **FIT Export:** Updated FIT `SESSION` message keys to use standard camelCase (`avgSpeed`, `maxSpeed`, `avgTemperature`, `maxTemperature`), ensuring compatibility with FIT SDK profiles and correct UI rendering.
- **Code Integrity:** Resolved syntax errors in `js/app.js` caused by duplicate variable declarations, ensuring a stable build process.

### Changed

- **Version:** Synchronized version number to `20260810.1.3` across `VERSION`, `index.html`, `scss/base/_variables.scss`, `README.md`, and `DESIGN.md`.
- **Prettier Configuration:** Updated `.prettierrc` to correctly set `printWidth` for HTML (1000), SCSS (10000), and JS (80) while maintaining 2-space indentation and single/double quote rules for specific file types.
- **Stylelint Configuration:** Finalized `.stylelintrc.json` to mirror Drupal 11 core, including full property ordering and rule exceptions.

## \[20260809.1.2\] - 2026-08-10

### Fixed

- **TCX Import:** Corrected parsing logic to extract speed data from both direct `<Speed>` tags and `<Extensions><TPX><Speed>` paths, ensuring speed metrics are correctly loaded upon re-import.
- **FIT Export:** Updated FIT `SESSION` message keys to use standard camelCase (`avgSpeed`, `maxSpeed`, `avgTemperature`, `maxTemperature`), ensuring compatibility with FIT SDK profiles and correct UI rendering.
- **Code Integrity:** Resolved syntax errors in `js/app.js` caused by duplicate variable declarations, ensuring a stable build process.

### Changed

- **Version:** Synchronized version number to `20260809.1.2` across `VERSION`, `index.html`, `scss/base/_variables.scss`, `README.md`, and `DESIGN.md`.

## \[20260809.1.1\] - 2026-08-10

### Fixed

- **TCX Parser:** Improved XML parsing for `AverageSpeed`, `MaximumSpeed`, and `Temperature` from TCX `Lap` and `Extensions` nodes.
- **TCX Generation:** Updated export template to include the newly parsed telemetry fields in the generated TCX structure.
- **Build Configuration:** Fixed indentation and quoting issues in `.prettierrc`, `eslint.config.js`, and `.stylelintrc.json` to fully align with Drupal 11 coding standards.

### Added

- **Compliance:** Full audit and configuration update for Drupal 11 CSS and JS Coding Standards.
