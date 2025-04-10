const categoryModel = require("../models/categoryModel");
const fs = require("fs");
module.exports.create = async (req, res) => {
  try {
    await categoryModel.create({ ...req.body, image: req.file.path });
    return res.json({ message: "Category created successfully...!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.get = async (req, res) => {
  try {
    const allCatData = await categoryModel.find({});
    return res.json({ message: allCatData });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.del = async (req, res) => {
  try {
    const { id } = req.params;
    const delCat = await categoryModel.findByIdAndDelete(id);
    fs.unlinkSync(delCat.image);
    return res.json({ message: "Category Deleted Successfully...!!!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await categoryModel.findById(id);
    cat.name = req.body.name;

    if (req.file) {
      fs.unlinkSync(cat.image);
      cat.image = req.file.path;
    }

    cat.save();
    return res.json({ message: "Category updated successfully...!!!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
