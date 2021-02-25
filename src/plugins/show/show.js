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