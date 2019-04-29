var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/endp1', function(req, res) {
 res.send(service.endp1(req.query.param));
  });

router.post('/endp1', function(req, res) {
 res.send(service.endp1(req.body.param));
  });



module.exports = router;
