const router = require("express").Router();
const registeredController = require("../../controllers/registeredController");

router.route("/").get(registeredController.findAll);

module.exports = router;