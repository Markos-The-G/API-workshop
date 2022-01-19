var express = require('express');
var router = express.Router();



/**
 * Create an algorithm that checks an array of inputted words for any anagrams, and outputs the number of anagrams from the list
 * 
 * Anagram array example: [race, care, earth, book, keen, heart]
 * This should output 2 anagrams (race and care, heart and earth)
 */
const anagrams = randomWords => {
    const anagramCount = 0;

    return anagramCount
}

/* GET home page. */
router.post('/', (req, res, next) => {

  res.send(anagrams(req.body.randomWords));

});

module.exports = router;