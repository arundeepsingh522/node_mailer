const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail",
    pass: "your passcode",
  },
});

const sendMail = async (req, res) => {
  try {
    console.log("Start Sending Mail");
    const { to, subject, message } = req.body;
    console.log("to", to, "subj", subject, "msg", message);

    if (!to || !subject || !message) {
      return res
        .status(400)
        .json({ message: "Missing required fields: to, subject, and message" });
    }

    const info = await transporter.sendMail({
      from: '"Arundeep Singh 👻" <arundeepsingh522@gmail.com>', // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: message, // plain text body
      html: `<b>${message}</b>`, // html body
    });
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({
      message: "Mail Sent",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Error in MailController", error);

    res.status(500).json({
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
module.exports = sendMail;
