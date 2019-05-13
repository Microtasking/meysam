var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/sayGoodby', function(req, res) {
 res.send(service.sayGoodby(req.query.name));
  });

router.post('/sayGoodby', function(req, res) {
 res.send(service.sayGoodby(req.body.name));
  });


router.get('/sayApresto', function(req, res) {
 res.send(service.sayApresto(req.query.name));
  });

router.post('/sayApresto', function(req, res) {
 res.send(service.sayApresto(req.body.name));
  });



module.exports = router;
