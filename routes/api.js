import express from "express";
const router = express.Router();

import * as TaskController from '../app/controllers/taskController.js';

// Read Route
router.post('/createtask', TaskController.createTask);
// Create Route
router.get('/readtask', TaskController.readTask);
// Update Route
router.put('/updatetask', TaskController.updateTask);
// Delete Route
router.delete('/deletetask', TaskController.deleteTask);

export default router;