const {Image} = require('../models');
const path = require('path');
const cloudinary = require('cloudinary');
const config = require('../config/config');

console.log('apakah lewat sini');

cloudinary.config({
	cloud_name: config.cloudinary.cloudName,
	api_key: config.cloudinary.apiKey,
	api_secret: config.cloudinary.apiSecret
})

module.exports = {
	async cek (req, res) {
		try {
			const imagesDB = await Image.findAll()
								.map(image => image.toJSON());
			res.send(imagesDB)
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
			const image = await Image.findById(req.params.id);
			res.send(image);
		} catch (err) {
			console.log(err);
		}
	},

	async post (req, res) {
		try {
			console.log(req.file);
			const cloudResult = await cloudinary.uploader.upload(req.file.path);
			console.log(cloudResult);
			const image = await Image.create({
				fileName: req.file.filename,
				url: cloudResult.secure_url,
				mimetype: req.file.mimetype
			})
			res.send(image);
		} catch (err) {
			console.log(err);
		}
	}
}