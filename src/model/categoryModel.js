import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const CategoryModel = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default CategoryModel;
