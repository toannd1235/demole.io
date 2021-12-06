// Muon dung duoc phai install: npm install <name>
// Vi du: npm install gulp-sass

var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var browserSync = require("browser-sync").create();

// Dinh nghia cac path thu muc chua source
var paths = {
    // CSS
    scss: {
        src: "app/assets/scss/**/*.scss",
        dest: "app/assets/css"
    },
    // HTML
    html: {
        src: 'app/**/*.html',
        dest: 'app/html'
    }
};

// Bien dich scss -> css
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
        // Add browsersync stream pipe after compilation
        .pipe(browserSync.stream())
    );
}

// Theo doi thay doi file de tu dong reload page
function watch() {
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch(paths.scss.src, scss).on('change', browserSync.reload);;
    gulp.watch(paths.html.src).on('change', browserSync.reload);
}

// exports
// Khi run chi can go : "gulp" o terminal
exports.watch = watch;
exports.scss = scss;
exports.default = watch;