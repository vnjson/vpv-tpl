function screenVnjson(){

this.on('screen', function (screenName){
	vue.$data.screen = screenName;
});	
}