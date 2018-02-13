<template>
	<div>
		<div>{{user.username}}</div>
		
		<div>
			<ul v-for="follower in followers" :key="follower.id">
				<li>
					{{follower.username}}
				</li>
			</ul>
		</div>

		<div>
			<ul v-for="following in followings" :key="following.id">
				<li>
					{{following.username}}
				</li>
			</ul>
		</div>

		<div>To User List</div>
	</div>
</template>

<script>
import {mapState} from '@/store/store'
import UserService from '@/services/UserService'

export default {
	data () {
		return {
			users: null,
			followers: null,
			followings: null
		}
	},

	computed: {
		...mapState([
			'isUserLoggedin',
			'user'
		])
	},

	async mounted () {
		try {
			this.followers = (await UserService.followers(this.user.id)).data
		} catch(err) {
			console.log(err)
		}
	}
}
</script>

<style>
	
</style>