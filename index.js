const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
            <h3>Contact details</h3>
            <ul>
                <li>First name: ${req.body.firstName}</li>
                <li>Last name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
                <li>Phone: ${req.body.phone}</li>
            </ul>
        `;

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "nova.smith51@ethereal.email",
        pass: "jQ6qD34pBf6m1FpV3K",
      },
    });

    let mailOptions = {
      from: "test@testaccount.com",
      to: "nova.smith51@ethereal.email",
      replyTo: "test@testaccount.com",
      subject: "New Message",
      html: htmlEmail,
      attachments:[
        {
          contents: new Buffer(req.files.image, 'base64')
        }
      ]
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
