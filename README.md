# FIT / TCX / GPX Converter & Map Viewer

Upload your **BROKEN** Magene C606 / C706 .FIT + GCJ02 file and re-export to standard .FIT + WGS84:

- Support multi-directional file format convert between .FIT / .TCX / .GPX
- Support multi-directional GPS encoding convert between GCJ02 / BD09 / WGS84
- Support live preview before export file

See <https://hswong3i.github.io/gcj02fit-to-wgs84gpx/>

## Why?

Since recent Magene C606 / C706 firmware upgrade:

- GPS data encoded into GCJ02 for Hong Kong
- But Strava expecting GPS data encoded with standard WGS84 format
- Magene also remove the auto sync and upload .FIT (with auto GCJ02 to WGS84 fixes) files to Strava

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
