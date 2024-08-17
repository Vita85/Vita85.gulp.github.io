const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

const plugins = [
  cssnano({ preset: "default" }),
  autoprefixer({
    overrideBrowserslist: ["last 2 versions"],
    cascade: true,
  }),
];

function scss() {
  return src("./assets/styles.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./assets/css"))
    .pipe(browserSync.stream())
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(dest("./assets/css"))
}

function uglifyFile() {
  return src("./main.js")
  .pipe(uglify())
  .pipe(dest("./public"));
}

function watchInit() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}

async function sync() {
  browserSync.reload();
}

function watchFiles() {
  watchInit();
  watch("./assets/**/*.scss", scss);
  watch("./*.html", sync);
  watch("./*.js", sync);
}

exports.default = series(scss, uglifyFile, watchFiles);
