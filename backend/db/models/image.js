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
      type: DataTypes.STRING,
      allowNull: false
    },
    caption: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Image.associate = function (models) {
    // associations can be defined here
    Image.hasMany(models.Comment, {
      foreignKey: 'imageId',
      onDelete: 'cascade',
      hooks: 'true'
    });
    Image.belongsTo(models.User, {
      foreignKey: 'userId'
    });
    Image.belongsTo(models.Album, {
      foreignKey: 'albumId'
    });
    Image.hasMany(models.Like, {
      foreignKey: 'imageId',
      onDelete: 'cascade',
      hooks: 'true'
    });
  };
  return Image;
};
