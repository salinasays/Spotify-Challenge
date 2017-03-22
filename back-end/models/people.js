'use strict';

module.exports = function(sequelize, DataTypes) {
	const People = sequelize.define('People', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		favoriteCity: {
			type: DataTypes.STRING,
			allowNull: false
		}
	})
	return People;
} 