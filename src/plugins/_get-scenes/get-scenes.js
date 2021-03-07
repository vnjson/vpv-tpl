function getScenesVnjson (){

function getScenes(scenes){

var i = 0;



function loader(scene, next){

fetch(scene.url)
  		.then( r => r.json() )
  		.then( sceneBody=>{
  				this.setScene(scene.name, sceneBody);
   				next();				
  		});
};

this.sceneLoader = loader;

if(this.conf.mode!=='once'){
loader(scenes[i], function next (){

					if(scenes.length-1>=++i){

							loader(scenes[i], next);
					}else{
							this.emit('sceneLoad', {name: 'assets', assets: this.assetsPath});
					}

})

	
}

}

this.on('getScenes', getScenes)


}