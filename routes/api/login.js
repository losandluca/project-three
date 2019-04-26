const router =require("express").Router();
const userController=require("../..//controllers/userController");
const passport =require("../../config/passport");
router.route("/")
  .post(passport.authenticate("local"),userController.findUser)

  module.exports=router;