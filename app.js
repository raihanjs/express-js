import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import fileUpload from "express-fileupload";

const app = express();
import * as path from "path";
import router from "./routes/api.js";

import {
  MONGODB_CONNECTION,
  PORT,
  MAX_JSON_SIZE,
  URL_ENCODED,
  WEB_CACHE,
  REQUEST_LIMIT_TIME,
  REQUEST_LIMIT_NUMBER,
} from "./app/config/config.js";

// Global application middlewares
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());

// File Upload Middleware
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

// Rate Limiter
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web Caching
app.set("etag", WEB_CACHE);

// MongoDB Connection
mongoose
.connect(MONGODB_CONNECTION, { autoIndex: true })
.then(() => {
    console.log("Connceted to Database");
  })
  .catch(() => {
    console.log("Database Connection Error");
  });
  
// Set API Routes
app.use("/api", router);

// Set application storage
app.use(express.static("storage"));

// Undefined Route
app.use('*', (req,res) => {
  res.status(404).json({status:"fail", data: "Not found"})
})

// Run your express backend project
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
