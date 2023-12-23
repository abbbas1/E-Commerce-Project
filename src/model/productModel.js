import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const ProductModel = sequelize.define("product", {
  productName: {
    type: DataTypes.STRING,
    allownull: false,
  },
  Image: {
    type: DataTypes.STRING,
    allownull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allownull: false,
  },
  stock:{
    type:DataTypes.STRING,
    allowNull:false
  }
});

export default ProductModel;
