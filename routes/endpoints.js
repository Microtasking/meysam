var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/method1', function(req, res) {
 res.send(service.method1(req.query.param));
  });

router.post('/method1', function(req, res) {
 res.send(service.method1(req.body.param));
  });

router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    // And insert something like this instead:
    res.json([{
        id: 1,
        endpoint: "method1"
    }, {
        id: 2,
        endpoint: "method1"
    }]);
});

module.exports = router;
