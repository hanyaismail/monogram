<template>
	<v-toolbar fixed dark class="cyan px-4">
		<v-toolbar-title>DopeX</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items>
			<v-btn dark flat :to="{name: 'login'}">Login</v-btn>
			<v-btn dark flat :to="{name: 'register'}" >Sign Up</v-btn>

			<v-btn dark flat @click="logout">Logout</v-btn>
		</v-toolbar-items>
	</v-toolbar>
</template>

<script>
import {mapState} from 'vuex'
export default {
	methods: {
		logout() {
			this.$store.dispatch('setUser', null)
			this.$store.dispatch('setToken', null)
			this.$router.push({
				name: 'login'
			})
		}
	},

	computed: {
		...mapState([
				'isUserLoggedIn'
		])
	}
}
</script>

<style>
	
</style>