# Rules
only change code required
only change comment required
synchronize coding style
synchronize comment style
synchronize implementation style
synchronize layout design
style with Bootstrap
check with ESLint
check with Stylelint
fix missing power mapping

# Input
upload source file in .FIT / .GPX from local
add ajax toggle for source file format: .FIT (default) / .GPX
add ajax toogle for source file encoding GCJ02 (default) / BD09 / WGS84

# Logic
create a "index.html" with javascript
convert source file format into WGS84
convert source file encoding into .GPX
add refresh button for uploaded source file

keep "Speed"
keep "Heart Rate"
keep "Cadence"
keep "Power"
keep "Calories"
keep "Temperature"
keep "Elevation"

display "Activity Date"
display "Total Distance", "Moving Time", "Elevation"
display "Average Speed", "Max Speed"
display "Average Heart Rate", "Max Heart Rate"
display "Average Cadence", "Max Cadence"
display "Average Power", "Max Power"
display "Average Temperature", "Max Temperature"
not display "Calories"

default map center to Hong Kong
display converted .GPX file with map in html
display "Speed" in line graph
display "Heart Rate" in line graph
display "Cadence" in line graph
display "Power" in line graph
display "Elevation" in line graph
display "Temperature" in line graph

# Output
download converted output file in .FIT / .GPX to local
add ajax toogle for output file format: .FIT / .GPX (default)
add ajax toogle for output file encoding: GCJ02 / BD09 / WGS84 (default)
upload to strava.com with OAuth2.0 SSO
