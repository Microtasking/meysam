var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/method1', function(req, res) {
 res.send(service.method1(req.query.param));
  });

router.post('/method1', function(req, res) {
 res.send(service.method1(req.body.param));
  });



module.exports = router;
