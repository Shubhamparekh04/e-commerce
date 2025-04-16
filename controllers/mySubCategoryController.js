const subCategoryModel = require("../models/subCategoryModel");

module.exports.createSubCat = async (req, res) => {
  try {
    console.log(req.body);
    const { name, categoryId } = req.body;

    if (!categoryId) {
      return res.send("Please select a category before adding a sub-category.");
    }

    const newSubCat = new subCategoryModel({
      name,
      categoryId,
    });

    await newSubCat.save();
    console.log("Sub category created...!");
    res.redirect("/admin/form");
  } catch (error) {
    console.log("Error creating sub-category:", error.message);
    res.redirect("/admin/form");
  }
};

module.exports.delSubCat = async (req, res) => {
  try {
    const { id } = req.params;
    await subCategoryModel.findByIdAndDelete(id);
    console.log("sub category deleted....!");
    res.redirect("/admin/form");
  } catch (error) {
    console.log(error.message);
    res.redirect("/admin/form");
  }
};
