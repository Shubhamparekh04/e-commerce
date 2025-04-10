const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("categoryModel", categorySchema);
module.exports = categoryModel;
