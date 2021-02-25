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