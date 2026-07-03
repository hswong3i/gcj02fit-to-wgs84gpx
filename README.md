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

## Demo Layout

![](index.png)

## License

- Code released under [Apache License 2.0](LICENSE)
- Docs released under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)

## Author Information

- Wong Hoi Sing Edison
  - <https://twitter.com/hswong3i>
  - <https://github.com/hswong3i>
