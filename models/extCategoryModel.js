const { default: mongoose } = require("mongoose");

const extCategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categoryModel",
    },
    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategoryModel",
    },
  },
  { timestamps: true }
);

const extCategoryModel = mongoose.model("extCategoryModel", extCategorySchema);
module.exports = extCategoryModel;
