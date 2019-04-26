const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

router.route("/signup").post(passport.authenticate("local"), userController.newUser);
router.route("/login").post(passport.authenticate("local"), userController.currentUser);

module.exports = router;
