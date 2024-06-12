import nodemailer from "nodemailer";

// Function to send an email
export const sendEmail = async (
  to: string,
  username: string,
  password
): Promise<void> => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER, // Your Gmail address
      pass: process.env.SMTP_PASS, // Your Gmail password or app password if two-factor authentication is enabled
    },
  });

  // Define email options
  const mailOptions = {
    from: "Harmonia <support@harmonia.com>", // Sender address
    to, // Recipient address
    subject: "Bienvenue sur notre site web Harmonia", // Subject line
    html: `
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email de bienvenue</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo {
            width: 150px;
        }

        .content {
            margin-bottom: 20px;
        }

        .footer {
            text-align: center;
            font-style: italic;
            color: #777;
        }

        .contact-info {
            margin-top: 20px;
        }

        .contact-info p {
            margin: 5px 0;
        }

        .contact-info strong {
            font-weight: bold;
        }

        .button-container {
            text-align: center;
        }

        .button {
            display: inline-block;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 10px;
        }

        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <a href="#"><img src="https://i.postimg.cc/nhj0M0kF/logo-1-light.png" alt="Logo Harmonia" class="logo"></a>
        </div>
        <div class="content">
            <p>Bonjour ${username},</p>
            <p>Bienvenue sur notre site web <strong><a href="#">Harmonia</a></strong>!</p>
            <p>Voici vos détails de connexion :</p>
            <ul>
                <li><strong>Nom d'utilisateur :</strong> ${username}</li>
                <li><strong>Mot de passe :</strong> ${password}</li>
            </ul>
            <p>Assurez-vous de garder ces informations en sécurité.</p>
            <div class="button-container">
                <a href="#" class="button">Aller sur le site</a>
            </div>
            <p>Cordialement,<br>Votre équipe <strong>Harmonia</strong></p>
        </div>
        <div class="footer">
            <p><strong>Veuillez ne pas répondre à cet e-mail.</strong></p>
            <p>Si vous rencontrez des problèmes d'authentification ou si vous avez des questions, n'hésitez pas à nous contacter à <strong>info@harmonia.com</strong>.</p>
            <p>Meilleures salutations,</p>
            <p>Harmonia</p>
        </div>
    </div>
</body>

        `,
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
