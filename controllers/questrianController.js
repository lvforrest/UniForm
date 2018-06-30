const db = require("../models"); 
 
// Defining methods for the QuestriansController 
module.exports = { 
  findAll: function(req, res) { 
    db.Questrian 
      .find(req.query) 
      .sort({ date: -1 }) 
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err)); 
  }, 
  findById: function(req, res) { 
    console.log(req.body) 
    db.Questrian 
      .findById(req.params.id) 
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err)); 
  }, 
  create: function(req, res) { 
    db.Questrian 
      .create(req.body) 
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err)); 
  }, 
  update: function(req, res) { 
    db.Questrian 
      .findOneAndUpdate({ _id: req.params.id }, req.body) 
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err)); 
  }, 
  remove: function(req, res) { 
    db.Questrian 
      .findById({ _id: req.params.id }) 
      .then(dbModel => dbModel.remove()) 
      .then(dbModel => res.json(dbModel)) 
      .catch(err => res.status(422).json(err)); 
  } 
};