const express = require("express");
const port = 8089;
const app = express();
const db = require("./configs/database");
const indexRouter = require("./routers");
app.use("/uploads", express.static(__dirname + "/uploads"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", indexRouter);

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("Server runs on:\nhttp://localhost:" + port);
  }
});
