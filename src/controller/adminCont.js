import AdminModel from "../model/adminModel.js";
import Jwt from "jsonwebtoken";
import { hash,compare } from "bcrypt";
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
      login:async(req,res)=>{
        try{ 
        const{email,password}=req.body
        const admin = await AdminModel.findOne({
            where:{
                email
            }
        })
        if(!admin){
            res.status(400).json({message:"invalid Email"})
        }
        const ComparePassword = await compare(password,admin.password)
        if(!ComparePassword){
            res.status(400).json({message:"invalid Password"})
        }
        const Data = {
            id:admin.id,
            email:admin.email,
            test:"test"
          }
        const token = Jwt.sign(Data,process.env.JWT_SECRET,{
          expiresIn:"10d"
        })
        console.log(token)
        req.session.token = token
        req.session.user = admin
        req.session.save()
        return res.status(200).json({message:"Loged in succesfully"})
    }catch(err){
        res.status(404).json({message:"Something bad happened in login."})
    }
}
}


export default AdminContoller;
