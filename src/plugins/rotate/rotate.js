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