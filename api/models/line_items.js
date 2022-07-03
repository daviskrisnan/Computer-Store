'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class line_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      line_items.belongsTo(models.product, { foreignKey: 'productId', targetKey: 'id' });
      line_items.belongsTo(models.shoppingCart, { foreignKey: 'shoppingCardId', targetKey: 'id' });
      line_items.belongsTo(models.order), { foreignKey: 'orderId', targetKey: 'id' };
    }
  }
  line_items.init({
    line_qty: DataTypes.INTEGER,
    line_status: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    shoppingCardId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER
  }, {
    hooks:{
      beforeCreate: function (line_items,options){
        line_items.line_status = line_items.line_status || "Open";
        line_items.line_qty = line_items.line_qty || 1;
        line_items.shoppingCartId = line_items.shoppingCartId || 1;
        line_items.orderId = line_items.orderId || 1;
      }
    },
    sequelize,
    modelName: 'line_items',
  });
  return line_items;
};