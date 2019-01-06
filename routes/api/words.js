const express = require('express');
const router = express.Router();
const Word = require('../../models/Word');

router.get('/:user_id', (req, res) => {
  Word.find({user: req.params.user_id})
    .where('salience').gte(0.1)
    .where('fupScore').lte(0)
    .then(words => {
      let counter = {}

      // Create counter hash of words
      words.forEach(word => {
        if (counter[word.word]) {
          counter[word.word] += 1
        } else {
          counter[word.word] = 1
        }
      })


      res.json(counter)})
    .catch(err => res.status(404).json({ nowordsfound: 'No words found for this user'}))
})


module.exports = router;