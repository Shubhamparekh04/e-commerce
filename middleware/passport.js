const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const adminModel = require("../models/adminModel");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await adminModel.findOne({ username: username });

      if (!user) {
        return done(null, false, { message: "User not found" });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await adminModel.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Route protection middleware
passport.userAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.redirect("/admin/login");
};

module.exports = passport;
