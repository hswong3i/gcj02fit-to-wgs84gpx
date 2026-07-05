# Rules
only change code required
only change comment required
synchronize coding style
synchronize comment style
synchronize implementation style
synchronize layout design
layout design with "bootstrap@5.3.8"
map with "leaflet@1.9.4"
line graph with "chart.js@4.5.1"
.FIT decode / encode with "@garmin/fitsdk@21.208.0"
check with ESLint
check with Stylelint
fix "@garmin/fitsdk@21.208.0" with https://github.com/garmin/fit-javascript-sdk/tree/21.208.0
fix "Uncaught TypeError: encoder.write is not a function"
fix "Error: Invalid file structure: Not a valid Garmin FIT format target."
fix "Uncaught TypeError: can't access property "slice", stream.buf is undefined"

# Logic
create a "index.html" with javascript
upload source file from local in (.FIT / .GPX) + (GCJ02 / BD09 / WGS84)
always convert source file into preview file in .GPX + WGS84
display preview file with dashboard / map / line graph
always convert preview file into output file as format and encoding selected
download converted output file to local in (.FIT / .GPX) + (GCJ02 / BD09 / WGS84)

# Input
support source file upload from local
support source file format: .FIT / .GPX
support source file encoding GCJ02 / BD09 / WGS84
source file format default with .FIT
source file encoding default with GCJ02
add refresh button for uploaded source file
IF (source file upload change) OR (source file format change) OR (source file encoding change) THEN
    ajax refresh preview
FI
IF (source file format is .FIT) THEN
    decode source file with "@garmin/fitsdk@21.208.0"
    decode source file with FIT Profile
    implement decoder as https://github.com/garmin/fit-javascript-sdk/tree/21.208.0#decoder
FI

# Preview
keep "Speed"
keep "Heart Rate"
keep "Cadence"
keep "Power"
keep "Calories"
keep "Temperature"
keep "Elevation"
keep all message type and attributes, except converted file encoding

display "Activity Date"
display "Total Distance", "Moving Time", "Elevation"
display "Average Speed", "Max Speed"
display "Average Heart Rate", "Max Heart Rate"
display "Average Cadence", "Max Cadence"
display "Average Power", "Max Power"
display "Average Temperature", "Max Temperature"
not display "Calories"
include zero records for average calculation

display preview file in map
display "Speed" in line graph
display "Heart Rate" in line graph
display "Cadence" in line graph
display "Power" in line graph
display "Elevation" in line graph
display "Temperature" in line graph
default map center to Hong Kong

# Output
support output file download to local
support output file format: .FIT / .GPX
support output file encoding: GCJ02 / BD09 / WGS84
output file format default with .FIT
output file encoding default with WGC84
IF (output file format is .FIT) THEN
    encode output file with "@garmin/fitsdk@21.208.0"
    encode output file with FIT Profile
    implement create stream as https://github.com/garmin/fit-javascript-sdk/tree/21.208.0#creating-streams
    implement encoder as https://github.com/garmin/fit-javascript-sdk/tree/21.208.0#encoder
FI
