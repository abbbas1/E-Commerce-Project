import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";
import ProductModel from "./productModel.js";

const CategoryModel = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

CategoryModel.hasMany(ProductModel)
ProductModel.belongsTo(CategoryModel)

export default CategoryModel;
