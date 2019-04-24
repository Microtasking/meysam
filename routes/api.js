var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/setName', function(req, res) {
 res.send(service.setName(req.query.myName));
  });

router.post('/setName', function(req, res) {
 res.send(service.setName(req.body.myName));
  });


router.get('/getADT1', function(req, res) {
 res.send(service.getADT1(req.query.name));
  });

router.post('/getADT1', function(req, res) {
 res.send(service.getADT1(req.body.name));
  });



module.exports = router;
