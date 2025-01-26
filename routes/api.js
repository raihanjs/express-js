import express from "express";
const router = express.Router();

// ===================================Task Controller===================================
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

// ===================================Token Controller===================================
import * as TokenController from '../app/controllers/tokenController.js';

// -------------Encode Token
router.get('/encodetoken', TokenController.tokenEncode);
// -------------Decode Token
router.get('/decodetoken', TokenController.tokenDecode);

// ===================================Email Controller===================================
import * as EmailController from "../app/controllers/emailController.js";

// --------------Send Email 
router.get('/sendemail', EmailController.Email);

// ===================================User Controller===================================
import authMiddleware from "../app/middlewares/authMiddleware.js";
import * as UserController from '../app/controllers/userController.js';
// --------------Get User Profile

// ===================================File Controller===================================
import * as FileController from '../app/controllers/FileController.js';
// --------------Upload File
router.post('/fileupload' ,FileController.FileUpload);

export default router;