import OrderModel from "../model/orderModel.js";

const orderController = {
  Create: async (req, res) => {
    try {
      const { costomerName, address, costomerPhoneNumber, productId } =
        req.body;
     const Order=await OrderModel.create({
        costomerName,
        address,
        costomerPhoneNumber,
        productId
      });
      res.json({message:"Order Created",Order})
    } catch (error) {
        res,status(404).json({message:"something bad happened in order creation."})
    }
  },
};

export default orderController;