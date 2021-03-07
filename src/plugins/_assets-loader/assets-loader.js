function assetsLoaderVnjson (){





var assetsLoader = scene=>{



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
console.log(scene)
loader.add(scene.assets).load();

loader.onLoad.add((loader, res) => {

			if(res.extension==='mp3'){

				_assets[res.name] = res.sound;
			}else{
				_assets[res.name] = new PIXI.Sprite(res.texture);
			}
			this.emit('load', `${Math.round(loader.progress)}%`, res.url);

		}); 

loader.onComplete.add(_=> {

	this.emit('postload', scene);
});

}


};

this.on('sceneLoad', assetsLoader);	

this.on('preload', function (scene){
	if(this.conf.mode==='once')
				vue.$data.screen = 'preload';

});




};