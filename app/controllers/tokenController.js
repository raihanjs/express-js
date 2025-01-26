import { DecodeToken, EncodeToken } from "../utility/tokenUtility.js";

export const tokenEncode = async (req, res) => {
    let email = req.headers['mail'];
    let _id = req.headers['_id'];

    let token = EncodeToken(email,_id);
   return res.json({message: token})
}

export const tokenDecode = async (req, res) => {
    let token = req.headers['token'];
    
    let data = DecodeToken(token);
    res.json(data);
}   