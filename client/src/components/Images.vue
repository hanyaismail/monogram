<template>
	<div>
		<div v-for="image in images" :key="image.id">
			<a :href="image.url"><img :src="image.url" alt="image" style="width: 200px"></a>
			<!-- <div>{{image.url}}</div> -->
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			images: []
		}
	},

	async mounted () {
		try {
			console.log('mounted')
			this.images = (await axios.get("http://localhost:3000/cek")).data
			console.log(this.images)
		} catch (err) {
			console.log(err)
		}
	}
}
</script>

<style scoped>
	
</style>