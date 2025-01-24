import { UPLOAD_FOLDER } from "../config/config.js";
import { moveFile } from "../utility/moveFile.js";

// Create TASK
export const createTask = async (req,res) => {    
    return res.json({message: "Task Created Successfully"})
}
// Create TASK Param
export const createTaskParam = async (req,res) => {
    let name = req.params.name;    
    let mail = req.params.mail;    
    let RMCode = req.params.id;    
    return res.json({message: `PARM Request - ${name}, ${mail}, ${RMCode}`})
}
// Create TASK Param
export const createTaskQuery = async (req,res) => {
    let country = req.query.country;    
    let lang = req.query.lang;    
    return res.json({message: `Query Request - ${country}, ${lang}`})
}
// Upload File
export const UploadFile = async (req,res) => {
    let myFile = req.files['myFile']
    let myFilePath = UPLOAD_FOLDER(myFile.name)
    await moveFile(myFile, myFilePath)
    return res.json({message:"successfully moved file"});
}
// Read TASK
export const readTask = async (req,res) => {
    return res.json({message: "Task Read Successfully"})
}
// Update TASK
export const updateTask = async (req,res) => {
    return res.json({message: "Task Updated Successfully"})
}
// Delete TASK
export const deleteTask = async (req,res) => {
    return res.json({message: "Task Deleted Successfully"})
}