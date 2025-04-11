const categoryModel = require("../models/categoryModel");
const subCategoryModel = require("../models/subCategoryModel");
const extCategoryModel = require("../models/extCategoryModel");

// Load admin dashboard page
module.exports.adminDashboard = (req, res) => {
  return res.render("index");
};

module.exports.formPage = async (req, res) => {
  try {
    const catData = await categoryModel.find({});
    const selectedCategoryId = req.query.categoryId || null;

    // Fetch ALL subcategories, and populate their category
    // const subCatData = await subCategoryModel.find().populate("categoryId", "name");

    const subCatData = selectedCategoryId
  ? await subCategoryModel.find({ categoryId: selectedCategoryId }).populate("categoryId", "name")
  : await subCategoryModel.find({}).populate("categoryId", "name");


    // const subCatData = selectedCategoryId
    //   ? await subCategoryModel.find({ categoryId: selectedCategoryId })
    //   : [];

    const extCatData = await extCategoryModel
      .find({})
      .populate("categoryId", "name")
      .populate("subcategoryId", "name");

    return res.render("admin/form", {
      catData,
      subCatData,
      extCatData,
      selectedCategoryId,
    });
  } catch (error) {
    console.log("Error loading form page:", error.message);
    return res.render("admin/form", {
      catData: [],
      subCatData: [],
      extCatData: [],
      selectedCategoryId: null,
    });
  }
};
