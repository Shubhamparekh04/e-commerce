const { Router } = require("express");

const myExtCategoryRouter = Router();
const myExtCategoryController = require("../controllers/myExtCategoryController");
const upload = require("../middleware/imageUpload");

myExtCategoryRouter.post("/createExtCat",upload,myExtCategoryController.createExtCat);
myExtCategoryRouter.get("/delete/:id", myExtCategoryController.delExtCat);

module.exports = myExtCategoryRouter;