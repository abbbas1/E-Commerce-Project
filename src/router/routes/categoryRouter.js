import { Router } from "express";
import CategoryController from "../../controller/categoryController.js";

const CategoryRouter = Router()

CategoryRouter.post("/category",CategoryController.Create)
CategoryRouter.get("/categories",CategoryController.GetAll)

export default CategoryRouter;