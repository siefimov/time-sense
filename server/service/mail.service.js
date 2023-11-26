const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_POST,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    async sendActiovationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activtion email on ' + process.env.API_URL,
            text: '',
            html: `
                <div>
                    <h1>For activation click the following link</h1>
                    <a href="${link}">${link}</a>
                </div>
            `,
        });
    }
}

module.exports = new MailService();
