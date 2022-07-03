'use strict';
const { encryptPass } = require("../helpers/bcrypt");
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.product, { foreignKey: 'userId' });
      user.hasMany(models.shoppingCart, { foreignKey: 'userId' });
      user.hasMany(models.order, { foreignKey: 'userId' });
    }
  }
  user.init(
    {
      user_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      user_email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Email tidak boleh kosong",
          },
        },
      },
      user_password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_birthdate: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      user_gender: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_avatar: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      user_type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },

    {
      hooks: {
        beforeCreate: (user, options) => {
          user.user_password = encryptPass(user.user_password);
          user.user_avatar =
            user.user_avatar || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return user;
};