var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/showNumbers', function(req, res) {
 res.send(service.showNumbers(req.query.source));
  });

router.post('/showNumbers', function(req, res) {
 res.send(service.showNumbers(req.body.source));
  });


router.get('/pop', function(req, res) {
 res.send(service.pop(req.query.source));
  });

router.post('/pop', function(req, res) {
 res.send(service.pop(req.body.source));
  });


router.get('/push', function(req, res) {
 res.send(service.push(req.query.target,req.query.number));
  });

router.post('/push', function(req, res) {
 res.send(service.push(req.body.target,req.body.number));
  });


router.get('/shift', function(req, res) {
 res.send(service.shift(req.query.source));
  });

router.post('/shift', function(req, res) {
 res.send(service.shift(req.body.source));
  });


router.get('/unshift', function(req, res) {
 res.send(service.unshift(req.query.target,req.query.number));
  });

router.post('/unshift', function(req, res) {
 res.send(service.unshift(req.body.target,req.body.number));
  });


router.get('/initialize', function(req, res) {
 res.send(service.initialize(req.query.target));
  });

router.post('/initialize', function(req, res) {
 res.send(service.initialize(req.body.target));
  });


router.get('/sayHello', function(req, res) {
 res.send(service.sayHello(req.query.name));
  });

router.post('/sayHello', function(req, res) {
 res.send(service.sayHello(req.body.name));
  });



module.exports = router;
