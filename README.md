# FIT to GPX Converter & Map Viewer

Upload your Magene C606 .fit file to view data and export to standard GPX.

See <https://hswong3i.github.io/gcj02fit-to-wgs84gpx/>

![](index.png)

## Running Locally

Running a local test copy with:

    git clone https://github.com/hswong3i/gcj02fit-to-wgs84gpx.git
    cd gcj02fit-to-wgs84gpx
    python3 -m http.server

Check with http://0.0.0.0:8000/

## Create with Gemini

Created by Gemini as below:

    only change code required
    no coding syntax cleanup and rewrite
    fix missing power mapping

    create a html file with javascript
    style CSS with Bootstrap

    upload .fit file from local

    keep Heart Rate
    keep Cadence
    keep Power
    keep Calories
    keep Temperature
    keep Speed

    convert input file from GCJ20 to WGS84
    convert and export input file from .fit to .gpx

    display "Total Distance", "Moving Time", "Elevation"
    display "Average Speed", "Max Speed"
    display "Average Cadence", "Max Cadence"
    display "Average Power", "Max Power"
    display "Calories"
    display "Temperature"

    display exported .gpx file with map in html
    display Speed in line graph
    display Power in line graph
    display Cadence in line graph

    upload to strava.com with OAuth2.0 SSO
