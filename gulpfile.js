const { parallel, src, dest, watch, series } = require('gulp');
const { join, resolve, basename } = require('path');

const
  webpack         = require('webpack'),
  webpackConfig   = require('./webpack.config'),
  concat          = require('gulp-concat'),
  rename          = require('gulp-rename'),
  sass            = require('gulp-sass'),
  fs              = require('fs'),
  connect         = require('gulp-connect'),
  scenesToJson    = require('scenes-to-json');


sass.compiler   = require('node-sass');
/*
 * [ vn.json ]
 */
function vnjsonConfig (cb) {
var VNJSON = require('./dist/vn.json');

var SCENES = [];

fs.readdir('./dist/scenes', function (err, dir){
 dir.map(scene=>{
   if(/\.json/i.test(scene)){
    let pathToScene = `./scenes/${scene}`;
    let _scene = { 
          name: basename(scene, '.json'), 
          url: pathToScene 
        };
        SCENES.push(_scene)
   }
 });

VNJSON.scenes = SCENES;

let configFile = JSON.stringify(VNJSON, null, '\t') 

fs.writeFileSync('./dist/vn.json', configFile);
  cb();
});

}
/*
 * SERVER
 */
function server (cb) {

connect.server({
    port: 9000,
    root: './dist',
    livereload: true
  });

  cb();
}
/*
 * SCSS
 */
function styles (cb){
 return src('./src/styles/**.{scss,css}')
       .pipe(sass.sync().on('error', sass.logError))
       .pipe(dest('./dist/css/'))
       .pipe(connect.reload());
  cb();
}


/*
 * PLUGINS
 */

function plugins (cb) {

return src('./src/plugins/**/*.js')
			.pipe( concat('plugins.js') )
			.pipe( dest('./dist/app/') )
			.pipe(connect.reload());

  cb();
}

/*
 * SCENES
 */

function scenes (cb){
var url = './scenes/assets/';

scenesToJson('./src/scenes', './dist/scenes', (err, data)=>{
  if(err){
     console.log(`[ ${err.reason} ]`);
     console.log('line', err.mark.line, 'column', err.mark.column)
     console.log(err.mark.snippet);
     cb();
  }else{
    src('./').pipe(connect.reload());
    cb();
  }

}, url)

};


function screens (cb){
  webpack(webpackConfig, (err, stats) => { 
  if(stats.hasErrors()) {
   
    const info = stats.toJson();
    info.errors.map(errorobj=>{
       console.log(errorobj.message)
    })
    cb();
  }
  else{

    src('./').pipe(connect.reload());
    cb();
  }

  
});

}



/**
 * WATCH
 */

function watchDir(cb) {

  watch('./src/plugins/**/*.js', plugins);
  watch('./src/scenes/**/*.yaml', parallel(scenes, vnjsonConfig) );
  watch('./src/styles/*.scss', styles);
  watch('./src/screens/*.{vue,js}', screens);
  cb();
};

exports.default =  parallel(server, watchDir);