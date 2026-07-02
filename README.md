# FIT to GPX Converter & Map Viewer

Upload your Magene C606 / C706 .fit file to view data and export to standard GPX.

See <https://hswong3i.github.io/gcj02fit-to-wgs84gpx/>

## Why?

Since recent firmware upgrade, the GPS data now encoded with GCj02 format for Hong Kong, so it is not usable with Strava which expecting GPS data encoded with standard WGS84 format.

Magene also remove the auto sync and upload .fit (with auto GCJ02 to WGS84 fixes) files to Strava.

Well~ Don't Wait, Just Fix It!

## Running Locally

Running a local test copy with:

    git clone https://github.com/hswong3i/gcj02fit-to-wgs84gpx.git
    cd gcj02fit-to-wgs84gpx
    python3 -m http.server

Check with <http://0.0.0.0:8000/>

## Create with Gemini

Created by Gemini as below:

    only change code required
    no coding syntax cleanup and rewrite
    fix missing power mapping

    create a html file with javascript
    style CSS with Bootstrap
    default map center to Hong Kong

    upload .fit file from local
    convert input file from GCJ20 to WGS84
    convert and export input file from .fit to .gpx
    upload to strava.com with OAuth2.0 SSO

    keep "Speed"
    keep "Heart Rate"
    keep "Cadence"
    keep "Power"
    keep "Calories"
    keep "Temperature"

    display "Total Distance", "Moving Time", "Elevation"
    display "Average Speed", "Max Speed"
    display "Average Heart Rate", "Max Heart Rate"
    display "Average Cadence", "Max Cadence"
    display "Average Power", "Max Power"
    display "Average Temperature", "Max Temperature"
    not display "Calories"

    display exported .gpx file with map in html
    display "Speed" in line graph
    display "Heart Rate" in line graph
    display "Cadence" in line graph
    display "Power" in line graph
    display "Temperature" in line graph

## Demo Layout

![](index.png)

## License

- Code released under [Apache License 2.0](LICENSE)
- Docs released under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Author Information

- Wong Hoi Sing Edison
  - <https://twitter.com/hswong3i>
  - <https://github.com/hswong3i>
