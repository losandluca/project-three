const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        // console.log("hitting findAll controller");
       db.User
       .findAll(req.query)
       .then(dbUser => res.json(dbUser))
       .catch(err => res.status(422).json(err)); 
    }

};
