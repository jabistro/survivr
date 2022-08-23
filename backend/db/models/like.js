'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: 'userId' });
    Like.belongsTo(models.Photo, { foreignKey: 'imageId' });
  };
  return Like;
};
