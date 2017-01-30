module.exports = function(sequelize, DataTypes) {
	return sequelize.define('minister', {
		name: {
			type: DataTypes.STRING,
			defaultValue: 'CMM Minister'
		},
		nickname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 50]
			}
		},
		photo_url: {
			type: DataTypes.STRING,
			defaultValue: 'http://res.cloudinary.com/soniacris/image/upload/v1485783552/user-placeholder_zbhlys.png'
		}
	})
};