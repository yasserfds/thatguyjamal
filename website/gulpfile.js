const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass")); // returns sass compiler
const purgecss = require("gulp-purgecss");

/**
 * Compiles sass into css function
 */
function buildStyles() {
  // file to read when compiling
  return (
    src("./app/styles/**/*.scss")
      // input source file into compiler to turn into css
      .pipe(sass({ outputStyle: "compressed" }))
      // remove un used css classes before compiling
      .pipe(purgecss({ content: ["*.html"] }))
      // where to send the compiled css to
      .pipe(dest("./app/css"))
  );
}

/**
 * Watches for changes on the buildStyles function and updates the new code
 */
function watchTask() {
  // function to run when file changes
  watch(["./app/styles/**/*.scss", "*.html"], buildStyles);
}

/**
 * Exports functions from (series) function made by gulp.
 * Will run all functions in order from top to bottom of code.
 */
exports.default = series(buildStyles, watchTask);
