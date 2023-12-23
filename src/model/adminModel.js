import { DataTypes } from "sequelize";
import sequelize from "../db/config.js";

const AdminModel = sequelize.define("admin", {
  adminName: {
    type: DataTypes.STRING,
    allownull: false,
  },
  email: {
    type: DataTypes.STRING,
    allownull: false,
  },
  password: {
    type: DataTypes.STRING,
    allownull: false,
  },
});

export default AdminModel;
