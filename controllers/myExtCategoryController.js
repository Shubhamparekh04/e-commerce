const extCategoryModel = require("../models/extCategoryModel");

module.exports.createExtCat = async (req, res) => {
  try {
    const {
      name,
      categoryId,
      subcategoryId,
      price,
      description,
      stars 
    } = req.body;
    
    const image = req.file ? req.file.filename : null;

    if (!categoryId || !subcategoryId) {
      return res.send("Please select both Category and Sub-Category.");
    }

    const newExtCat = new extCategoryModel({
      name,
      image,
      price,
      description,
      stars, 
      categoryId,
      subcategoryId,
    });
    

    await newExtCat.save();
    console.log("Extra category created...!");
    res.redirect("/admin/form");
  } catch (error) {
    console.log("Error creating extra category:", error.message);
    res.redirect("/admin/form");
  }
};

module.exports.delExtCat = async (req, res) => {
  try {
    const { id } = req.params;

    await extCategoryModel.findByIdAndDelete(id);

    console.log("Extra category deleted!");
    res.redirect("/admin/form");
  } catch (error) {
    console.log("Error deleting extra category:", error.message);
    res.redirect("/admin/form");
  }
};
