
function pointVjson(){


this.on('point', function (point){
		this.current.data.points = this.current.data.points+point;
//scoresEl.innerHTML = `scores: ${scoresData}`;

});

}