const mongoose = require("mongoose"); // ensure this is at the top
const categoryModel = require("../models/categoryModel");
const subCategoryModel = require("../models/subCategoryModel");
const extCategoryModel = require("../models/extCategoryModel");

module.exports.homePage = async (req, res) => {
  try {
    const catData = await categoryModel.find({});
    const subData = await subCategoryModel.find({});
    const extraData = await extCategoryModel.find({});

    return res.render("client/home", {
      catData,
      subData,
      extraData,
    });
  } catch (error) {
    console.log("Error loading home page:", error.message);
    return res.render("client/home", {
      catData: [],
      subData: [],
      extraData: [],
    });
  }
};


module.exports.getExtraBySubCategory = async (req, res) => {
  try {
    const subcatId = req.params.id;

    const extraData = await extCategoryModel.find({
      subcategoryId: new mongoose.Types.ObjectId(subcatId),
    })
      .populate("subcategoryId") // optional: show subcategory name
      .exec();

    console.log("Fetched Extra Categories:", extraData);

    res.render("client/products", { extraData });
  } catch (err) {
    console.error("Error fetching extra categories:", err);
    res.redirect("/");
  }
};


module.exports.showSingleProduct = async (req, res) => {
  try {
    const extCatId = req.params.id;

    const product = await extCategoryModel.findById(extCatId).populate("subcategoryId");

    if (!product) {
      return res.status(404).send("Product not found");
    }

    return res.render("client/single", { product });
  } catch (error) {
    console.error("Error loading single product:", error.message);
    return res.redirect("/");
  }
};


