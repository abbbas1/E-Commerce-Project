import { Router } from "express";
import AdminContoller from "../../controller/admin/adminCont.js";

const AdminRouter = Router()

AdminRouter.post("/admin",AdminContoller.Register)
AdminRouter.delete("/admin/:id",AdminContoller.Delete)
AdminRouter.put("/admin/:id",AdminContoller.Update)

export default AdminRouter;