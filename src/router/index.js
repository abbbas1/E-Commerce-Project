import { Router } from "express";
import AdminRouter from "./routes/adminRouter.js";
import ProductRouter from "./routes/productRouter.js";
import CategoryRouter from "./routes/categoryRouter.js";
import OrderRouter from "./routes/orderRouter.js";

const MainRoutes = Router();
        //Admin Route
MainRoutes.use("/", AdminRouter);

       //Product Route
MainRoutes.use("/", ProductRouter);

        //category Route
MainRoutes.use("/",CategoryRouter)

        //order Route
MainRoutes.use("/",OrderRouter)

export default MainRoutes;
