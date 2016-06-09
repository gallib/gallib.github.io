var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');
var shell       = require('gulp-shell');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['minify-images'], function (done) {
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

    browserSync.notify(messages.jekyllBuild);

    return cp.spawn(jekyll, ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Build the Jekyll Site for production
 */
gulp.task('jekyll-build-prod', ['minify-images'], function (done) {
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

    browserSync.notify(messages.jekyllBuild);

    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        port: 3000
    });
});

/**
 * Minify Images
 */
gulp.task('minify-images', function () {
    return gulp.src('./_images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./img/'));
});

gulp.task('deploy', ['jekyll-build-prod'], shell.task([
    'git add --all && git commit -m "update site content" && git push origin master'
]));

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/app.scss')
        .pipe(sass({
            includePaths: sassPaths,
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 2 versions', 'ie >= 9'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_scss/*.scss'], ['sass']);
    gulp.watch(['*.md', '*.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_config.yml', '_config_dev.yml'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
