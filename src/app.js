import "dotenv/config";
import express from "express";
import sequelize from "./db/config.js";
import SequelizeStore from "connect-session-sequelize";
import { dbConnection } from "./db/config.js";
import initDb from "./db/init.js";
import MainRoutes from "./router/index.js";
import session from "express-session";
const app = express();
const envData = process.env;
app.use(express.json());
dbConnection();

const mySequelizeStore = SequelizeStore(session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});
app.use(
  session({
    secret: envData.SESSION_SECRET,
    store: mySequelizeStore1,
    proxy: false,
    resave: true,
    saveUninitialized: false,
  })
);
mySequelizeStore1.sync();
initDb()
  .then(() => console.log("Db Sync"))
  .catch((err) => console.log("Db did not sync" + err));

app.use("/", MainRoutes);

app.listen(envData.PORT, (err) => {
  if (!err) {
    console.log(`Server is listening at http://localhost:${envData.PORT}`);
  } else {
    console.log(`Server crashed` + err);
  }
});
