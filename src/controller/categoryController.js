import CategoryModel from "../model/categoryModel.js";

const CategoryController = {
  Create: async (req, res) => {
    try {
      const { name } = req.body;
      await CategoryModel.create({
        name,
      });
      res.status(400).json({ message: "New Category created" });
    } catch (error) {
      res.status(404).json({ message: "Something bad happening in category" });
    }
  },
  GetAll: async (req, res) => {
    try {
      const Categories = await CategoryModel.findAll({});
      res.json({ Categories });
    } catch (error) {
      res
        .status(404)
        .json({ message: "Something bad happening in category search" +error});
    }
  },
};

export default CategoryController;
