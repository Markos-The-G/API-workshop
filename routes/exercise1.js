var express = require('express');
var router = express.Router();


/**
 * Complete this function and implement a sort algorithm of your choice! (merge sort, quick sort, bubble sort, etc)
 * 
 * Try to avoid using the built in sort function
 */
const favouriteSort = randomNumberArray => {

    return randomNumberArray
}

router.get('/', (req, res, next) => {

  res.send(favouriteSort(Array.from({length: 10}, () => Math.floor(Math.random() * 40))));

});

module.exports = router;