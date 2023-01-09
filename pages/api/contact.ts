import type { NextApiRequest, NextApiResponse } from "next";

import { transporter } from "../../app/lib/nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (!req.body.phone || !req.body.name) {
      return res.status(400).json({ message: "Bad request!" });
    }

    const mailData = {
      from: process.env.EMAIL_APP_USER,
      to: [process.env.EMAIL_APP_USER, process.env.EMAIL_APP_RECIEVER].join(", "),
      subject: `Message From ${req.body.name}`,
      text: `${req.body.name} | ${req.body.phone}`,
      html: `<p>${req.body.name} <a href="tel:${req.body.phone}">${req.body.phone}</a></p>`,
    };

    try {
      await transporter.sendMail(mailData);
    } catch (e) {
      return res.status(500).json({ message: "Server error!" });
    }
  }

  return res.status(200).json({ message: "OK" });
}
