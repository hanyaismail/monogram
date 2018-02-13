<template>
	<div class="mt-4">
		<v-layout column>
			<v-flex xs6 offset-xs3>
				<panel title="Register">
					<v-form>
				    <v-text-field
				      label="Name"
				      v-model="name"
				      :rules="nameRules"
				      :counter="15"
				      required
				    ></v-text-field>
				     <v-text-field
				      label="Username"
				      v-model="username"
				      :rules="usernameRules"
				      :counter="15"
				      required
				    ></v-text-field>
				    <v-text-field
				      label="E-mail"
				      v-model="email"
				      :rules="emailRules"
				      required
				    ></v-text-field>
				    <v-text-field
				      label="Password"
				      type="password"
				      v-model="password"
				      :rules="passRules"
				      required
				    ></v-text-field>
				  </v-form>

				  <v-btn @click="register">Register</v-btn>
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
			name: "",
			nameRules: [
				(v) => !!v || 'Name is required!',
				(v) => v && v.length <= 15 || 'Name length not more than 10!'
			],

			username: "",
			usernameRules: [
				(v) => !!v || 'Username is required'
			],
			
			email: "",
			emailRules: [
				(v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
			],

			password: "",
			passRules: [
				(v) => !!v || 'Password is required',
				(v) => v && v.length >= 8 || 'password must be more than 8 characters'
			],

			error: null
		}
	},

	methods: {
		async register () {
			try {
				const response = await UserService.register({
					name: this.name,
					username: this.username,
					email: this.email,
					password: this.password
				})

				this.$router.push({name: login})
			} catch (err) {
				this.error = err.response.data.error
			}
		}
	}
}
</script>

<style>
	
</style>