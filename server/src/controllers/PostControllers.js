const {PostTest, User} = require('../models');
const path = require('path');
const _ = require('lodash')
// const cloudinary = require('cloudinary');
const config = require('../config/config');

console.log('apakah lewat sini');

// cloudinary.config({
// 	cloud_name: config.cloudinary.cloudName,
// 	api_key: config.cloudinary.apiKey,
// 	api_secret: config.cloudinary.apiSecret
// })

module.exports = {
	async cek (req, res) {
		try {
			const postTestDB = await PostTest.findAll()
								.map(postTest => postTest.toJSON());
			res.send(postTestDB)
		} catch (err) {
			console.log(err);
		}
	},

	// async index (req, res) {
	// 	const images = await Image.findAll().map(image => path.join(__dirname, './public/uploads/' + image.fileName));
	// 	res.send(images)
	// },

	async view (req, res) {
		try {
			const userId = req.params.id
			const where = {
				UserId: userId
			}
			const posts = await PostTest.findAll({
				where: where,
				include: [
					{
						model: User
					}
				] 
			})
			.map(post => post.toJSON())
			.map(post => _.extend(
				{},
			 	post.User,
			 	post
			 ));
			res.send(posts);
		} catch (err) {
			console.log(err);
		}
	},

	async post (req, res) {
		try {
			console.log(req.file);
			// const cloudResult = await cloudinary.uploader.upload(req.file.path);
			// console.log(cloudResult);
			const postTest = await PostTest.create({
				TestId: req.body.id,
				UserId: req.body.id,
				fileName: req.file.filename,
				mimetype: req.file.mimetype
			})
			res.send(postTest);
		} catch (err) {
			console.log(err);
		}
	}
}