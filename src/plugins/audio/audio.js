


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
			_assets[name].volume = vnjs.current.options.volume/1000;
			_assets[data].play();

		}
}
else{
let { name, volume, action, loop, speed } = data;
let vol = Number(volume)||vnjs.current.options.volume;
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

}

};


})
}

