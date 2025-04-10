const { Router } = require("express");
const indexRouter = Router();
// const categoryRouter = require("../routers/categoryRouter");
// const subCategoryRouter = require("../routers/subCategoryRouter");
// const extCategoryRouter = require("../routers/extCategoryRouter");
// const clientRouter = require("../routers/clientRouter")
// indexRouter.use("/cat", categoryRouter);
// indexRouter.use("/subCat", subCategoryRouter);
// indexRouter.use("/extCat", extCategoryRouter);
// indexRouter.use("/client", clientRouter);

const adminRouter = require("../routers/adminRouter");
const myCategoryRouter = require("../routers/myCategoryRouter");
const mySubCategoryRouter = require("../routers/mySubCategoryRouter");

indexRouter.use("/", adminRouter);
indexRouter.use("/myCat", myCategoryRouter);
indexRouter.use("/mySubCat", mySubCategoryRouter);

module.exports = indexRouter;
