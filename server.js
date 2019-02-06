const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");
const logger = require("morgan");
const flash = require('connect-flash');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config()
const u = process.env.UNAME;
const p = process.env.PASS

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(flash())
app.use(express.static("public"));
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

app.post('/send', (req, res) => {

    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.field1}</li>
        <li>Email: ${req.body.field2}</li>
        <li>Phone: ${req.body.field3}</li>
        <li>Subject: ${req.body.field4}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.field5}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'in-v3.mailjet.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: u, // generated ethereal user
            pass: p  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Web Contact Request Submission" <jeremy-test@mail.com>', // sender address
        to: 'jeremy@denverwindowcleaningpro.com', // list of receivers
        subject: 'New Requst for Contact From Website', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });
    res.redirect('/');
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finalProject", { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log(`🐆  mongoose connection successful 🐆`.yellow);
    app.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`🌎  connected on port ${PORT} 🌍`.cyan)
    });
});



