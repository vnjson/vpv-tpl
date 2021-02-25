/*
 * PIXI init
 */
const configPixi = {
	width: 800, 
	height: 480,
	backgroundColor: { transparent: true }
}

const app = new PIXI.Application(configPixi);
document.querySelectorAll('#pixi')[0].appendChild(app.view);

var _screens = {
	scene: new PIXI.Container('scene'),
	show: new PIXI.Container('show')
}
app.stage.addChild(_screens.scene);
app.stage.addChild(_screens.show);

//app.stop();

/**
 * VNJSON INIT
 */

const vnjs = new Vnjson();

vnjs.debug = false;


var _assets = {};


/**
 * Plugins
 */
vnjs.use(debugVnjson);
vnjs.use(jumpVnjson);
vnjs.use(gameMenuVnjson);
vnjs.use(screenVnjson);
vnjs.use(assetsLoaderVnjson);
vnjs.use(printVnjson);
vnjs.use(audioVnjson);
vnjs.use(showVnjson);
vnjs.use(sceneVnjson);
vnjs.use(clearVnjson);
vnjs.use(filtersVnjson);
vnjs.use(rotateVnjson);
vnjs.use(historyVnjson);
vnjs.use(pointVjson);
/**
 * Config loader
 */
fetch('./vn.json')
  		.then( r => r.json() )
  		.then( (config)=>{
		
const { scenes, entry, mode } = config;
/**
 * Scenes load order 
 * [once] - Assets&&scenes dinamic load
 * [all] - Load all game resourse
 */
vnjs.sceneLoader.mode = mode;
vnjs.sceneLoader.entry = entry;
if(vnjs.debug){
	vnjs.sceneLoader.mode = 'all';
}

//vnjs.current = store.getAll()

/**
 * Scene loader
 */
getScenes(scenes)

});//vn.json
/*
vnjs.on('postload', function (){
	vnjs.emit('debug')
})
*/
//
/**
 * Если мы прыгали в пределах одной сцены
 * между метками, то вызывается [ jump.label ]
 */
vnjs.on('jump.label', function (pathname){
	  vue.$data.screen = 'stream';
		vnjs.nextTick(_=>{
				vnjs.exec()
		});
});

/**
 * Если прыжок происходит между сценами,
 * то есть разница, все сцены загружены 
 * или подгружаются динамически по одной. 
 * Соответсвенно и поведение приложения
 * разное
 */

vnjs.on('jump.scene', function (){

if(vnjs.sceneLoader.mode==='all'){

		vue.$data.screen = 'stream';
		vnjs.nextTick(_=>{
				vnjs.exec()
		});
}
else if(vnjs.sceneLoader.mode==='once'){
	/*
	 * Timeout для задержки экрана 
	 * предзагрузки
	 */
	setTimeout(function (){
			vue.$data.screen = 'stream';
			vnjs.nextTick(_=>{
					vnjs.exec()
			});
	}, 300)
	
}



});






function getScenes (__scenes){


			var next = ()=>{
				
					if(scenes.length!==++i){
							loader(scenes[i], next);
					}else{
							vnjs.emit('sceneLoad', {name: 'assets', assets: this.assetsPath});
					}
					
				};



function	get (scenes, loader){
			vnjs.sceneLoader.loader = loader; 
			vnjs.sceneLoader.scenes = scenes;
			var i = 0;


				if(vnjs.sceneLoader.mode!=='once'){
						loader(scenes[i], next)
				}
			

	};


get(__scenes, function (scene, next){

fetch(scene.url)
  		.then( r => r.json() )
  		.then( (body)=>{
  				vnjs.setScene(scene.name, body);
 

  				next();				
  		});

});




}