var scenesToJson = require('scenes-to-json');
var { join, resolve } = require('path')
var src = resolve(__dirname,'./src/scenes');
var dist = resolve(__dirname,'./dist/scenes');
var url = './scenes/assets/';//path into scene.assets[{url:"/assets/"}] default /scenes/assets/

const PLUGIN_NAME = 'scenes-to-json';

class scenesToJsonPlugin {
  apply(compiler) {

    compiler.hooks.compilation.tap(PLUGIN_NAME, (ctx) => {
    
      ctx.hooks.optimize.tap(PLUGIN_NAME, () => {

  		 scenesToJson(src, dist, (err, data)=>{
  				if(err){

     				console.dir(err.reason);
     				console.log('line', err.mark.line, 'column', err.mark.column)
     				console.log(err.mark.snippet);
  				}else{
  					console.dir(data)

  				}

				}, url);
      });
    });
  }
}

module.exports = scenesToJsonPlugin;
