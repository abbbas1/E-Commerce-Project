import ProductModel from "../model/productModel.js";

const ProductController = {
  AddProduct: async (req, res) => {
    try {
      const { productName, price, stock } = req.body;
      await ProductModel.create({
        productName,
        price,
        stock,
      });
      res.json({ message: "product added" });
    } catch (err) {
      res
        .status(404)
        .json({ message: "Something bad happened in adding a product." });
    }
  },
  Delete: async (req, res) => {
    try {
      const { id } = req.params;
      const Product = await ProductModel.findOne({
        where: { id },
      });
      if (!Product) {
        res.status(400).json({ message: "Product not found for deletion" });
      } else {
        Product.destroy(res.json({ message: "product deleted." }));
      }
    } catch (err) {
      res
        .status(404)
        .json({ message: "something bad happened in product deletion." + err });
    }
  },
  Update: async (req, res) => {
    try {
      const { id } = req.params;
      const { productName, price, stock } = req.body;
      const Product = await ProductModel.findOne({
        where: { id },
      });
      if (!Product) {
        res.status(400).json({ message: "product  not found for updation." });
      } else {
        Product.productName = productName;
        Product.price = price;
        Product.stock = stock;
        Product.save(res.json({ message: "product updated." }));
      }
    } catch (error) {
      res
        .status(404)
        .json({
          message: "something bad happened in product updation." + error,
        });
    }
  },
  GetAll:async(req,res)=>{
    try {
       const products= await ProductModel.findAll({})
        res.json({products})
    } catch (error) {
        res.status(404).json({message:' something bad happened in searching product.'+error})
    }
  }
};
export default ProductController;
