const express = require('express')
const router = express.Router()
const controller = require('./controller')

//get All Task
router.get('/', controller.findAll);
//create New Task
router.post('/', controller.create);
//get Task by id
router.get('/:id', controller.findById);
//update a task based on a task id
router.put('/:id', controller.update);
//delete task based on a task id
router.delete('/:id', controller.delete);

module.exports = router;