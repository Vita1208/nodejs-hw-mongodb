import nodemailer from "nodemailer";
import { SMTP } from "../constants/index.js"; 
import { env } from "./env.js";

const transporter = nodemailer.createTransport({
    host: env(SMTP.SMTP_HOST),
    port: Number(env(SMTP.SMTP_PORT)),
    secure: true, 
    auth: {
        user: env(SMTP.SMTP_USER),
        pass: env(SMTP.SMTP_PASSWORD),
    },
    tls: {
        rejectUnauthorized: false 
    }
});



export const sendEmail = async (options) => {
    console.log('Preparing to send email with options:', options);
    try {
        const info = await transporter.sendMail(options);
        console.log('Email sent successfully:', info);
        return info;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error; 
    }
};




























