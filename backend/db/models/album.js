'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      allowNull: false,
      references: { model: 'Users' },
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    }
  }, {});

  Album.associate = function(models) {
    Album.belongsTo(models.User, { 
      foreignKey: 'userId'
    });
  };
  return Album;
};