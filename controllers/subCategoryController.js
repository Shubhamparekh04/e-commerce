const subCategoryModel = require("../models/subCategoryModel");
const fs = require("fs");
module.exports.create = async (req, res) => {
  try {
    await subCategoryModel.create({ ...req.body, image: req.file.path });
    return res.json({ message: "Sub Category created successfully...!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.get = async (req, res) => {
  try {
    const allSubCatData = await subCategoryModel.find({}).populate("categoryId");
    return res.json({ message: allSubCatData });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.del = async (req, res) => {
  try {
    const { id } = req.params;
    const delSubCat = await subCategoryModel.findByIdAndDelete(id);
    fs.unlinkSync(delSubCat.image);
    return res.json({ message: "Sub Category Deleted Successfully...!!!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const subCat = await subCategoryModel.findById(id);
    subCat.name = req.body.name;

    if (req.file) {
      fs.unlinkSync(subCat.image);
      subCat.image = req.file.path;
    }

    subCat.save();
    return res.json({ message: "Sub Category updated successfully...!!!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
