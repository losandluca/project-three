const router = require("express").Router();
const userController = require("../../controllers/userController");
// const passport = require("../../config/passport");

router.route("/").post(userController.newUser);

module.exports = router;