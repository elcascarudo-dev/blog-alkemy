const { Model, DataTypes } = require('sequelize');
const { sequelize } = require( '../config/dbConection.conf' );

class Post extends Model {}

Post.init({
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    }
  }, 
  { 
    sequelize, 
    modelName: 'post'
  });

module.exports = Post