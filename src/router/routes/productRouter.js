import { Router } from "express";
import ProductController from "../../controller/productCont.js";
import upload from "../../middleware/productImage.js";

const ProductRouter = Router()

ProductRouter.post("/Product",ProductController.AddProduct)
ProductRouter.delete("/Product/delete/:id",ProductController.Delete)
ProductRouter.put("/Product/update/:id",ProductController.Update)
ProductRouter.get("/Products",ProductController.GetAll)

export default ProductRouter;