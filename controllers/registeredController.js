const db = require("../models");

module.exports = {
//findAll - used to find all the registered users registered to the app
    findAll: function(req, res) {
        // console.log("hitting findAll controller");
       db.User
       .findAll(req.query)
       .then(dbUser => res.json(dbUser))
       .catch(err => res.status(422).json(err)); 
    }

};
