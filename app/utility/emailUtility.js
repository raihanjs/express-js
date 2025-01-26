import nodemailer from "nodemailer";

import {
  EMAIL_HOST,
  EMAIL_PASSWORD,
  EMAIL_PORT,
  EMAIL_USER,
} from "../config/config.js";

const SendEmail = async (EmailTo, EmailText, EmailSubject) => {
    console.log('From SendEmail : ', EmailTo, EmailText, EmailSubject);
    
  let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: false,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: EMAIL_USER,
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
    html: "<h2>Hello World</h2>"
  };

  try{
    await transporter.sendMail(mailOptions);
    return true;
  }catch(err) {
    console.log(err);
    
    return false;
  }
};

export default SendEmail;