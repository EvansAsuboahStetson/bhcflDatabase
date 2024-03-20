const express = require('express');
const router = express.Router();
const ClassesController = require('../controllers/classesController');

// POST request to add a new class
router.post('/class', ClassesController.createClass);

router.get('/classes', ClassesController.getAllClasses);

// GET request to fetch a specific class by ID
router.get('/class/:classId', ClassesController.getClassById);

// PUT request to update a specific class by ID
router.put('/class/:classId', ClassesController.updateClass);

// DELETE request to delete a specific class by ID
router.delete('/class/:classId', ClassesController.deleteClass);

module.exports = router;
