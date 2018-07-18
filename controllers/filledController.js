const db = require("../models");

// Defining methods for the FilledsController
module.exports = {
  findAll: function(req, res) {
    db.Filled
      .find({user: req.params.query})
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Filled
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTemplate: function(req, res) {
    db.Filled  
    .find({templateId: req.params.id})  
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))  
    .catch(err => res.status(422).json(err));
  },
  findByPatron: function(req, res) { 
  db.Filled  
  .find({patronId: req.params.id})
  .sort({ date: -1 })
  .then(dbModel => res.json(dbModel))  
  .catch(err => res.status(422).json(err));
  }, 
  create: function(req, res) {
    db.Filled
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Filled
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Filled
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};