const { Router } = require("express");
const subCategoryRouter = Router();
const subCategoryController = require("../controllers/subCategoryController");
const upload = require("../middleware/imageUpload");

subCategoryRouter.post("/createSubCat", upload, subCategoryController.create);
subCategoryRouter.get("/getSubCat", subCategoryController.get);
subCategoryRouter.delete("/delSubCat/:id", subCategoryController.del);
subCategoryRouter.patch("/updateSubCat/:id",upload,subCategoryController.update);

module.exports = subCategoryRouter;
