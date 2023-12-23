import "dotenv/config";
import express from "express";
import sequelize from "./db/config.js";
import { dbConnection } from "./db/config.js";
import initDb from "./db/init.js";
import MainRoutes from "./router/index.js";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
dbConnection();

initDb()
  .then(() => console.log("Db Sync"))
  .catch((err) => console.log("Db did not sync" + err));

app.use("/", MainRoutes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is listening at http://localhost:${PORT}`);
  } else {
    console.log(`Server crashed` + err);
  }
});
