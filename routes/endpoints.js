var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/sayCiao', function(req, res) {
 res.send(service.sayCiao(req.query.name));
  });

router.post('/sayCiao', function(req, res) {
 res.send(service.sayCiao(req.body.name));
  });


router.get('/sayHello', function(req, res) {
 res.send(service.sayHello(req.query.name));
  });

router.post('/sayHello', function(req, res) {
 res.send(service.sayHello(req.body.name));
  });



module.exports = router;
