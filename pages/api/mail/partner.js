import nodemailer from "nodemailer";

export default function handler(req, res) {
  const {
    fullName,
    brandName,
    emailAddress,
    ownIsockNFT,
    walletAddress,
    ownStore,
    storeAddress,
    brandAge,
    targetAudience,
  } = JSON.parse(req.body);

  console.log(
    "Data",
    fullName,
    brandName,
    emailAddress,
    ownIsockNFT,
    walletAddress,
    ownStore,
    storeAddress,
    brandAge,
    targetAudience
  );

  const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 465,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
      res.status(500).send("Set Up Error");
    } else {
      console.log("Server is ready to send Emails 😊", success);
    }
  });

  const customerEmailBody = `
    <html>
      <head>
        <style>
          /* Add any custom styles here */
        </style>
      </head>
      <body>
        <h2>Dear ${fullName},</h2>
        <p>Thank you for your interest in partnering with iSocks. We are excited to have you on board!</p>
        <p>We have received your data with the following information:</p>
        <ul>
          <li><strong>Email Address:</strong> ${emailAddress}</li>
          <li><strong>Do you own an Isocks NFT?</strong> ${ownIsockNFT}</li>
          <li><strong>Wallet Address:</strong> ${walletAddress}</li>
          <li><strong>Do you own a store?</strong> ${ownStore}</li>
          <li><strong>Store Address:</strong> ${storeAddress}</li>
          <li><strong>Brand Age:</strong> ${brandAge}</li>
          <li><strong>Target Audience:</strong> ${targetAudience}</li>
        </ul>
        <p>We will review your submission and get back to you within the next few days.</p>
        <p>In the mean time, do make sure to join our community on <a href="https://t.me/isocksnft">Telegram</a> </p>
        <p>Thank you for considering iSocks.</p>
        <p>Sincerely,</p>
        <p>The iSocks Team</p>
      </body>
    </html>
  `;

  const adminBody = `
    <html>
      <head>
        <style>
          /* Add any custom styles here */
        </style>
      </head>
      <body>
        <p>Dear Admin,</p>
        <p>A new partner has filled out the form with the following information:</p>
        <ul>
          <li><strong>Full Name:</strong> ${fullName}</li>
          <li><strong>Brand Name:</strong> ${brandName}</li>
          <li><strong>Email Address:</strong> ${emailAddress}</li>
          <li><strong>Do they own an Isocks NFT?</strong> ${ownIsockNFT}</li>
          <li><strong>Wallet Address:</strong> ${walletAddress}</li>
          <li><strong>Do they own a store?</strong> ${ownStore}</li>
          <li><strong>Store Address:</strong> ${storeAddress}</li>
          <li><strong>Brand Age:</strong> ${brandAge}</li>
          <li><strong>Target Audience:</strong> ${targetAudience}</li>
        </ul>
        <p>Please review their application and contact them as soon as possible.</p>
      </body>
    </html>
  `;

  async function sendEmail(emailAddress, emailSubject, emailBody) {
    let message = {
      from: "info@isocks.ai",
      to: emailAddress,
      subject: emailSubject,
      html: emailBody,
    };

    let status = transporter.sendMail(message, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send("Message Sent Fail");
      } else {
        console.log("Email Sent", +info.response);
        res.status(200).send("Message Sent");
      }
    });

    console.log(status);
    return status;
  }

  Promise.all([
    sendEmail("info@isocks.ai", "New Partnership Form Submission", adminBody),
    sendEmail(
      emailAddress,
      "iSocks: Partnership Form Submited",
      customerEmailBody
    ),
  ])
    .then((responses) => {
      res.status(200).send("Email Sent Successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to Send Email");
    });
}
