module.exports = (sequelize, DataTypes) => {
	const Comment = sequelize.define('Comment', {
		body: DataTypes.STRING
	})

	Comment.associate = function(models) {
		Comment.belongsTo(models.User)
		Comment.belongsTo(models.PostTest)
	}

	return Comment
}
