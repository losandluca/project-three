const router = require("express").Router();
const loginRoute = require("./login");
const userRegisterRoute = require("./users");
const registeredRoute = require("./usersRegistered");

// User routes
router.use("/login", loginRoute);
router.use("/users", userRegisterRoute);
router.use("/usersRegistered", registeredRoute);

module.exports = router;
