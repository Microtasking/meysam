var express = require('express');
var router = express.Router();
var service = require('../service/microservice');

router.get('/updateTodo', function(req, res) {
 res.send(service.updateTodo(req.query.todo));
  });

router.post('/updateTodo', function(req, res) {
 res.send(service.updateTodo(req.body.todo));
  });


router.get('/SaveObject', function(req, res) {
 res.send(service.SaveObject(req.query.todo));
  });

router.post('/SaveObject', function(req, res) {
 res.send(service.SaveObject(req.body.todo));
  });


router.get('/FetchObject', function(req, res) {
 res.send(service.FetchObject(req.query.objectId));
  });

router.post('/FetchObject', function(req, res) {
 res.send(service.FetchObject(req.body.objectId));
  });


router.get('/DeleteObject', function(req, res) {
 res.send(service.DeleteObject(req.query.todo));
  });

router.post('/DeleteObject', function(req, res) {
 res.send(service.DeleteObject(req.body.todo));
  });


router.get('/UpdateObject', function(req, res) {
 res.send(service.UpdateObject(req.query.todo));
  });

router.post('/UpdateObject', function(req, res) {
 res.send(service.UpdateObject(req.body.todo));
  });


router.get('/fetchAllTodos', function(req, res) {
 res.send(service.fetchAllTodos(req.query.userId));
  });

router.post('/fetchAllTodos', function(req, res) {
 res.send(service.fetchAllTodos(req.body.userId));
  });


router.get('/FetchAllObjects', function(req, res) {
 res.send(service.FetchAllObjects(req.query.userId));
  });

router.post('/FetchAllObjects', function(req, res) {
 res.send(service.FetchAllObjects(req.body.userId));
  });


router.get('/createGroup', function(req, res) {
 res.send(service.createGroup(req.query.todoArray,req.query.groupId));
  });

router.post('/createGroup', function(req, res) {
 res.send(service.createGroup(req.body.todoArray,req.body.groupId));
  });


router.get('/updatePriorityOfaTodo', function(req, res) {
 res.send(service.updatePriorityOfaTodo(req.query.id,req.query.priority));
  });

router.post('/updatePriorityOfaTodo', function(req, res) {
 res.send(service.updatePriorityOfaTodo(req.body.id,req.body.priority));
  });


router.get('/fetchTodosBasedOnStatus', function(req, res) {
 res.send(service.fetchTodosBasedOnStatus(req.query.userId,req.query.status));
  });

router.post('/fetchTodosBasedOnStatus', function(req, res) {
 res.send(service.fetchTodosBasedOnStatus(req.body.userId,req.body.status));
  });


router.get('/remindOnDueDate', function(req, res) {
 res.send(service.remindOnDueDate(req.query.userId,req.query.dueDate));
  });

router.post('/remindOnDueDate', function(req, res) {
 res.send(service.remindOnDueDate(req.body.userId,req.body.dueDate));
  });


router.get('/markTodoAsCompleted', function(req, res) {
 res.send(service.markTodoAsCompleted(req.query.id));
  });

router.post('/markTodoAsCompleted', function(req, res) {
 res.send(service.markTodoAsCompleted(req.body.id));
  });



module.exports = router;
