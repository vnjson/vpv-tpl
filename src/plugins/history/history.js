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