var express = require('express');
var router = express.Router();
var weather = require('openweather-apis');


/**
 * Use the openweather API to output the temperature of a certain latitude and longitude
 * You can find the details of this library here: https://www.npmjs.com/package/openweather-apis
 * Use the following API key: ca2f3eae1ec052b811d0367b9076ce37
 */
const getTemp = (latitude, longitude) => {
    const temp = 0;

    return temp
}


/* GET home page. */
router.post('/', (req, res, next) => {

  res.send(getTemp(req.body.latitude, req.body.longitude));

});

module.exports = router;