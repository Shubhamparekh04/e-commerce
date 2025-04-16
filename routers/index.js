const { Router } = require("express");
const indexRouter = Router();

const adminRouter = require("../routers/adminRouter");
const myCategoryRouter = require("../routers/myCategoryRouter");
const mySubCategoryRouter = require("../routers/mySubCategoryRouter");
const myExtCategoryRouter = require("../routers/myExtCategoryRouter");
const clientRouter = require("../routers/clientRouter");

indexRouter.use("/", clientRouter);
indexRouter.use("/admin", adminRouter);
indexRouter.use("/myCat", myCategoryRouter);
indexRouter.use("/mySubCat", mySubCategoryRouter);
indexRouter.use("/myExtCat", myExtCategoryRouter);

module.exports = indexRouter;
