
var gulp = require("gulp"),
sass = require("gulp-sass"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssnano = require("cssnano"),
sourcemaps = require("gulp-sourcemaps");

var browserSync = require("browser-sync").create();

var paths = {
// CSS
scss: {
    src: "./assets/scss/**/*.scss",
    dest: "./assets/css"
},
// HTML
html: {
    src: './**/*.html',
    dest: './html'
}
};

function scss() {
return (
    gulp
    .src(paths.scss.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream())
);
}

function watch() {
browserSync.init({
    server: {
        baseDir: "./"
    }
});
gulp.watch(paths.scss.src, scss).on('change', browserSync.reload);;
gulp.watch(paths.html.src).on('change', browserSync.reload);
}

exports.watch = watch;
exports.scss = scss;
exports.default = watch;