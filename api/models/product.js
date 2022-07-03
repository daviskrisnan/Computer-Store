'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'id' });
      product.hasMany(models.product_image, { foreignKey: 'productId' });
      product.hasMany(models.line_items, { foreignKey: 'productId' });
    }
  }
  product.init({
    prod_name: DataTypes.STRING,
    prod_desc: DataTypes.STRING,
    prod_price: DataTypes.INTEGER,
    prod_stock: DataTypes.INTEGER,
    prod_expire: DataTypes.DATE,
    prod_weight: DataTypes.INTEGER,
    prod_category: DataTypes.STRING,
    prod_brand: DataTypes.STRING,
    prod_condition: DataTypes.STRING,
    prod_total_sold: DataTypes.INTEGER,
    prod_rating: DataTypes.INTEGER,
    prod_views: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};