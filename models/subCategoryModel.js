const { default: mongoose } = require("mongoose");

const subCategorySchema = new mongoose.Schema(
  {
    name: String,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoryModel",
    },
  },
  { timestamps: true }
);

const subCategoryModel = mongoose.model("subCategoryModel", subCategorySchema);
module.exports = subCategoryModel;
