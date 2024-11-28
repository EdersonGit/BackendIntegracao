const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize, 
  modelName: 'Product',
  tableName: 'products', 
  timestamps: true, 
});

module.exports = Product;
