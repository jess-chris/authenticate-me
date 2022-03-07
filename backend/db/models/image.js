'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      allowNull: false,
      references: { model: 'Users' },
      type: DataTypes.INTEGER
    },
    albumId: {
      references: { model: 'Albums' },
      type: DataTypes.INTEGER
    },
    imageUrl: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    content: {
      type: DataTypes.TEXT
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' });

    Image.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return Image;
};