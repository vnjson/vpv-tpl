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

