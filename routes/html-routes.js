// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
//
module.exports = function(app) {
//
  app.get("/", function(req, res) {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("../client/src/pages/home.js");
    }
    res.sendFile(path.join(__dirname, "../client/src/pages/register.js"));
  });
//
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the home page
    if (req.user) {
      res.redirect("../client/src/pages/home.js");
    }
    res.sendFile(path.join(__dirname, "../client/src/pages/register.js"));
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("../client/src/pages/home.js", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../client/src/pages/register.js"));
  });
};