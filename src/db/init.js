import AdminModel from "../model/adminModel.js"
import CategoryModel from "../model/categoryModel.js";
import ProductModel from "../model/productModel.js";
import OrderModel from "../model/orderModel.js";

const initDb =async()=>{
    await AdminModel.sync({
        alter:true,
        force:false
    })
    await ProductModel.sync({
        alter:true,
        force:false
    })
    await CategoryModel.sync({
        alter:true,
        force:false
    })
    await OrderModel.sync({
        alter:true,
        force:false
    })
}

export default initDb;