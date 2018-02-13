module.exports = (sequelize, DataTypes) => {
	const PostTest = sequelize.define('PostTest', {
		fileName: {
			type: DataTypes.STRING
		},
		mimetype: {
			type: DataTypes.STRING
		}
		// destination: {
		// 	type: DataTypes.STRING
		// }
		// filePath: {
		// 	type: DataTypes.STRING
		// }
	})

	PostTest.associate = function(models) {
		PostTest.belongsTo(models.User)
	}

	return PostTest
}