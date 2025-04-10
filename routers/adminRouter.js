const { Router } = require("express");

const adminRouter = Router();
const adminController = require("../controllers/adminController");

adminRouter.get("/", adminController.adminDashboard);
adminRouter.get("/form", adminController.formPage);

module.exports = adminRouter;