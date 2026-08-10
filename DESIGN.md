# DESIGN.md

Version: 20260809.1.0

## Overview

The FIT / TCX / GPX Converter & Map Viewer is a client-side web application that enables users to upload activity files (FIT, TCX, or GPX formats), view their telemetry data (such as speed, heart rate, cadence, power, elevation, and temperature) on an interactive map and line charts, and convert these files into different formats or encodings (GCJ02, BD09, WGS84).

## Architecture

- **Frontend:** Built with HTML, CSS (Bootstrap 5), and JavaScript.
- **Dependencies:**
  - `Bootstrap 5`: For UI components and layout.
  - `Leaflet`: For interactive map visualization.
  - `Chart.js`: For displaying telemetry performance data.
  - `@garmin/fitsdk`: For decoding and encoding FIT files.
  - `github-fork-ribbon-css`: To display the "Fork me on GitHub" ribbon.
- **Processing Logic:** Client-side processing using JavaScript modules.

## Features

- **File Upload:** Supports uploading `.fit`, `.tcx`, and `.gpx` files.
- **Conversion:** Enables converting between different file formats and geospatial encodings (GCJ02, BD09, WGS84).
- **Visualization:**
  - **Dashboard:** Displays activity summary data like distance, moving time, elevation, and average/max metrics.
  - **Map:** Visualizes the route on an OpenStreetMap map.
  - **Line Graphs:** Telemetry performance charts for Speed, Heart Rate, Cadence, Power, Elevation, and Temperature.
- **Export:** Allows downloading the converted activity files in the selected format and encoding.

## Layout

The application consists of a single-page layout centered in a container. It includes:

- A header section with application title.
- A settings section for input and output configuration (Format and Encoding).
- Action buttons for file upload, refresh, and export.
- A dashboard grid for statistical display.
- A map area.
- A container for telemetry charts.

## Implementation Details

The application is implemented as a static HTML file (`index.html`) containing all necessary UI structure, styling, and JavaScript logic to handle file parsing, data conversion, and visualization using the specified libraries.
