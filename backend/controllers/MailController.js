const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arundeepsingh522@gmail.com",
    pass: "ycea mdcf dbqi qhdq",
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
      html: ` <div style="display: flex ;flex-direction : column ;justify-content: center; align-items: center;">
        <p style="margin-top: 50px;">${message}</p>
        <div style="margin-top: 50px; border: 2px solid green; border-radius: 20px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%"
                style="border-collapse: collapse; font-family: Arial, sans-serif;">
                <tr>
                    <td align="center" style="padding: 10px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
                            <tr>
                                <td align="left" style="padding: 10px;">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/chatbuddy-6991c.appspot.com/o/IMG20240409154939.jpg?alt=media&token=e7b032b0-ca75-4558-9046-b8da845673f4" alt="Profile Picture" width="150" height="150"
                                        style="">
                                </td>
                                <td align="left" style="padding: 10px;">
                                    <h2 style="margin: 0; color: #007BFF;">Arundeep Singh</h2>
                                    <p style= " color: #555;">Full Stack Developer</p>
                                    <p style="margin-top: 0px; color: #555;">
    
                                        <strong>A:</strong>Chandigarh,Punjab<br>
                                        <strong>T:</strong>7087725882<br>
                                        <strong>E:</strong>arundeepsingh522@gmail.com<br>
                                       
                                    </p>
                                   
                                </td>
                            </tr>
                            
                        </table>
                    </td>
                </tr>
            </table>
        </div>

    </div>`, // html body
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
