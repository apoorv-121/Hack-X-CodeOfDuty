const nodemailer = require("nodemailer");

const sendEmail = async (Eventname, address, landmark, zip, image, type) => {

    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        type: "SMTP",
        host: "smtp.gmail.com",
        secure: true,
        port: 587,
        auth: {
            user: "shrimali.work.dev@gmail.com",
            pass: "jhvjvdegercrjfzj",
        },
    });

    let info = await transporter.sendMail({
        from: '"Green City" <ashishshrimali9935@gmail.com>',
        to: "rishu04072001@gmail.com",
        subject: "Help animal in your near areas",
        text: "Hello I am Ashish Shrimali sending mail fron NodeJs",
        html: ` 
        <div style="width: 600px; height: 800px border: 1px solid #black; border-radius: 5px;>
            <img src=${image} alt="Card Image" style="width: 100%; height: 70%; display: block;">
            <div style="padding: 10px;">
                <h2 style="margin: 0; color: green;"> ${type} event ${Eventname} organised</h2>
                <p style="margin: 10px 0 0; color: green; font-size:18px;">
                    Address: ${address} near ${landmark}, PIN: ${zip}
                </p>
            </div>
        </div>

        `,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = sendEmail

