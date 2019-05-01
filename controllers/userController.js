const db = require("../models");
// const bcrypt = require("bcrypt");
// const passport = require("../../config/passport");

module.exports = {
//findUser - used to find a registered user in the db
    findUser: function(req, res) {
        // console.log("findUser function hitting in userContoller.js");
        if(!res) {
            res.redirect("/");
        }
        res.json(JSON.parse(JSON.stringify(req.user)));
    },
//newUser - used to register a new user to the app db
    newUser: function(req, res) {
        // console.log("hitting newUser in userController");
        db.User
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
//playerOnline - used to get data of the online user who's logged in
    playerOnline: function(req, res) {
        console.log("playerOnline function is hitting in controller");
        console.log(res);
        // console.log(req);
        db.User
        .find(req.query)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
};
