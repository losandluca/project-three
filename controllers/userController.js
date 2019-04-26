const db = require("../models");
// const bcrypt = require("bcrypt");
// const passport = require("../../config/passport");

module.exports = {
//findUser - used to find a registered user in the db
    findUser: function(req, res) {
        console.log("findUSer function hitting in userContoller.js");
        if(!res) {
            res.redirect("/");
        }
        res.json(JSON.parse(JSON.stringify(req.user)));
    },
//newUser - used to register a new user to the app
    newUser: function(req, res) {
        console.log("newUser");
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            title: req.body.title,
            image: req.body.image
        }).then(function() {
            // alert("You are now registered!"); NOT working
            res.redirect(307, "../client/src/pages/lobby");
          }).catch(function(err) {
            console.log(err);
            res.json(err);
          });
    },
//currentUser - used to login a user already registered
    // currentUser: function(req, res) {
    //     console.log(req.body); 
    //     db.Users.findOne({ user_name: req.body.loginObj.user_name }).then(users => {
    //         console.log(users);
    //         console.log(users.user_name);
    //         console.log(users.password); 
    //         if (!users && typeof users === object) {
    //             res.status(404).send("invalid user name or password")
    //         } else {
    //             bcrypt.compare(req.body.loginObj.password, users.password).then(function (bcryptRes) {
    //                 if(!bcryptRes) {
    //                     console.log("it worked");
    //                     res.status(404).send("Invalid")
    //                 } else {
    //                     console.log("it worked too!");
    //                     req.session.user.loggedIn = true;
    //                 }
    //             });
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //         res.status(422).json(err);
    //     });
    // }
    currentUser: function(req, res) {
        console.log("coming here");
        if(!res) {
            res.redirect("/register")
        } res.json(JSON.parse(JSON.stringify(req.user)));
    }
};
