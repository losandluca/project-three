const router = require("express").Router();
const loginRoute = require("./login");

// User routes
router.use("/login", loginRoute);

module.exports = router;
