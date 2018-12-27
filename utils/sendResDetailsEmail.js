const mailgunApiKey = process.env.MAILGUN_API_KEY;
const mailgunDomain = "foodpedia.uk";
const mailgun = require("mailgun-js")({
  apiKey: "key-c3dab96cdcf02f8b456b2700a7156dde",
  domain: mailgunDomain
});
const sendResDetailsEmail = () => {
  const data = {
    from: "Excited User <info@foodpedia.uk>",
    to: "babusek@gmail.com",
    subject: "Hello",
    text: "Testing some Mailgun awesomeness!"
  };
  mailgun.messages().send(data, (error, body) => {
    if (error) {
      console.log("EMAIL ERROR: ", error);
    }
  });
};

module.exports = { sendResDetailsEmail };
