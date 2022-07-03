'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class shoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      shoppingCart.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'id' });
      shoppingCart.hasMany(models.line_items, { foreignKey: 'shoppingCartId' });
    }
  }
  shoppingCart.init({
    shop_created_on: DataTypes.DATE,
    shop_status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function (shopping_cart, options) {
        shopping_cart.shop_status = shopping_cart.shop_status || "Open";
      }
    },
    sequelize,
    modelName: 'shoppingCart',
  });
  return shoppingCart;
};