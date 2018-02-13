import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,

	state: {
		user: null,
		token: null,
		isUserLoggedIn: false
	},

	mutations: {
		setUser (state, user) {
			this.user = user
		},

		setToken (state, token) {
			this.token = token

			if (token) {
				this.isUserLoggedIn = true
			} else {
				this.isUserLoggedIn = false
			}
		}
	},

	actions: {
		setUser ({commit}, user) {
			commit('setUser', user)
		},

		setToken ({commit}, token) {
			commit('setToken', token)
		}
	}
})