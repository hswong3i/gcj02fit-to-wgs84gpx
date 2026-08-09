# Rules

## Functional

- only change code required
- only change comment required
- exclude citation tags
- exclude bracketed numbers
- exclude source links
- synchronize coding style
- synchronize comment style
- synchronize implementation style
- synchronize layout design
- check with SASS
- check with ESLint
- check with Stylelint
- check with Idempotency
- ensure WCAG 2.2 AA Compliance
- ensure OWASP Top 10 Compliance
- ensure SSOT (Single Source of Truth) Compliance
- ensure Bootstrap utilities Compliance
- ensure Bootstrap Icons utilities Compliance
- ensure Bootstrap Code Guide Compliance
- ensure Drupal CSS Coding Standard Compliance
- ensure Drupal Javascript Coding Standard Compliance

## Libraries

- `npm install bootstrap-icons@~1.13.1`
- `npm install bootstrap@~5.3.8`
- `npm install leaflet@~1.9.4`
- `npm install chart.js@~4.5.1`
- `npm install @garmin/fitsdk@~21.208.0`
- `npm install github-fork-ribbon-css@~0.2.3`

# DESIGN.md

- update `DESIGN.md`
  - `pandoc -f gfm -t gfm --wrap preserve -o DESIGN.md DESIGN.md`
- with schema in semantic versioning, e.g. 20260727.1.1
  - MAJOR: today timestamp, e.g. 20260728
  - MINOR: changes only when the interface breaks, e.g. 20260728.1
  - PATCH: when defects are corrected, e.g. 20260727.1.1
  - sync across all `*.css`, `*.js`, `*.html`, `*.md`
  - `find *.* */*.css */*.js -type f | xargs sed -i 's/20260727.1.1/20260727.1.2/g'`
- lock primary branding green in `#0d753a`
- include WCAG 2.2 AA Compliance guideline and recommendation
- include OWASP Top 10 Compliance guideline and recommendation
- include SSOT Compliance guideline and recommendation
- include CSS style guide for `bootstrap@5.3.8`
- include sample `scss/styles.scss` for override all default values from `node_modules/bootstrap/scss/_variables.scss`
- include simplest and portable `<link rel="stylesheet">` and `<script>` example, no `crossorigin`, no `defer`
- include design guideline for following `*.css` and `*.js` and `*.html` implementation
- generate guideline based on current implementation
  - descriptive
  - informative
  - for product owner
  - for project manager
  - for junior developer
  - for junior designer

# Logic

## Functional

- create a `index.html` with javascript
- display "Fork me on GitHub" to <https://github.com/hswong3i/gcj02fit-to-wgs84gpx>
- upload source file from local in (.FIT / .TCX / .GPX) + (GCJ02 / BD09 / WGS84)
- always convert source file into preview file as format and encoding selected
- display preview file with dashboard / map / line graph
- always convert preview file into output file as format and encoding selected
- download converted output file to local in (.FIT / .TCX / .GPX) + (GCJ02 / BD09 / WGS84)

# Input

## Functional

- support source file upload from local
- support source file format: .FIT / .TCX / .GPX
- support source file encoding GCJ02 / BD09 / WGS84
- source file format default with .FIT
- source file encoding default with GCJ02
- add refresh button for uploaded source file

## Conditional

    IF (source file upload change) OR (source file format change) OR (source file encoding change) THEN
        ajax refresh preview
    FI

    IF (source file format is .FIT) THEN
        decode source file with `@garmin/fitsdk@21.208.0`
        decode source file with FIT Profile
        implement decoder as https://github.com/garmin/fit-javascript-sdk/tree/21.208.0#decoder
        use `const decoder = new Decoder(stream);`
    FI

# Preview

## Keep

- keep "Speed"
- keep "Heart Rate"
- keep "Cadence"
- keep "Power"
- keep "Calories"
- keep "Temperature"
- keep "Elevation"
- keep all message type and attributes, except converted preview file encoding

## Dashboard

- display "Activity Date"
- display "Total Distance"
- display "Moving Time"
- display "Elevation"
- display "Average Speed / Max Speed"
- display "Average Heart Rate / Max Heart Rate"
- display "Average Cadence / Max Cadence"
- display "Average Power / Max Power"
- display "Average Temperature / Max Temperature"
- not display "Calories"
- include zero records for average calculation

## Map

- display preview file in map
- default map center to Hong Kong

## Line Graph

- display "Speed" in line graph
- display "Heart Rate" in line graph
- display "Cadence" in line graph
- display "Power" in line graph
- display "Elevation" in line graph
- display "Temperature" in line graph

# Output

## Functional

- support output file download to local
- support output file format: .FIT / .TCX / .GPX
- support output file encoding: GCJ02 / BD09 / WGS84
- output file format default with .FIT
- output file encoding default with WGS84

## Conditional

    IF (output file format is .FIT) THEN
        encode output file with `@garmin/fitsdk@21.208.0`
        encode output file with FIT Profile
        implement streamless buffer creation as https://github.com/garmin/fit-javascript-sdk/tree/21.208.0#creating-streams
        implement encoder as https://github.com/garmin/fit-javascript-sdk/tree/21.208.0#encoder
        use `const encoder = new Encoder();`
        use `encoder.writeMesg()`
        use `const uint8Array = encoder.close();`
    FI
