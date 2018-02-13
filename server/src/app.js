const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const {sequelize} = require('./models');
const cloudinary = require('cloudinary');

const app = express();

app.use(bodyParser.json());
app.use(cors());


require('./routes')(app);

sequelize.sync()
	.then(() => {
		app.listen(config.port);
		console.log(`Server running on ${config.port}`)
	})

