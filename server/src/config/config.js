const path = require('path');

module.exports = {
	port: process.env.PORT || 3000,
	db: {
		database: process.env.DB_NAME || 'template',
		user: process.env.DB_USER || 'template',
		password: process.env.DB_PASS || 'template',
		option: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: path.resolve(__dirname, '../../template.sqlite')
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	},
	cloudinary: {
		cloudName: process.env.CLOUD_NAME || 'geektogreat',
		apiKey: process.env.API_KEY || '529797145464574',
		apiSecret: process.env.API_SECRET || 'bx8F0QgIHsFedygFlD8S8yytJiU'  
	}
}