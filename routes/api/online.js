const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/").get(userController.playerOnline);

module.exports = router;