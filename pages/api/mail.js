// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/congig/nodemailer";

export default async function handler(req, res) {
  const { mail, subject, message } = req.body;

  await transporter.sendMail({
    ...mailOptions,
    subject,
    html: `<h1>From:${mail}</h1><br><p>${message}</p>`,
  });

  res.status(200).json({ status: "Ok" });
}
