const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());

// =============================================================Express Js Middleware=========================================================
// Application Level Middleware
app.use(function (req, res, next) {
  console.log("I am application level middleware");
  next();
});
// Route Level Middleware
app.use("/query", function (req, res, next) {
  console.log("I am query route middleware");
  next();
});

// =============================================================Express Js Request=============================================================
// ============== GET Request
app.get("/getsimple", (req, res) => {
  res.send("This is a Simple Get Request");
});
app.get("/query", (req, res) => {
  let fullname = req.query.fullname;
  let email = req.query.email;
  let phone = req.query.phone;
  res.send(`${fullname}'s email is ${email} and Phone is ${phone}`);
});
app.get("/headerreq", (req, res) => {
  let fullname = req.header("fullname");
  let email = req.header("email");
  let phone = req.header("phone");
  res.send(`${fullname}'s email is ${email} and Phone is ${phone}`);
});
// ============== POST Request
app.post("/postsimple", (req, res) => {
  res.send("This is a simple Post Request");
});
app.post("/query", (req, res) => {
  let fullname = req.query.fullname;
  let email = req.query.email;
  let phone = req.query.phone;
  res.send(`${fullname}'s email is ${email} and Phone is ${phone}`);
});
app.post("/header", (req, res) => {
  let fullname = req.header("fullname");
  let email = req.header("email");
  let phone = req.header("phone");
  res.send(`${fullname}'s email is ${email} and Phone is ${phone}`);
});
app.post("/json", (req, res) => {
  let jsonData = req.body;
  let json = JSON.stringify(jsonData);
  res.send(json);
});

app.post("/multipart", (req, res) => {
  let jsonData = req.body;
  res.send(JSON.stringify(jsonData));
});
app.post("/fileupload", (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      res.send("File Upload Failed");
    } else {
      res.send("File Upload Success");
    }
  });
});
// ============== PUT Request
// ============== DELETE Request
// =============================================================Express Js Response============================================================
app.get("/string", (req, res) => {
  res.send("This is a simple string Response");
});
app.get("/json", (req, res) => {
  let data = [
    {
      fullname: "Raihan Gazi",
      age: 27,
      email: "raihangazi1024@gmail.com",
    },
    {
      fullname: "Borhan Ashrafi",
      age: 26,
      email: "borhan@gmail.com",
    },
  ];
  let jsonData = JSON.stringify(data);
  res.send(jsonData);
});
app.get("/status", (req, res) => {
  res.status(201).send("Response status changed to 201");
});
app.get("/headerres", (req, res) => {
  res.append("Name", "Raihan");
  res.append("Phone", "12345678910");
  res.append("Mail", "raihan@mail.com");
  res.send("Header Added by Response");
});
app.get("/setcookies", (req, res) => {
  res.cookie("Name", "Raihan Gazi");
  res.cookie("Phone", "12345678910");
  res.cookie("Mail", "raihan@mail.com");
  res.send("Cookie Added by Response");
});
app.get("/clearcookies", (req, res) => {
  res.clearCookie("Name");
  res.clearCookie("Mail");
  res.send("Cookie Removed by Response");
});
app.get("/download", (req, res) => {
  res.download("./uploads/passport.jpg");
});
app.get("/redirect", (req, res) => {
  res.redirect("http://localhost:8000/download");
});

app.listen(8000, () => "Server is running");
