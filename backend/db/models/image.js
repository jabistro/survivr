'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    caption: DataTypes.STRING(255)
  }, {});
  Image.associate = function (models) {
    // associations can be defined here
    Image.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'imageId'
    });
    Image.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    Image.belongsTo(models.Album, {
      as: 'album',
      foreignKey: 'albumId'
    });
  };
  return Image;
};
