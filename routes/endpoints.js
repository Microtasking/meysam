var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/sayCiao', function(req, res) {
 res.send(service.sayCiao(req.query.name));
  });

router.post('/sayCiao', function(req, res) {
 res.send(service.sayCiao(req.body.name));
  });



module.exports = router;
