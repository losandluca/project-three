const db = require("../models");

module.exports = {

    findAll: function(req, res) {
        console.log("hitting findAll controller");
       db.User
       .find(req.query)
       .sort({ date: -1 })
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err)); 
    }

};
