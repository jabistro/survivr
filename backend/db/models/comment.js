'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    Comment.belongsTo(models.Image, {
      as: 'image',
      foreignKey: 'imageId'
    });
  };
  return Comment;
};
