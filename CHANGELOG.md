# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [20260810.1.5] - 2026-08-10

### Added

- **Accessibility Testing:** Integrated `axe-core/cli` to automatically perform WCAG 2.2 AA compliance audits on `index.html`.
- **CI/CD Pipeline:** Refactored GitHub Actions workflow into granular `build`, `test`, and `deploy` jobs to improve observability, ensure testing runs on both `master` and `develop` branches, and restrict deployment to `master` only.
- **Security Analysis:** Integrated ESLint security plugins (`eslint-plugin-security`, `eslint-plugin-no-unsanitized`) to enforce secure coding practices and detect common security vulnerabilities.

### Changed

- **Version:** Synchronized version number to `20260810.1.5` across `VERSION`, `index.html`, `scss/base/_variables.scss`, `README.md`, and `DESIGN.md`.

## [20260810.1.4] - 2026-08-10

### Fixed

- **TCX Parser:** Refined speed extraction logic to correctly identify `<Speed>` tags within `Extensions/TPX` nodes, ensuring speed metrics are properly parsed and displayed in the UI upon TCX re-import.

### Changed

- **Version:** Synchronized version number to `20260810.1.4` across `VERSION`, `index.html`, `scss/base/_variables.scss`, `README.md`, and `DESIGN.md`.

## \[20260809.1.1\] - 2026-08-10

### Fixed

- **TCX Parser:** Improved XML parsing for `AverageSpeed`, `MaximumSpeed`, and `Temperature` from TCX `Lap` and `Extensions` nodes.
- **TCX Generation:** Updated export template to include the newly parsed telemetry fields in the generated TCX structure.
- **Build Configuration:** Fixed indentation and quoting issues in `.prettierrc`, `eslint.config.js`, and `.stylelintrc.json` to fully align with Drupal 11 coding standards.

### Added

- **Compliance:** Full audit and configuration update for Drupal 11 CSS and JS Coding Standards.
