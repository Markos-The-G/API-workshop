var express = require("express");
var router = express.Router();
const request = require('request')
const axios = require("axios")

/**
 * Use the Movie Database API (https://developers.themoviedb.org/3/getting-started/introduction)
 * and the request library Axios or Request (https://www.npmjs.com/package/axios) (https://www.npmjs.com/package/request)
 */
const getRating = movieTitle => {
    const rating = '';

  return rating
  
};

router.post("/", (req, res, next) => {
    res.send(getRating(req.body.movieTitle));
});

module.exports = router;
