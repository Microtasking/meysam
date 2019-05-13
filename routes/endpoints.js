var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/getAllDepartments', function(req, res) {
 res.send(service.getAllDepartments());
  });

router.post('/getAllDepartments', function(req, res) {
 res.send(service.getAllDepartments());
  });


router.get('/getMembersBelongTo', function(req, res) {
 res.send(service.getMembersBelongTo(req.query.departmentId));
  });

router.post('/getMembersBelongTo', function(req, res) {
 res.send(service.getMembersBelongTo(req.body.departmentId));
  });



module.exports = router;
