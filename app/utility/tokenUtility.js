import { JWT_EXPIRATION_TIME, JWT_SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";

const KEY = JWT_SECRET;

export const EncodeToken = (email, user_id) => {
    const EXPIRE = {expiresIn: JWT_EXPIRATION_TIME};
    const PAYLOAD = {email, user_id: user_id}

    return jwt.sign(PAYLOAD,KEY,EXPIRE);
   
};

export const DecodeToken = (token) => {
    try{
        return jwt.verify(token,KEY)
    }catch{
        return null;
    }
};