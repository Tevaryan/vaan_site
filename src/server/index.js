const express = require('express');
const cors = require ('cors');
const sgMail = require ('@sendgrid/mail');

const app = express();

sgMail.setApiKey('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');

app.use(cors())

//Welcome Page
app.get('/', (req, res) => {
  res.send('Welcome to the SendGrid email server');
});

app.get('/send-email', (req, res) => {
  res.send('Welcome to the SendGrid email server');
  //Get variables from query string

  const { recipient, sender, topic, text } = req.query;

  //sendgrid requirements
  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text,
  }

  //send email

  sgMail.send(msg)
  .then((msg) => console.log(text))



});

app.listen(4000, () => console.log('running on port 4000'));

