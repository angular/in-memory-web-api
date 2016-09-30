var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var args = require('yargs').argv;
var cp = require('child_process');
var del = require('del');

var path = require("path");

var ngcOutput = './src/';
var jsCopySrc = ['*.js', '*.js.map', '*.d.ts', '*.metadata.json'].map(ext => ngcOutput + ext);

gulp.task('default', ['help']);

gulp.task('help', $.taskListing.withFilters(function (taskName) {
  var isSubTask = taskName.substr(0, 1) == "_";
  return isSubTask;
}, function (taskName) {
  var shouldRemove = taskName === 'default';
  return shouldRemove;
}));

gulp.task('build', ['ngc'], function(){
  return gulp
    .src(jsCopySrc)
    .pipe(gulp.dest('./'));
});

gulp.task('ngc',['clean'], function(done) {
    runNgc('./', done);
});

gulp.task('clean', function(done) {
  clean([ngcOutput+'*.js', '*.js.map', '*.d.ts', '!gulpfile.js', '*.metadata.json'], done);
});

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

function clean(path, done) {
    log('Cleaning: ' + $.util.colors.blue(path));
    del(path, {dryRun:false})
    .then(function(paths) {
      console.log('Deleted files and folders:\n', paths.join('\n'));
    })
    .then(done,done);
}

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
function runNgc(directory, done) {
    directory = directory || './';
    //var ngcjs = path.join(process.cwd(), 'node_modules/typescript/bin/tsc');
    //ngcjs = path.join(process.cwd(), 'node_modules/.bin/ngc');
    var ngcjs = './node_modules/@angular/compiler-cli/src/main.js';
    var childProcess = cp.spawn('node', [ngcjs, '-p', directory], { cwd: process.cwd() });
    childProcess.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    childProcess.stderr.on('data', function (data) {
        console.log(data.toString());
    });
    childProcess.on('close', function () {
        done();
    });
}

// WILL THIS WORK? DOES IT PROMPT?
function runTypings(done) {
    var typingsjs = path.join(process.cwd(), 'node_modules/typings/dist/bin/typings');
    var childProcess = cp.spawn('node', [typingsjs, 'install'], { cwd: process.cwd() });
    childProcess.stdout.on('data', function (data) {
        console.log(data.toString());
    });
    childProcess.stderr.on('data', function (data) {
        console.log(data.toString());
    });
    childProcess.on('close', function () {
        done();
    });
}
