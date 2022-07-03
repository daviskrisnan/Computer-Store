'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user, { foreignKey: 'userId', targetKey: 'id' });
      order.hasMany(models.line_items, { foreignKey: 'orderId' });
    }
  }
  order.init({
    order_created_on: DataTypes.DATE,
    order_subtotal: DataTypes.INTEGER,
    order_discount: DataTypes.FLOAT,
    order_tax: DataTypes.FLOAT,
    order_total_due: DataTypes.FLOAT,
    order_total_qty: DataTypes.INTEGER,
    order_payt_trx_number: DataTypes.STRING,
    order_city: DataTypes.STRING,
    order_address: DataTypes.STRING,
    order_status: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function (order, options) {
        order.order_status = order.order_status || "Open";
        order.order_subtotal = order.order_subtotal || 1;
        order.order_tax = 0.1;
        order.order_discount = order.discount || 0;
        order.order_total_due = order.order_total_due || 0;
        order.order_total_qty = order.order_total_qty || 1;
        order.order_city = order.order_city || "Silahkan Masukkan Kota Anda";
        order.order_addres = order.order_addres || "Silahkan Masukkan Alamat Anda";
      },
    },
    sequelize,
    modelName: "order",
  }
);
  return order;
};