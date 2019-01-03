const express = require('express');
const router = express.Router();
const Word = require('../../models/Word');

router.get('/:user_id', (req, res) => {
  Word.find({user: req.params.user_id})
    .then(words => res.json(words))
    .catch(err => res.status(404).json({ nowordsfound: 'No words found for this user'}))
})


module.exports = router;