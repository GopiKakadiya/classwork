var express = require('express');
var router = express.Router();

const ctrlLocations = require('../controller/locations');
const ctrlOthers = require('../controller/others');




 /* GET Locations page. */
 router.get('/', ctrlLocations.homelist);
 router.get('/location', ctrlLocations.locationInfo);
 router.get('/location/review/new', ctrlLocations.addReview);


  /* GET About page. */
  router.get('/about', ctrlOthers.about);


module.exports = router;
