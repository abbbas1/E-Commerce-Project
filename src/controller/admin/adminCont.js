import AdminModel from "../../model/adminModel.js";
// import { Jwt } from "jsonwebtoken";
import { hash } from "bcrypt";

const AdminContoller = {
  Register: async (req, res) => {
    try {
      const { adminName, email, password } = req.body;
      const Admin = await AdminModel.findOne({
        where: {
          email,
        },
      });
      if (Admin) {
        res
          .status(400)
          .json({ message: `${email} is already exist try another one.` });
      }
      const hPassword = await hash(password, 10);
      await AdminModel.create({
        adminName,
        email,
        password: hPassword,
      });
      res.json({ message: "Admin Registered succesfully." });
    } catch (err) {
      res.status(400).json({
        message: "SOmething bad happening in admin Registration." + err,
      });
    }
  },
  Delete: async (req, res) => {
    try {
      const { id } = req.params;
      const Admin = await AdminModel.findOne({
        where: { id },
      });
      if (!Admin) {
        res.status(400).json({ message: "admin not found for Deletion." });
      } else {
        Admin.destroy(res.json({ message: "Admin Deleted." }));
      }
      res.json({ Admin });
    } catch (err) {
      res
        .status(404)
        .json({ message: "something bad happened in Admin Deletion." });
    }
  },
  Update: async (req, res) => {
    try {
      const { id } = req.params;
      const { adminName, email, password } = req.body;
      const Admin = await AdminModel.findOne({
        where: { id },
      });
      const hPassword = await hash(password,10)
      if (!Admin) {
        res.status(400).json({ message: "Admin not found for Updation." });
      } else {
        Admin.adminName = adminName;
        Admin.email = email;
        Admin.password = hPassword
        Admin.save(res.json({ message: "Admin updated." }));
      }
    } catch (err) {
      res
        .status(404)
        .json({ message: "something bad happened in Admin Updation." });
    }
  },
};

export default AdminContoller;
