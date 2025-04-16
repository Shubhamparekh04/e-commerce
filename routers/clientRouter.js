const { Router } = require("express");

const clientRouter = Router();

const clientController = require("../controllers/clientController");

// clientRouter.get("/clientHome", clientController.homePage);
clientRouter.get("/", clientController.homePage);
clientRouter.get("/subcategory/:id", clientController.getExtraBySubCategory);
clientRouter.get("/product/:id", clientController.showSingleProduct);

module.exports = clientRouter;
