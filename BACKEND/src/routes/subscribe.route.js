const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  // Configura el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'hotmail', // Puedes usar otro servicio de email
    auth: {
      user: 'pufflesecrestorm13@outlook.com', // Tu email
      pass: 'Olafkeashe123@', // Tu contraseña
    }
  });

  // Configura el mensaje de correo
  let mailOptions = {
    from: 'pufflesecretstorm13@outlook.com',
    to: email,
    subject: 'CONFIRMACION DE SUSCRIPCION',
    text: 'Gracias por suscribirse a Amazona E-Commerce'
  };

  // Envia el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado:', info.response);
      return res.status(200).send('Correo enviado');
    }
  });
});

module.exports = router;
