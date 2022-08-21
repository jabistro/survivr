'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: DataTypes.TEXT(100)
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.hasMany(models.Image, {
      onDelete: 'cascade',
      hooks: 'true',
      foreignKey: 'albumId'
    });
    Album.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Album;
};
