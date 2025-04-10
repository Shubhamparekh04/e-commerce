const { Router } = require("express");

const mySubCategoryRouter = Router();
const mySubCategoryController = require("../controllers/mySubCategoryController");
// const upload = require("../middleware/imageUpload");

mySubCategoryRouter.post("/createSubCat", mySubCategoryController.createSubCat);
mySubCategoryRouter.get("/delete/:id", mySubCategoryController.delSubCat);

module.exports = mySubCategoryRouter;