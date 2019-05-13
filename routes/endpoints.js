var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/sayHello', function(req, res) {
 res.send(service.sayHello(req.query.name));
  });

router.post('/sayHello', function(req, res) {
 res.send(service.sayHello(req.body.name));
  });


router.get('/sayGoodbye', function(req, res) {
 res.send(service.sayGoodbye(req.query.name));
  });

router.post('/sayGoodbye', function(req, res) {
 res.send(service.sayGoodbye(req.body.name));
  });



module.exports = router;
