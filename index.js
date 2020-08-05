const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact details</h3>
            <ul>
                <li>First name: ${req.body.firstName}</li>
                <li>Last name: ${req.body.lastName}</li>
                <li>Email: ${req.body.email}</li>
                <li>Phone: ${req.body.phone}</li>
            </ul>
        `

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                
            }
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
