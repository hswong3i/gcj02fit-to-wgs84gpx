# Rules

## Functional

- only change code required
- only change comment required
- synchronize coding style
- synchronize comment style
- synchronize implementation style
- synchronize layout design
- check with ESLint
- check with Stylelint
- check with Idempotency

## Libraries

- use `@garmin/fitsdk@21.208.0`
- use `bootstrap@5.3.8`
- use `chart.js@4.5.1`
- use `github-fork-ribbon-css@0.2.3`
- use `leaflet@1.9.4`

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
- display "Total Distance", "Moving Time", "Elevation"
- display "Average Speed", "Max Speed"
- display "Average Heart Rate", "Max Heart Rate"
- display "Average Cadence", "Max Cadence"
- display "Average Power", "Max Power"
- display "Average Temperature", "Max Temperature"
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
