import { UPLOAD_FOLDER } from "../config/config.js";
import { moveFile } from "../utility/moveFile.js";

export const FileUpload = async (req, res) => {
    
    let myFile = req.files['myFile'];
    let myFileName = myFile.name;
    let myFilePath = UPLOAD_FOLDER(myFileName);
    
    await moveFile(myFile, myFilePath)
    
    res.json({status: "File Uploaded"})

}