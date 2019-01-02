const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Fup = require('../../models/Fup');
const validateFupInput = require('../../validation/fups');

router.get('/', (req, res) => {
  Fup.find()
    .where({ private: false })
    .sort({ date: -1 })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(404).json({nofupsfound: 'No fups were found' }));
}); 

router.get('/user/:user_id'), (req, res) => {
  Fup.find({user: req.params.user_id})
    .then(fups => res.json(fups))
    .catch(err => 
      res.status(404).json({ notweetsfound: 'No Fups found for this user'}))
}

module.exports = router;