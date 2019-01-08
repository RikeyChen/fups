const express = require('express');
const router = express.Router();
const Word = require('../../models/Word');
const maxHeap = require('../../util/heap');

router.get('/:user_id', (req, res) => {
  Word.find({user: req.params.user_id})
    .where('salience').gte(0.1)
    .where('fupScore').lte(0)
    .then(words => {
      let counter = {};
      let average = 0;

      // Create counter hash of words
      words.forEach(word => {
        if (counter[word.word]) {
          counter[word.word] += 1
        } else {
          counter[word.word] = 1
        }
      })

      const keys = Object.keys(counter).map(key => {
        return {word: key, count: counter[key]};
      }, counter)
    
      keys.sort((word1, word2) => { 
        return word2.count - word1.count });

      const topWords = keys.slice(0,7)
      topWords.forEach(word => average += word.count);
      topWords.forEach(word => word['percent'] = ((word.count / average) * 100).toFixed(1) + '%');
      
      res.json(keys.slice(0,7)) })
    .catch(err => res.status(404).json({ nowordsfound: 'No words found for this user'}))
})

// get all words
router.get('/', (req, res) => {
  Word.find()
    .where('salience').gte(0.1)
    .where('fupScore').lte(0)
    .then(words => {
      let counter = {};
      let average = 0;

      // Create counter hash of words
      words.forEach(word => {
        if (counter[word.word]) {
          counter[word.word] += 1
        } else {
          counter[word.word] = 1
        }
      })

      const keys = Object.keys(counter).map(key => {
        return { word: key, count: counter[key] };
      }, counter)

      keys.sort((word1, word2) => {
        return word2.count - word1.count
      });

      const topWords = keys.slice(0, 20)
      topWords.forEach(word => average += word.count);
      topWords.forEach(word => word['percent'] = ((word.count / average) * 100).toFixed(1) + '%');

      res.json(keys.slice(0, 20))
    })
    .catch(err => res.status(404).json({ nowordsfound: 'No words found for this user' }))
})

module.exports = router;