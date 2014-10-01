'use strict';

var gulp      = require('gulp'),
    fs        = require('fs'),
    url       = require('url'),
    pushState = require('connect-pushstate/lib/pushstate').pushState,
    proxy     = require('proxy-middleware'),
    notifier  = new require('node-notifier')(),
    $         = require('gulp-load-plugins')();

var DEV_DIR         = 'dev/',
    KEY_DIR         = process.env.HOME+'/.attack-slug',
    CDN_PREFIX      = 'https://d37ykugyuc47vx.cloudfront.net/',
    AWS;

var scssImportPaths = [
  'app/bower_components/foundation/scss',
  'app/bower_components/fontawesome/scss'
];


// Styles
gulp.task('dev-styles', function () {
  return gulp.src('app/scss/app.scss')
    .pipe($.plumber({
      errorHandler: function(err) {
        notifier.notify({
          title: 'Style Error',
          message: err.message
        });
        $.util.log($.util.colors.red(err.message));
        $.util.beep();
      }
    }))
    .pipe($.compass({
      sass:        'app/scss',
      image:       'app/images',
      css:         DEV_DIR + 'styles'
    }))
    .pipe(gulp.dest(DEV_DIR + 'styles'))
    .pipe($.size())
    .pipe($.connect.reload());
});

// Scripts
gulp.task('dev-scripts', function () {
  return gulp.src('app/scripts/main.js')
    .pipe($.plumber({
      errorHandler: function(err) {
        notifier.notify({
          title: 'Script Error',
          message: err.message
        });
        $.util.log($.util.colors.red(err.message));
      }
    }))
    .pipe($.browserify({
      debug: true,
      transform: ['reactify']
    }))
    .pipe(gulp.dest(DEV_DIR + 'scripts'))
    .pipe($.size())
    .pipe($.connect.reload());
});


// HTML
gulp.task('dev-html', function () {
  return gulp.src('app/*.html')
    .pipe(gulp.dest(DEV_DIR))
    .pipe($.size())
    .pipe($.connect.reload());
});


// Images
gulp.task('dev-images', function () {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(DEV_DIR + 'images'))
    .pipe($.size())
    .pipe($.connect.reload());
});


// Fonts
gulp.task('dev-fonts', function() {
  gulp.src(['app/bower_components/fontawesome/fonts/*'])
    .pipe(gulp.dest(DEV_DIR + 'fonts/fontawesome'))
    .pipe($.size());

  return gulp.src(['app/fonts/**/*'])
    .pipe(gulp.dest(DEV_DIR + 'fonts'))
    .pipe($.size())
    .pipe($.connect.reload());
});


// Clean
gulp.task('clean', function () {
    return gulp.src(['dev/**'], {read: false}).pipe($.clean());
});

// Dev Server
gulp.task('dev', ['dev-html', 'dev-styles', 'dev-scripts',
                  'dev-images', 'dev-fonts', 'connect', 'watch']);

// Default task
gulp.task('default', ['clean'], function () { gulp.start('dev'); });

// Connect
gulp.task('connect', $.connect.server({
  root: __dirname + '/' + DEV_DIR,
  port: 9000,
  livereload:{
    port: 35729
  },
  middleware: function() {
    var apiProxy = url.parse('http://localhost:3000');
    apiProxy.route = '/api';
    return [ proxy(apiProxy), pushState() ];
  }
}));


// Watch
gulp.task('watch', ['connect'], function () {
    gulp.watch([
        'app/scss/**/*.scss',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ], $.connect.reload);
    gulp.watch('app/scss/**/*.scss',  ['dev-styles']);
    gulp.watch('app/scripts/**/*.js', ['dev-scripts']);
    gulp.watch('app/images/**/*',     ['dev-images']);
    gulp.watch('app/data/**/*',       ['dev-scripts']);
    gulp.watch('app/fonts/**/*',      ['dev-fonts']);
    gulp.watch('app/**/*.html',       ['dev-html']);
});
