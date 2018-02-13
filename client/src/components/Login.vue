<template>
	<div class="mt-4">
		<v-layout column>
			<v-flex xs6 offset-xs3>
				<panel title="Login">
				<v-form>
	    <v-text-field
	      label="Username"
	      v-model="username"
	      :rules="required"
	      required
	    ></v-text-field>
	    <v-text-field
	      label="Password"
	      type="password"
	      v-model="password"
	      :rules="required"
	      required
	    ></v-text-field>
	  </v-form>

	 	<v-btn @click="login">Login</v-btn>
	 			</panel>
			</v-flex>
		</v-layout>
 	</div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
	data () {
		return {
			username: "",
			password: "",
			required: [
				(v) => !!v || "required"
			],
			error: null
		}
	},

	methods: {
		async login () {
			try {
				const response = (await UserService.login({
					username: this.username,
					password: this.password
				})).data

				this.$store.dispatch('setUser', response.user)
				this.$store.dispatch('setToken', response.token)
				// this.$router.push({name: 'home'})
				this.$router.push({name: 'userhometest'})
			} catch (err) {
					this.error = err.response.data.error
			}
		}
	}
}
</script>

<style scoped>

</style>