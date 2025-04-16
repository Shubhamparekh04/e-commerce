const categoryModel = require("../models/categoryModel");
const subCategoryModel = require("../models/subCategoryModel");
const extCategoryModel = require("../models/extCategoryModel");
const adminModel = require("../models/adminModel");

// Load admin dashboard page
module.exports.adminDashboard = (req, res) => {
  return res.render("index");
};

module.exports.formPage = async (req, res) => {
  try {
    const catData = await categoryModel.find({});
    const selectedCategoryId = req.query.categoryId || null;

    const subCatData = selectedCategoryId
      ? await subCategoryModel
          .find({ categoryId: selectedCategoryId })
          .populate("categoryId", "name")
      : await subCategoryModel.find({}).populate("categoryId", "name");

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

module.exports.loginPage = (req, res) => {
  return res.render("admin/login");
};

module.exports.registerPage = (req, res) => {
  return res.render("admin/register");
};

module.exports.registerAdmin = async (req, res) => {
  try {
    await adminModel.create(req.body);
    console.log("Admin cred created...!!!");
    return res.redirect("/admin/login");
  } catch (error) {
    return res.render("admin/register");
  }
};


module.exports.logout = (req, res) => {
  req.logOut(() => {
    return res.redirect("/admin/login");
  });
};