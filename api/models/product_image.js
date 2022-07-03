'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product_image.belongsTo(models.product, {foreignKey: 'productId', targetKey: 'id'});
    }
  }
  product_image.init({
    prim_filename: DataTypes.STRING,
    prim_filesize: DataTypes.STRING,
    prim_filetype: DataTypes.STRING,
    prim_primary: DataTypes.BOOLEAN,
    productId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (product_image, options) => {
        product_image.prim_filename = product_image.prim_filename || "https://via.placeholder.com/150"
      },
      beforeUpdate: (product_image, options) => {
        product_image.prim_filename = product_image.prim_filename || "https://via.placeholder.com/150"
      }
    },
    sequelize,
    modelName: 'product_image',
  });
  return product_image;
};