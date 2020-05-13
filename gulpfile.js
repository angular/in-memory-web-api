var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var cp = require('child_process');
var del = require('del');
var rollup = require('rollup-stream');
var source = require('vinyl-source-stream');

var inMemSrc = './src/in-mem/';
var jsCopySrc = ['*.js', '*.js.map', '*.d.ts', '*.metadata.json'].map(ext => inMemSrc + ext);

gulp.task('help', $.taskListing.withFilters(function (taskName) {
  var isSubTask = taskName.substr(0, 1) == "_";
  return isSubTask;
}, function (taskName) {
  var shouldRemove = taskName === 'default';
  return shouldRemove;
}));

gulp.task('default', gulp.series('help'));

gulp.task('clean', function() {
  return Promise.all([
    clean([
      'aot/**/*.*',
      'src/**/*.d.ts',
      'src/**/*.js.map',
      'src/**/*.metadata.json',
      'src/**/*.ngfactory.ts',
      'src/**/*.ngsummary.json'
    ]),
    clean([
      'src/app/**.*js',
      'src/in-mem/**.*js',
      'src/in-mem/node_modules/**/*.*',
    ]),
    clean([ /* root-level copies of in-mem web api files */
      './backend.service.*',
      './http-status-codes.*',
      './http-backend.service.*',
      './http-client-backend.service.*',
      './interfaces.*',
      './http-in-memory-web-api.module.*',
      './http-client-in-memory-web-api.module.*',
      './in-memory-web-api.module.*',
      './index.*',
      './bundles/in-memory-web-api.umd.js'
    ])
  ])
  .then(() => console.log('Cleaned successfully'));
});

gulp.task('ngc', gulp.series('clean', function(done) {
  runNgc('src/in-mem/', done);
}));

// Uses rollup-stream plugin https://www.npmjs.com/package/rollup-stream
gulp.task('umd', gulp.series('ngc', function() {
  return rollup('rollup.config.js')
  .pipe(source('in-memory-web-api.umd.js'))
  .pipe(gulp.dest('./bundles'));
}));

gulp.task('build', gulp.series('umd', function(){
  return gulp
    .src(jsCopySrc)
    .pipe(gulp.dest('./'));
}));

/**
 * Bump the version
 * --type=pre will bump the prerelease version *.*.*-x
 * --type=patch or no flag will bump the patch version *.*.x
 * --type=minor will bump the minor version *.x.*
 * --type=major will bump the major version x.*.*
 * --version=1.2.3 will bump to a specific version and ignore other flags
 */
gulp.task('bump', function() {
    var msg = 'Bumping versions';
    var type = args.type;
    var version = args.ver;
    var options = {};
    if (version) {
        options.version = version;
        msg += ' to ' + version;
    } else {
        options.type = type;
        msg += ' for a ' + type;
    }
    log(msg);

    return gulp
        .src('package.json')
//        .pipe($.print())
        .pipe($.bump(options))
        .pipe(gulp.dest('./'));
});
//////////

function clean(path) {
    log('Cleaning: ' + path);
    return del(path, {dryRun:false})
    .then(function(paths) {
      console.log('Deleted files and folders:\n', paths.join('\n'));
    });
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                console.log(msg[item]);
            }
        }
    } else {
        console.log(msg);
    }
}
function runNgc(directory, done) {
    directory = directory || './';
    //var ngcjs = path.join(process.cwd(), 'node_modules/typescript/bin/tsc');
    //ngcjs = path.join(process.cwd(), 'node_modules/.bin/ngc');
    var ngcjs = './node_modules/@angular/compiler-cli/src/main.js';
    var childProcess = cp.spawn('node', [ngcjs, '-p', './tsconfig-ngc.json'], { cwd: process.cwd() });
    childProcess.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    childProcess.stderr.on('data', function (data) {
        console.log(data.toString());
    });
    childProcess.on('close', function (code) {
        if (code !== 0) {
            throw(new Error('ngc compilation exited with an error code'))
        } else {
            done();
        }
    });
}
