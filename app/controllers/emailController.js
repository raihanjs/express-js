import SendEmail from "../utility/emailUtility.js";

export const Email = async (req, res) => {
    let email = req.body['email'];
    let emailText = req.body['emailText'];
    let emailSubject = req.body['emailSubject'];

    let result = await SendEmail(email,emailText, emailSubject);
    res.json({Email: result});
}