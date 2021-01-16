// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const {
  src,
  dest,
  series,
  parallel
} = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// File paths
const files = {
  cssPath: 'assets/css/**/*.css'
}

// Sass task: compiles the style.scss file into style.css
function cssTask() {
  return src([
    'assets/bootstrap/css/bootstrap.min.css', 
    'assets/css/ionicons.min.css',
    'assets/css/themify-icons.css',
    'assets/owlcarousel/css/owl.carousel.min.css',
    'assets/owlcarousel/css/owl.theme.css',
    'assets/owlcarousel/css/owl.theme.default.min.css',
    'assets/css/magnific-popup.css',
    'assets/css/style.css',
    'assets/css/responsive.css',
    'assets/css/**/*.css'])
    .pipe(concat('style.css'))
    // .pipe(uglify())
    .pipe(dest('dist')); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask() {
  return src([
      'assets/js/jquery-1.12.4.min.js',
      'assets/js/jquery-ui.js',
      'assets/js/popper.min.js',
      'assets/bootstrap/js/bootstrap.min.js',
      'assets/owlcarousel/js/owl.carousel.min.js',
      'assets/js/magnific-popup.min.js',
      'assets/js/waypoints.min.js',
      'assets/js/parallax.js',
      'assets/js/jquery.countdown.min.js',
      'assets/js/jquery.counterup.min.js',
      'assets/js/imagesloaded.pkgd.min.js',
      'assets/js/isotope.min.js',
      'assets/js/**/*.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dist'));
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
  parallel(cssTask, jsTask)
);