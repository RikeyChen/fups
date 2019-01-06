const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const path = __dirname
process.env.GOOGLE_APPLICATION_CREDENTIALS = `${path}/../../config/google_key.json`;

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

const Fup = require('../../models/Fup');
const Word = require('../../models/Word');
const validateFupInput = require('../../validation/fups');

const getWordsFromFup = (fup, req) => {
  let document = {
    content: req.body.text,
    type: 'PLAIN_TEXT',
  };
  client
    .analyzeEntitySentiment({ document: document })
    .then(results => {
      const entities = results[0].entities;

      entities.forEach(entity => {
        newWord = new Word({
          user: req.user.id,
          fup: fup.id,
          word: entity.name,
          type: entity.type,
          fupScore: fup.score,
          salience: entity.salience
        })
        newWord.save()
      })
    })
}

router.get('/', (req, res) => {
  Fup.find()
    .where({ private: false })
    .sort({ date: -1 })
    .then(fups => res.json(fups))
    .catch(err => res.status(404).json({nofupsfound: 'No fups were found' }));
}); 

router.get(`/user/:user_id`, (req, res) => {
  Fup.find({user: req.params.user_id})
    .sort({ date: -1 })
    .then(fups => res.json(fups))
    .catch(err => 
      res.status(404).json({ nofupsfound: 'No Fups found for this user'}))
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFupInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }    

    let document = {
      content: req.body.text,
      type: 'PLAIN_TEXT',
    };

    client
      .analyzeSentiment({ document })
      .then(results => {
        const sentiment = results[0].documentSentiment;
        const newFup = new Fup({
          text: req.body.text,
          user: req.user.id,
          private: req.body.private,
          score: sentiment.score,
          iconNum: Math.floor(Math.random() * Math.floor(10))
        });
        newFup.save().then(fup => {
          getWordsFromFup(fup, req);
          res.json(fup)}
          );
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }
);

router.delete('/:id', (req, res) => {
    Fup.findOneAndRemove({_id: req.params.id})
      .then(fup => res.json(fup))
      .catch(err => res.status(404).json({somethingwentwrong: 'Fup not found or unable to delete'}))
  }
);

module.exports = router;