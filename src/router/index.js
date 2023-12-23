import { Router } from "express";
import AdminRouter from "./routes/adminRouter.js";

const MainRoutes = Router();

MainRoutes.use("/",AdminRouter)

export default MainRoutes;
