const categoryModel = require("../models/categoryModel");
const extCategoryModel = require("../models/extCategoryModel");
const subCategoryModel = require("../models/subCategoryModel");
const fs = require("fs");

module.exports.addCat = async (req, res) => {
  try {
    const catData = await categoryModel.create({
      ...req.body,
      image: req.file.path,
    });

    return res.redirect("/admin/form");
  } catch (error) {
    return res.redirect("/admin/form");
  }
};

module.exports.delCat = async (req, res) => {
  try {
    const { id } = req.params;
    const cat = await categoryModel.findByIdAndDelete(id);
    await subCategoryModel.deleteMany({ categoryId : id });
    await extCategoryModel.deleteMany({ categoryId: id });


    fs.unlinkSync(cat.image);
    return res.redirect("/admin/form");
  } catch (error) {
    return res.redirect("/admin/form");
  }
};