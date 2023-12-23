import { Sequelize } from "sequelize";

const envData = process.env;

const sequelize = new Sequelize(
  envData.DB_USER,
  envData.DB_NAME,
  envData.DB_PASSWORD,
  {
    host: envData.DB_HOST,
    port: envData.DB_PORT,
    dialect: envData.DB_DIALECT,
    logging:false
  }
);

export const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Db authenticate succesfully");
  } catch (err) {
    console.log("Error in db authentication");
  }
};

export default sequelize;
