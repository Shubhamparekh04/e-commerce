const { Router } = require("express");

const adminRouter = Router();
const adminController = require("../controllers/adminController");
const passport = require("../middleware/passport");

adminRouter.get("/login", adminController.loginPage);

adminRouter.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/admin/login",
  }),
  adminController.adminDashboard
);

adminRouter.get("/register", adminController.registerPage);
adminRouter.post("/register", adminController.registerAdmin);

adminRouter.use(passport.userAuth);
adminRouter.get("/adminDashboard", adminController.adminDashboard);
adminRouter.get("/form", adminController.formPage);
adminRouter.get("/logout",adminController.logout);

module.exports = adminRouter;
