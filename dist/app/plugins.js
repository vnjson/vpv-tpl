function assetsLoaderVnjson (){





var assetsLoader = (scene)=>{



if(scene.assets.length === 0){
this.emit('preload', scene);	
	this.emit('load', '[  ]')
this.emit('postload', scene);
}
else{
const loader = new PIXI.Loader();

loader.onStart.add(() => {
	this.emit('preload', scene);
});
loader.add(scene.assets).load();

loader.onLoad.add((loader, res) => {

			if(res.extension==='mp3'){

				_assets[res.name] = res.sound;
			}else{
				_assets[res.name] = new PIXI.Sprite(res.texture);
			}
			this.emit('load', `${Math.round(loader.progress)}%`, res.url);

		}); 

loader.onComplete.add(() => {
	this.emit('postload', scene);
});

}


};

this.on('sceneLoad', assetsLoader);	

this.on('preload', function (scene){
	if(vnjs.sceneLoader.mode==='once')
				vue.$data.screen = 'preload';

});




};



function audioVnjson (data){

this.on('audio', data=>{

PIXI.sound.stopAll();

if(typeof data==='string'){
		if(data==="pause"){
			PIXI.sound.togglePauseAll();
		}
		else if(data==='stop'){
			PIXI.sound.stopAll();
		}
		else if(action==='mute'){
			//PIXI.sound.toggleMuteAll();
		}
		else{
			_assets[name].volume = vnjs.current.conf.volume/1000;
			_assets[data].play();
			prevAudio = data;
		}
}
else{
let { name, volume, action, loop, speed } = data;
let vol = Number(volume)||vnjs.current.conf.volume;
_assets[name].volume =  vol/1000;


//sound.togglePauseAll()
_assets[name].speed = speed||1;
_assets[name].loop = loop||false;

if(action==="pause"){
	PIXI.sound.togglePauseAll();
}
else if(action==='stop'){
	PIXI.sound.stopAll();
}
else if(action==='mute'){
	PIXI.sound.toggleMuteAll();
}
else{
	_assets[name].play();
	prevAudio = name;
}

};


})
}


function debugVnjson (){

this.on('*', err=>{
	console.error(`Плагин { ${err} } не зарегистрирован`);
});	

this.on('exec', ctx=>{
	this.emit('history');

	this.emit('stateSave')
});

this.on('preload', scene=>{
	if(this.debug)
		console.log(`<${scene.name}>`);
});

this.on('load', (progress, url)=>{
	if(this.debug)
			console.log(progress, url)
})

this.on('postload', scene=>{
	if(this.debug)
			console.log(`</${scene.name}>`);

});

this.on('debug', function (){
if(this.debug){

	this.emit('stateLoad')

}
});

}
function clearVnjson(){


function clear(stage){
if(stage){
	let i = _screens[stage].children.length-1;
	for (i; i>=0; i--){
		_screens[stage].removeChild(_screens[stage].children[i]);
	};
}
else{
		let i = app.stage.children.length-1;
		for (i; i>=0; i--) {	
			app.stage.removeChild(app.stage.children[i]);
		};	
	}
}	


this.on('clear', clear)

}
function filtersVnjson(){

function isObject(data){
	return typeof(data) === 'object';
}


/*
let count = 0;

app.ticker.add(() => {
    count += 0.015;

    const blurAmount = Math.cos(count);
    const blurAmount2 = Math.sin(count);

    sprite.blur = 20 * (blurAmount);
    //blurFilter2.blur = 20 * (blurAmount2);
});*/

/*

this.on('blur', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.BlurFilter();
	sprite.filters = [filter];		
});
*/


/**
 * ansii
 */

this.on('ansii', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.AsciiFilter(data.size);
	sprite.filters = [filter];		
});

/**
 * glitch
 */

this.on('glitch', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.GlitchFilter()
	sprite.filters = [filter];		
});

this.on('dropShadow', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.DropShadowFilter()
	sprite.filters = [filter];		
});




this.on('oldFilm', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.OldFilmFilter(data)
	sprite.filters = [filter];		
});











}//filtersVnjson




/*
filter.contrast(0.5, true);
filter.desaturate();
filter.greyscale(0.4, false);
filter.hue(180, false);
filter.negative(true);
filter.saturate(2, false);
filter.sepia(false);
filter.technicolor(true);
filter.browni(true);
filter.kodachrome(true);
filter.toBGR(true);
*/

/**
 
PIXI.filters.AdjustmentFilter
PIXI.filters.AdvancedBloomFilter
PIXI.filters.AsciiFilter
PIXI.filters.BevelFilter
PIXI.filters.BloomFilter
PIXI.filters.BulgePinchFilter
PIXI.filters.ColorMapFilter
PIXI.filters.ColorOverlayFilter
PIXI.filters.ColorReplaceFilter
PIXI.filters.ConvolutionFilter
PIXI.filters.CrossHatchFilter
PIXI.filters.CRTFilter
PIXI.filters.DotFilter

PIXI.filters.EmbossFilter

PIXI.filters.GlowFilter
PIXI.filters.GodrayFilter
PIXI.filters.KawaseBlurFilter
PIXI.filters.MotionBlurFilter
PIXI.filters.MultiColorReplaceFilter
PIXI.filters.OldFilmFilter
PIXI.filters.OutlineFilter
PIXI.filters.PixelateFilter
PIXI.filters.RadialBlurFilter
PIXI.filters.ReflectionFilter
PIXI.filters.RGBSplitFilter
PIXI.filters.ShockwaveFilter
PIXI.filters.SimpleLightmapFilter
PIXI.filters.TiltShiftFilter
PIXI.filters.TwistFilter
PIXI.filters.ZoomBlurFilter 
 */
function historyVnjson(){



function history(){

	let { labelName, sceneName, index } = this.current;
let pathName =`/${sceneName}/${ labelName }`

window.location.hash = pathName;

}

this.on('history', history)

this.on('stateLoad', function (){

var current = store.getAll();

var ctx = {
			jump: [current.sceneName, current.labelName].join('.'),
			scene: current.layer.scene,
			show: current.layer.show
}
this.exec(ctx)


});

this.on('stateSave', function (){

store(this.current)
});


}


function jumpVnjson(){





this.on('jump', pathname=>{

				let path = pathname.split('.');

				this.current.index = 0;
				//label
				if(!/\./i.test(pathname)){
					this.current.labelName = path[0];
					this.emit('jump.label', pathname)
				}
				//scene.label
				if(/\./i.test(pathname)){
						this.current.sceneName = path[0];
						this.current.labelName = path[1];
					
						if(this.sceneLoader.mode==='once'){
							//this.assetsPath = []
							var arr = this.sceneLoader.scenes.filter(item=>{ return item.name===path[0];})
							let next = ()=>{
										this.emit('sceneLoad', {name: arr[0].name, assets: this.assetsPath});
										this.on('postload', ()=>{
											this.emit('jump.scene', pathname)
										})
							}
							this.assetsPath = [];
							this.sceneLoader.loader(arr[0], next);
						}
						else{
								this.emit('jump.scene', pathname)
						};
				};
			})



}
function gameMenuVnjson(){



function gameMenu(menu){
	vue.$data.screen = "gamemenu";
	setTimeout(drawMenu, 0);

function drawMenu(){

vnjs.$.menu_items.innerHTML = "";
	for(let [menuItem, label] of Object.entries(menu)){
		
		if(menuItem==='?'){
			vnjs.$.menu_quetion.innerHTML = label;
		}else{

			let strmenu = `<div data-label="${ label }" class="menu-item">${menuItem}</div>`;
			vnjs.$.menu_items.innerHTML +=strmenu;
		}
	};

	}



}

this.on('menu', gameMenu)

}

function pointVjson(){


this.on('point', function (point){
		this.current.data.points = this.current.data.points+point;
//scoresEl.innerHTML = `scores: ${scoresData}`;

});

}
function printVnjson (){

function removeSignal (){
	vnjs.$.signal.style.display = 'none';
	vnjs.$.signal.classList.remove('dialog-box__signal--ctc');
}
function addSignal (){
	vnjs.$.signal.style.display = 'inline-block';
	vnjs.$.signal.classList.add('dialog-box__signal--ctc');
}
/*
function isSignal (){
	let ctc = vnjs.$.signal.classList.contains('dialog-box__signal--ctc');
	if(ctc) return true;
}
*/
function print(reply, color){

removeSignal();


vnjs.$.reply.innerHTML = "";
vnjs.$.reply.style.color = color;

if(vnjs.current.conf.typespeed==='0'){
		vnjs.$.reply.innerHTML = reply;
}
else{
	
var arr = reply.split("");
/**
 * Оборачиваю каждую букву в элемент
 * и делаю его невидимым
 */
var str = arr.map(character=>{
							return `<span class="char-letter">${character}<span>`
					}).join("");

vnjs.$.reply.innerHTML = str;

////////////////
var charsArr = document.querySelectorAll('.char-letter');
var i = 0;

function showLetter(){

if(charsArr.length===i){

 clearTimeout(timeoutID);
	setTimeout(_=>{
		addSignal()
	},10) 

}else{

	charsArr[i].style.opacity = 1;
	i++;
	var timeoutID = setTimeout(showLetter, vnjs.current.conf.typespeed)
}
}
showLetter();
}
};


this.on('print', print);


this.on('character', (character, reply)=>{
	vnjs.current.characterName = character.name;
	vnjs.$.name.innerHTML = character.text;
	vnjs.$.name.style.color = character.color
	print(reply, character.color)

})

}






function rotateVnjson(){




function rotate(name){
	let sprite = _assets[name];

app.ticker.add((delta) => {
    sprite.rotation += 0.02 * delta;
});

}

function vnjsonScale(name){
	//let sprite = _assets[name];
	//sprite.scale.set(2,2);
}

this.on('rotate', rotate);
}
function sceneVnjson(){


function drawScene (name){
	this.emit('clear', 'scene');
	/*
var sprite = null;
if(this.current.layer.scene){
	sprite = _assets[this.current.layer.scene];
}else{

	this.current.layer.scene = name;
	
}
		
*/

	//snake
	//"left":"+=8px"
	//"left":"-=8px"
	//"left":"+=8px"
	//"left":"-=8px"
//blink
//"top":"+=5px"
//"top":"-=5px"
sprite = _assets[name];
_screens.scene.addChild(sprite);	



}
	this.on('scene', drawScene)
}


function screenVnjson(){

this.on('screen', function (screenName){
	vue.$data.screen = screenName;
});	
}
function showVnjson(){


const show = param=>{
	let { x, y, name } = param;
	let sprite = _assets[param.name];
			sprite.x = `${x}px`;
			sprite.y = `${y}px`;
		//	sprite.alpha = 0;
_screens.show.addChild(sprite);

}




const left = name=>{
var ticker = PIXI.Ticker.shared;
var sprite = null;
function animation (delta){
	if(sprite.alpha!==1)
					sprite.alpha += 0.05;
}

if(name==='clear'){
	sprite = _assets[this.current.layer.show.left];
	ticker.stop()
  sprite.alpha = 0;

}
else{
			this.current.layer.show.left = name;
			sprite = _assets[name];
			sprite.anchor.set(0.5);
			sprite.alpha = 0;
			sprite.x = 130;
			sprite.y = app.screen.height / 2;
			_screens.show.addChild(sprite);
			ticker.add(animation);
			ticker.start()
}
}

const right = name=>{

var ticker = PIXI.Ticker.shared;
var sprite = null;
function animation (delta){
	if(sprite.alpha!==1)
					sprite.alpha += 0.05;
}

if(name==='clear'){
	sprite = _assets[this.current.layer.show.right];
	ticker.stop()
  sprite.alpha = 0;

}
else{
			this.current.layer.show.right = name;
			sprite = _assets[name];
			sprite.anchor.set(0.5);
			sprite.alpha = 0;
			sprite.x = app.screen.width-130;
			sprite.y = app.screen.height / 2;
			_screens.show.addChild(sprite);

			ticker.add(animation);
			ticker.start()
	}		
}


const center = name=>{
var ticker = PIXI.Ticker.shared;
var sprite = null;
function animation (delta){
	if(sprite.alpha!==1)
					sprite.alpha += 0.05;
}

if(name==='clear'){
	sprite = _assets[this.current.layer.show.center];
	ticker.stop()
  sprite.alpha = 0;

}
else{
			this.current.layer.show.center = name;
					sprite = _assets[name];
					sprite.anchor.set(0.5);
					sprite.alpha = 0;
					sprite.x = app.screen.width / 2;
					sprite.y = app.screen.height / 2;

			_screens.show.addChild(sprite);

			ticker.add(animation);
			ticker.start()
}
};

this.on('show', show);
this.on('right', right);
this.on('left', left);
this.on('center', center );
}