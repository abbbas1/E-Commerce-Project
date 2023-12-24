import { Router } from "express";
import orderController from "../../controller/orderController.js";

const OrderRouter = Router()

OrderRouter.post("/order",orderController.Create)

export default OrderRouter;