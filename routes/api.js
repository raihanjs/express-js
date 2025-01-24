import express from "express";
const router = express.Router();

import * as TaskController from '../app/controllers/taskController.js';

// ======================================================================Create Route
router.post('/createtask', TaskController.createTask);
// -- Params
router.post('/createtaskparam/:name/:mail/:id', TaskController.createTaskParam);
// -- Query String
router.post('/createtaskstring', TaskController.createTaskQuery);
// -- Upload File
router.post('/uploadfile', TaskController.UploadFile)
// ======================================================================Read Route
router.get('/readtask', TaskController.readTask);
// ======================================================================Update Route
router.put('/updatetask', TaskController.updateTask);
// ======================================================================Delete Route
router.delete('/deletetask', TaskController.deleteTask);

export default router;