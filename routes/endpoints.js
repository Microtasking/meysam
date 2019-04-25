var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/me1', function(req, res) {
 res.send(service.me1(req.query.param));
  });

router.post('/me1', function(req, res) {
 res.send(service.me1(req.body.param));
  });



module.exports = router;
