const {User} = require('../models')
const {Relationship} = require('../models')

module.exports = {
	async get (req, res) {
		try {
			const users = await User.findAll().map(user => user.toJSON());
			res.send(users)
		} catch (err) {
			console.log(err)
		}
	},

	async register (req, res) {
		try {
			console.log(req.body)
			const user = await User.create(req.body);
			const userJSON = user.toJSON();
			res.send(userJSON);
		} catch (err) {
			console.log(err)
		} 
	},

	async view (req, res) {
		try {
			const user = await User.findById(req.params.userId)
			res.send(user)
		} catch (err) {
			console.log(err)
		}
	},

	async follow (req, res) {
		try {
			// const following = [];
			const userId = req.body.userId
			const followId = req.body.followId
			console.log(req.body)
			console.log(req.body)
			console.log(req.body)
			const currentUser = await User.findById(userId)
			// following.push(currentUser.toJSON())
			console.log(currentUser)
			const follows = await User.findById(followId)
			// following.push(follows.toJSON())
			console.log(follows)

			const following = await currentUser.addFollower(follows)
			res.send(following)
		} catch (err) {
			console.log(err)
		}
	},

	async relation (req, res) {
		try {
			const relation = await Relationship.findAll().map( relationship => relationship.toJSON())
			res.send(relation)
		} catch (err) {
			console.log(err)
		}
	},

	async followers (req, res) {
		try {
			const where = {
				FollowerId: req.params.id
			}
			const followers = await Relationship.findAll({
				where: where
			}).map(follower => follower.toJSON())
			res.send(followers)
		} catch (err) {
			console.log(err)
		}
	},

	sync followings (req, res) {
		try {
			const where = {
				UserId: req.params.id
			}
			const followings = await Relationship.findAll({
				where: where
			}).map(following => following.toJSON())
			res.send(followings)
		} catch (err) {
			console.log(err)
		}
	}
}