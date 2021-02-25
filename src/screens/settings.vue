<template>
<transition name="fade">
  
<div class="screen screen__settings">
  <h3>Settings</h3>
<br>
<br>
<!--
 <p>Mode</p>
<p>
<input type="radio" id="once" value="once" v-model="mode">
<label for="one">Load resources as you progress</label> 
<br>
<input type="radio" id="all" value="all" v-model="mode">
<label for="all">Load all resources before starting the game</label>  

</p>  
-->
<br><br>

<div class='settings__range'>
  <p>Volume {{volume}}</p>
  <input v-model.volume="volume" type="range" min="0" max="500" value="100" name="range" step="1"/>
</div>
<div class='settings__range'>
  <p>Zoom {{ scale }}</p>
  <input  v-model.scale="scale" type="range" min="50" max="400" value="100" name="range" step="1"/>
</div>
<div class='settings__range typespeed__range'>
  <p>Text speed {{typespeed}}</p>
  <input  v-model.typespeed="typespeed" type="range" min="0" max="100" value="30" name="range" step="1"/>
</div>
 


<btn-return></btn-return>
</div>
</transition>
</template>


<script>
var gameEl = document.getElementsByClassName('game')[0];	
export default {
  name: 'settings',
  data (){
    return {
			scale: vnjs.current.conf.zoom,
    	typespeed: vnjs.current.conf.typespeed,
    	volume: vnjs.current.conf.volume,
      mode: vnjs.sceneLoader.mode
    }
  },
  computed: {

  },
  watch: {
    scale: function(newValue) {
      vnjs.current.conf.zoom = this.$data.scale;
      gameEl.style.transform = `scale(${newValue*0.01})`;
    },
    typespeed (){
      vnjs.current.conf.typespeed = this.$data.typespeed;
      //vue.$data.typespeed = this.$data.typespeed;
    },
    volume (){
      vnjs.current.conf.volume = this.$data.volume;
    },
    mode (){
      vnjs.sceneLoader.mode = this.$data.mode;
    }
  }
}
</script>
