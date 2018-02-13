const ImagesController = require('./controllers/ImagesController');
const UserControllers = require('./controllers/UserControllers');
const PostControllers = require('./controllers/PostControllers');
const uploadHandler = require('./uploadHandler');

module.exports = (app) => {

	// app.get('/photos', 
	// 	ImagesController.index
	// );

	app.post('/upload',
		uploadHandler, 
		ImagesController.post);

	app.get('/photo/:id',
		ImagesController.view);


	app.post('/register', 
		UserControllers.register);

	app.get('/user/:userId',
		UserControllers.view);

	app.post('/follow',
		UserControllers.follow);

	app.get('/relationships',
		UserControllers.relation);

	// ------------------------------------TEST------------------------------------//

	// Check image database
	app.get('/cek', 
		ImagesController.cek);

	// Check user database
	app.get('/users',
		UserControllers.get);

	// Post Test
	app.post('/posttest',
		uploadHandler,
		PostControllers.post);

	// Check all post database
	app.get('/posts',
		PostControllers.cek);

	// Check user post database
	app.get('/posts/:id',
		PostControllers.view)

	// Check user followers
	app.get('/followers/:id',
		UserControllers.followers)

	// Check user followings
	app.get('/followings/:id',
		UserControllers.followings)
}