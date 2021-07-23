const { Model, DataTypes } = require('sequelize');
const { sequelize } = require( '../config/dbConection.conf' );

class Category extends Model {}

Category.init({
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, 
  { 
    sequelize, 
    modelName: 'category'
  });

module.exports = Category