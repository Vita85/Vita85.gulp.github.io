# Gulp Project for SCSS Compilation and JS Minification

## Contents
- Prerequisites
- Installation
- Gulp Tasks
  - SCSS Compilation
  - JavaScript Minification
  - Watch Files and Live Reload
- Usage
- File Structure

### SCSS
__Description__
This task compiles SCSS files located in _./assets/styles.scss_ into CSS. 
It generates ___sourcemaps___, processes the CSS with ___PostCSS___ plugins like ___autoprefixer___ and ___cssnano___ (for minification), and writes the output to ./assets/css.
### JavaScript Minification
 * uglifyFile()
__Description__
 This task minifies the JavaScript file main.js and saves the minified version to the _./public_ directory.
### Watch Files and Live Reload
 * watchFiles()
__Description__
This task initializes a local development server using ___browser-sync___ , ___watches___ for changes in SCSS, HTML, and JS files, and reloads the browser automatically whenever changes are detected.

#### Additional Notes

 * Autoprefixer: 
 _Ensures compatibility with the last 5 versions of major browsers._
 * CSS Nano: 
 _Used for minifying the CSS._
* Sourcemaps: 
_Sourcemaps are generated for both the compiled CSS and minified JavaScript for easier debugging._