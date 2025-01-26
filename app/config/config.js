import * as path from "node:path";

export const MONGODB_CONNECTION = "mongodb+srv://admin:Admin905@cluster0.bhifpq3.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0";

export const JWT_SECRET = "ITCORNER2024CCNA15905?#";
export const JWT_EXPIRATION_TIME = 60 * 60 * 24 * 30;

export const EMAIL_HOST = "live.smtp.mailtrap.io";
export const EMAIL_PORT = 587;
export const EMAIL_USER = "smtp@mailtrap.io";
export const EMAIL_PASSWORD = "df031e4fae7b9549dfc6a86bc9a6ac1d";
export const EMAIL_ENCRYPTION = "ssl";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 100; // 15 min
export const REQUEST_LIMIT_NUMBER = 3000; // per 15 min 3000 req allowed

export const WEB_CACHE = false;

export const PORT = 5000;

export function UPLOAD_FOLDER(fileName){
    return path.resolve(process.cwd(), 'storage', fileName);
}
