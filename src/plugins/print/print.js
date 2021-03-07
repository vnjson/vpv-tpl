function printVnjson (){

function removeSignal (){
	vnjs.$.signal.style.display = 'none';
	vnjs.$.signal.classList.remove('dialog-box__signal--ctc');
}
function addSignal (){
	vnjs.$.signal.style.display = 'inline-block';
	vnjs.$.signal.classList.add('dialog-box__signal--ctc');
}
/*
function isSignal (){
	let ctc = vnjs.$.signal.classList.contains('dialog-box__signal--ctc');
	if(ctc) return true;
}
*/
function print(reply, color){

removeSignal();


vnjs.$.reply.innerHTML = "";
vnjs.$.reply.style.color = color;

if(vnjs.current.options.typespeed==='0'){
		vnjs.$.reply.innerHTML = reply;
}
else{
	
var arr = reply.split("");
/**
 * Оборачиваю каждую букву в элемент
 * и делаю его невидимым
 */
var str = arr.map(character=>{
							return `<span class="char-letter">${character}<span>`
					}).join("");

vnjs.$.reply.innerHTML = str;

////////////////
var charsArr = document.querySelectorAll('.char-letter');
var i = 0;

function showLetter(){

if(charsArr.length===i){

 clearTimeout(timeoutID);
	setTimeout(_=>{
		addSignal()
	},10) 

}else{

	charsArr[i].style.opacity = 1;
	i++;
	var timeoutID = setTimeout(showLetter, vnjs.current.options.typespeed)
}
}
showLetter();
}
};


this.on('print', print);


this.on('character', (character, reply)=>{
	vnjs.current.characterName = character.name;
	vnjs.$.name.innerHTML = character.text;
	vnjs.$.name.style.color = character.color
	print(reply, character.color)

})

}





