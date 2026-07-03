# FIT to GPX Converter & Map Viewer

Upload your Magene C606 / C706 .FIT file to view data and export to standard GPX.

- Support bi-directional convert between .FIT / .GPX
- Support tri-directional convert between GCJ02 /BD09 / WGS84
- Support live preview data with refresh
- Support upload to Strava with OAuth 2.0 SSO (not tested)

See <https://hswong3i.github.io/gcj02fit-to-wgs84gpx/>

## Why?

Since recent firmware upgrade, the GPS data now encoded with GCJ02 format for Hong Kong, so it is not usable with Strava which expecting GPS data encoded with standard WGS84 format.

Magene also remove the auto sync and upload .FIT (with auto GCJ02 to WGS84 fixes) files to Strava.

Well~ Don't Wait, Just Fix It!

## Running Locally

Running a local test copy with:

    git clone https://github.com/hswong3i/gcj02fit-to-wgs84gpx.git
    cd gcj02fit-to-wgs84gpx
    python3 -m http.server

Check with <http://0.0.0.0:8000/>

## Create with Gemini

Created by Gemini as below:

    # Rules
    only change code required
    only change comment required
    synchronize coding style
    synchronize comment style
    synchronize implementation style
    synchronize layout design
    check with eslint
    check with stylelint
    fix missing power mapping

    # Input 
    upload source file in .FIT / .GPX from local
    add ajax toggle for source file format: .FIT (default) / .GPX
    add ajax toogle for source file encoding GCJ02 (default) / BD09 / WGS84

    # Logic
    create a html file with javascript
    style CSS with Bootstrap
    convert source file format into WGS84
    convert source file encoding into .GPX
    add refresh button for uploaded source file

    keep "Speed"
    keep "Heart Rate"
    keep "Cadence"
    keep "Power"
    keep "Calories"
    keep "Temperature"

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
    display "Temperature" in line graph

    # Output
    download converted output file in .FIT / .GPX to local
    add ajax toogle for output file format: .FIT / .GPX (default)
    add ajax toogle for output file encoding: GCJ02 / BD09 / WGS84 (default)
    upload to strava.com with OAuth2.0 SSO

## Demo Layout

![](index.png)

## License

- Code released under [Apache License 2.0](LICENSE)
- Docs released under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Author Information

- Wong Hoi Sing Edison
  - <https://twitter.com/hswong3i>
  - <https://github.com/hswong3i>
