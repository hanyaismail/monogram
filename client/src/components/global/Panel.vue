<template>
	<div class="white elevation-2">
		<v-toolbar flat dense>
			<v-toolbar-title>{{title}}</v-toolbar-title>
			<slot name="action" />
		</v-toolbar>
		
		<div class="px-4 py-2">
			<slot>
				
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'title'
	]
}
</script>

<style>
	
</style>