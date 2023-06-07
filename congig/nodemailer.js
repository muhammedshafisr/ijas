import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gr3ys3c@gmail.com",
    pass: "skbuzdybuzjhjbfz",
  },
});

export const mailOptions = {
  from: "gr3ys3c@gmail.com",
  to: "gr3ys3c@gmail.com",
};
