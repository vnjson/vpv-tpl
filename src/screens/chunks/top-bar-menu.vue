<template>
<span v-model.volume="points">Points: {{points}}</span>

</template>

<script>

export default {
  name: 'top-bar-menu',

	data (){
		return {
			points: vnjs.current.data.points
		}
	}
}
</script>
