var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/endpo1', function(req, res) {
 res.send(service.endpo1(req.query.param));
  });

router.post('/endpo1', function(req, res) {
 res.send(service.endpo1(req.body.param));
  });



module.exports = router;
