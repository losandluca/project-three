const router = require("express").Router();
const loginRoute = require("./login");
const userRegisterRoute = require("./users");

// User routes
router.use("/login", loginRoute);
router.use("/users", userRegisterRoute);

module.exports = router;
