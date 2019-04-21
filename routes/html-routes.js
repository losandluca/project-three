// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
//
module.exports = function(app) {
//
  app.get("/", function(req, res) {
    // if (req.user) {
    //   res.redirect("../client/src/pages/home.js");
    // }
    res.sendFile(path.join(__dirname, "../client/src/pages/home.js"));
  });
//
  // app.get("/lobby", function(req, res) {
  //   if (req.user) {
  //     res.redirect("../client/src/pages/home.js");
  //   }
  //   res.sendFile(path.join(__dirname, "../client/src/pages/register.js"));
  // });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is logged in the will be routed to THEIR lobby
  app.get("/lobby", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../client/src/pages/lobby.js"));
  });
};