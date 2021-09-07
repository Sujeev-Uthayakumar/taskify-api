const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: "sujeev115115@gmail.com",
  from: "sujeev115115@gmail.com",
  subject: "This is my first creation!",
  text: "I hope this one actually gets to you",
});
