const categoryModel = require("../models/categoryModel");
const subCategoryModel = require("../models/subCategoryModel");

module.exports.adminDashboard = (req, res) => {
  return res.render("index");
};

module.exports.formPage = async (req, res) => {
  try {
    const catData = await categoryModel.find({});
    const subCatData = await subCategoryModel.find({}).populate("categoryId", "name");
    return res.render("admin/form", { catData, subCatData });
  } catch (error) {
    console.log("Error loading form page:", error.message);
    return res.render("admin/form", { catData: [], subCatData: [] });
  }
};
