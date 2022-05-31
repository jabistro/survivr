'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    }
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.hasMany(models.Image, {
      as: 'images',
      foreignKey: 'albumId'
    });
    Album.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
  };
  return Album;
};
