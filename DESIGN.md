# DESIGN.md

Version: 20260810.1.5

## 1. Executive Summary & Design Vision

The FIT / TCX / GPX Converter & Map Viewer is a client-side web application enabling users to upload activity files (FIT, TCX, GPX), visualize telemetry data (Speed, Heart Rate, Cadence, Power, Elevation, Temperature), and convert files between formats and geospatial encodings (GCJ02, BD09, WGS84). The vision is to provide a portable, secure, and accessible tool for activity data processing.

## 2. Technical Stack & Environment Requirements

- **Frontend:** HTML5, CSS (Bootstrap 5), JavaScript (ES Modules).
- **Processing:** Client-side logic in `js/app.js` using native APIs.
- **PWA:** Service worker (`sw.js`) and `manifest.json` for offline capabilities and home screen installation.
- **Dependencies:**
  - `bootstrap`: UI framework.
  - `bootstrap-icons`: Icon library.
  - `leaflet`: Map rendering.
  - `chart.js`: Telemetry visualization.
  - `@garmin/fitsdk`: FIT file processing.
  - `github-fork-ribbon-css`: Branding.
- **Environment:** Node.js environment required for build tools (npm scripts).

## 3. WCAG 2.2 AA Compliance Matrix

- **Contrast:** Maintained a contrast ratio of at least 4.5:1 for all text elements.
- **Semantics:** Using semantic HTML elements (nav, main, section, etc.).
- **ARIA:** ARIA labels utilized for interactive elements and containers.

## 4. OWASP Top 10 Compliance Matrix

- **A03: Injection:** Handled by utilizing `textContent` and `innerText` for DOM manipulation, avoiding `innerHTML`.
- **A06: Vulnerable Components:** Managed via dependency auditing (`npm audit`) and adhering to locked library versions in `package.json`.

## 5. SSOT & Version Management

- **Version:** Managed centrally in `VERSION` file.
- **Synchronization:** Automated updates across `index.html`, `DESIGN.md`, `README.md`, and SCSS/JS variables.

## 6. Multi-lingual Mapping & Information Architecture

- Currently supports English interface.
- Architecture is designed to be easily extensible for localization if required in future releases.

## 7. CSS & Sass Style Guide

- **Bootstrap 5:** Customization via `scss/styles.scss` overriding Bootstrap variables.
- **BEM Naming:** Components use Block-Element-Modifier naming conventions (`.block__element--modifier`).
- **SMACSS Structure:**
  - `base/`: Base styles (`_base.scss`, `_variables.scss`, `_variables-dark.scss`).
  - `components/`: Modular component styles.
  - `vendor/`: Third-party library overrides.
- **Property Ordering:** Strict order enforced via `stylelint` (Drupal 11 core configuration).

## 8. Custom Application Layout & Behavioral Rules

- **Responsive:** Single-page layout using Bootstrap grid/utilities.
- **Interaction:** Real-time client-side preview and conversion on user input change.

## 9. Component Guideline Integration & Synced Execution Matrix

| Component | Standard             | Enforcer             |
|:----------|:---------------------|:---------------------|
| JS        | Drupal JS Standards  | ESLint + Prettier    |
| CSS/SCSS  | Drupal CSS Standards | Stylelint + Prettier |
| HTML      | Semantic Markup      | Manual Audit         |

## 10. Quality Assurance & Auditing Checklist

- [x] Passes `eslint` (JS Standards).
- [x] Passes `stylelint` (CSS/SCSS Standards).
- [x] Passes `prettier` (Formatting).
- [x] WCAG 2.2 AA Audit completed.
- [x] OWASP Top 10 Audit completed.
- [x] PWA Installability Audit completed.
