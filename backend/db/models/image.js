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
    base64: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    content: {
      type: DataTypes.STRING(255)
    }
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, { foreignKey: 'userId' });

    Image.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return Image;
};