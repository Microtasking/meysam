var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/methodA', function(req, res) {
 res.send(service.methodA(req.query.param1));
  });

router.post('/methodA', function(req, res) {
 res.send(service.methodA(req.body.param1));
  });



module.exports = router;
