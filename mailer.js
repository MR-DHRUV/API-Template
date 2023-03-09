require('dotenv').config()
var nodemailer = require('nodemailer');


// standard snippet for sending mails via gmail smtp
const Mailer = (to, sub, body) => {
    const mailPass = process.env.EMAIL_PASS2;
    const mail = process.env.EMAIL;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: mail,
            pass: mailPass
        }
    });

    var mailOptions = {
        from: mail,
        to: to,
        subject: sub,
        text: body,
    };

    try {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).json({ message: "Email Sent" });
                return true
            }
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
}

module.exports = Mailer