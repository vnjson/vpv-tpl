function filtersVnjson(){

function isObject(data){
	return typeof(data) === 'object';
}


/*
let count = 0;

app.ticker.add(() => {
    count += 0.015;

    const blurAmount = Math.cos(count);
    const blurAmount2 = Math.sin(count);

    sprite.blur = 20 * (blurAmount);
    //blurFilter2.blur = 20 * (blurAmount2);
});*/

/*

this.on('blur', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.BlurFilter();
	sprite.filters = [filter];		
});
*/


/**
 * ansii
 */

this.on('ansii', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.AsciiFilter(data.size);
	sprite.filters = [filter];		
});

/**
 * glitch
 */

this.on('glitch', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.GlitchFilter()
	sprite.filters = [filter];		
});

this.on('dropShadow', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.DropShadowFilter()
	sprite.filters = [filter];		
});




this.on('oldFilm', (data)=>{
var sprite = null;

	if(isObject(data)){
		sprite = _assets[data.name];	
	}else{
		sprite = _assets[data];	
	}
	let filter = new PIXI.filters.OldFilmFilter(data)
	sprite.filters = [filter];		
});











}//filtersVnjson




/*
filter.contrast(0.5, true);
filter.desaturate();
filter.greyscale(0.4, false);
filter.hue(180, false);
filter.negative(true);
filter.saturate(2, false);
filter.sepia(false);
filter.technicolor(true);
filter.browni(true);
filter.kodachrome(true);
filter.toBGR(true);
*/

/**
 
PIXI.filters.AdjustmentFilter
PIXI.filters.AdvancedBloomFilter
PIXI.filters.AsciiFilter
PIXI.filters.BevelFilter
PIXI.filters.BloomFilter
PIXI.filters.BulgePinchFilter
PIXI.filters.ColorMapFilter
PIXI.filters.ColorOverlayFilter
PIXI.filters.ColorReplaceFilter
PIXI.filters.ConvolutionFilter
PIXI.filters.CrossHatchFilter
PIXI.filters.CRTFilter
PIXI.filters.DotFilter

PIXI.filters.EmbossFilter

PIXI.filters.GlowFilter
PIXI.filters.GodrayFilter
PIXI.filters.KawaseBlurFilter
PIXI.filters.MotionBlurFilter
PIXI.filters.MultiColorReplaceFilter
PIXI.filters.OldFilmFilter
PIXI.filters.OutlineFilter
PIXI.filters.PixelateFilter
PIXI.filters.RadialBlurFilter
PIXI.filters.ReflectionFilter
PIXI.filters.RGBSplitFilter
PIXI.filters.ShockwaveFilter
PIXI.filters.SimpleLightmapFilter
PIXI.filters.TiltShiftFilter
PIXI.filters.TwistFilter
PIXI.filters.ZoomBlurFilter 
 */