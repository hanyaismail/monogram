import Api from './Api'

export default {
	register(credentials) {
		return Api().post('/register', credentials)
	},

	login(credentials) {
		return Api().post('/login', credentials)
	},

	users() {
		return Api().get('/users')
	},

	followers(id) {
		return Api().get('/followers', id)
	},

	following(id) {
		return Api().get('/followings', id)
	}
}