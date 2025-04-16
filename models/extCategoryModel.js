const { default: mongoose } = require("mongoose");

const extCategorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    price: Number,
    description: String,
    stars: {
      type: Number,
      min: 1,
      max: 5,
    },
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



