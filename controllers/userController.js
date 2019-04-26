const db = require("../models");
const bcrypt = require("bcrypt");
 //const passport = require("../../config/passport");

module.exports = {
    findById: function(req, res) {
        db.User.findById(req.params.id).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        db.User.find(req.query).sort({ date: -1 }).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.User.findOneAndUpdate({_id: req.params.id}, req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User.findById({_id: req.params.id}, req.body).then(dbModel => dbModel.remove()).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
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
    //     db.User.findOne({ user_name: req.body.loginObj.user_name }).then(users => {
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
    //     })
    // },

    currentUser: function(req, res) {
        if(!res) {
            res.redirect("/register")
        } res.json(JSON.parse(JSON.stringify(req.user)));
    }
};
