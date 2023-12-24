import { Router } from "express";
import AdminContoller from "../../controller/adminCont.js";

const AdminRouter = Router()

AdminRouter.post("/admin",AdminContoller.Register)
AdminRouter.delete("/admin/:id",AdminContoller.Delete)
AdminRouter.put("/admin/:id",AdminContoller.Update)
AdminRouter.post("/admin/login",AdminContoller.login)

export default AdminRouter;