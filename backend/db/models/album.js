'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: DataTypes.STRING
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.hasMany(models.Image, {
      foreignKey: 'albumId',
      onDelete: 'cascade',
      hooks: 'true',
    });
    Album.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return Album;
};
