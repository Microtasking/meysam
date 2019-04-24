var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/deploy1', function(req, res) {
 res.send(service.deploy1(req.query.param));
  });

router.post('/deploy1', function(req, res) {
 res.send(service.deploy1(req.body.param));
  });



module.exports = router;
