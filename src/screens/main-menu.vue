<template>
<transition name="fade">  
<div class="screen screen__main-menu">
  <div class="main-menu__wrapper">
  <div class="main-menu"  v-on:mousedown="clickHandler">
    <div data-id="newgame" class="main-menu__item">Новая игра</div>
   <div v-if="isStream" data-id="game-return" class="main-menu__item">Вернуться в игру</div>
    
    <div data-id="m-card" class="main-menu__item">Карта памяти</div>
   
    <div data-id="settings" class="main-menu__item">Настройки</div>
    <div data-id="about" class="main-menu__item">О проекте</div>
 
  </div>
  </div>
</div>
</transition>
</template>


<script>
  /*
var currentDefault = {
    index: 0,
    labelName: 'label',
    sceneName: 'scene',
    characterName: undefined,
    layer: {
      audio: undefined,
      scene: undefined, //bg
      show: {}//left right center show
    },
    conf: {
      typespeed: 30,
      volume: 100,
      zoom: 100
    },
    data: {
      points: 0
    } //userData
  };*/
/*
       console.log(currentDefault)
        vnjs.current = currentDefault
 */
function resetGame (){
      vnjs.emit('clear', 'show');
      vnjs.emit('clear', 'scene');
      vnjs.emit('audio', 'stop');
      vnjs.current.layer.scene = null;
      vnjs.current.layer.show = {}  
}

export default {

  name: 'main-menu',
  data (){
    return {
      isStream: this.$root.$data.store.isStream
    }
  },
  created (){
    new AudioContext().resume();
  },
  mounted (){

    if(!this.$root.$data.store.isStream){

      resetGame();
    }
  },
  methods: {
    clickHandler (e){
      var { id } = e.target.dataset;
      
      if(id==='newgame'){

        resetGame()
        if(vnjs.sceneLoader.mode==='all'){
            vue.$data.screen = 'main-menu';
        }

        this.$nextTick(function () { 
          vnjs.emit('jump', vnjs.sceneLoader.entry) 

        })
        
      }
      else if(id==='game-return'){
        vue.$data.screen  = 'stream';

      }
      else{
        vue.$data.screen = id;
      }
    }
  }
}
</script>
