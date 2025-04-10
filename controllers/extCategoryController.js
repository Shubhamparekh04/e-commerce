const extCategoryModel = require("../models/extCategoryModel");
const fs = require("fs");
module.exports.create = async (req, res) => {
  try {
    await extCategoryModel.create({ ...req.body, image: req.file.path });
    return res.json({ message: "extra Category created successfully...!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.get = async (req, res) => {
  try {
    const allExtCatData = await extCategoryModel.find({}).populate("subcategoryId").populate("categoryId");
    return res.json({ message: allExtCatData });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.del = async (req, res) => {
  try {
    const { id } = req.params;
    const delExtCat = await extCategoryModel.findByIdAndDelete(id);
    fs.unlinkSync(delExtCat.image);
    return res.json({ message: "extra Category Deleted Successfully...!!!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const extCat = await extCategoryModel.findById(id);
    extCat.name = req.body.name;

    if (req.file) {
      fs.unlinkSync(extCat.image);
      extCat.image = req.file.path;
    }

    extCat.save();
    return res.json({ message: "extra Category updated successfully...!!!" });
  } catch (error) {
    return res.json({ message: error.message });
  }
};
