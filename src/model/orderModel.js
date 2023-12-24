import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";
import ProductModel from "./productModel.js";

const OrderModel = sequelize.define("orderInfo",{
  costomerName: {
    type: DataTypes.STRING,
    allownull: false,
  },
  address: {
    type: DataTypes.STRING,
    allownull: false,
  },
  costomerPhoneNumber: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
});


OrderModel.hasMany(ProductModel)
ProductModel.belongsTo(OrderModel)

export default OrderModel;
