const express = require("express");
const port = 8089;
const app = express();
const db = require("./configs/database");
const indexRouter = require("./routers");
app.use("/uploads", express.static(__dirname + "/uploads"));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const session = require("express-session");
const passport = require("passport");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("Server runs on:\nhttp://localhost:" + port);
  }
});
