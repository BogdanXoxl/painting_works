import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_APP_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  secure: true,
});
