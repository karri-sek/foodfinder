const axios = require("axios");
const config = require("./config/config");
const zomato = require("zomato");
axios.defaults.headers.common.Authorization =
  "Bearer IZzYffjke4PoxRBnZiNcjKJXDqFpuFQRfpqjH2KX9o6Eiw1vOocPGtaJHAlm6vyU2p_B177cChG9QnRY0Koj7y6EFMedEF47MliG0qoWGghZcp70TPCpLJQ7-QjsW3Yx";
const id = "GuruNpVhiDvrQaQa0arvoQ";

const client = zomato.createClient({
  userKey: "9fdec429a6091c95d833f0bba5dac789"
});

client.getCities({ q: "mumbai" }, (err, result) => {
  if (!err) {
    console.log(result);
  } else {
    console.log(err);
  }
});

const mailgunDomain = "sandbox297d784418364087846f61adfe6bc218.mailgun.org";
const mailgun = require("mailgun-js")({
  apiKey: "9df994138a49794a43f7ccf1d3f72052-41a2adb4-0df7c81c",
  domain: mailgunDomain
});

const data = {
  from:
    "Excited User <postmaster@sandbox297d784418364087846f61adfe6bc218.mailgun.org>",
  to: "babusek@gmail.com",
  subject: "Hello",
  text: "Testing some Mailgun awesomeness!"
};
mailgun.messages().send(data, (error, body) => {
  if (error) {
    console.log("EMAIL ERROR: ", error);
  }
});

const url = config.bDetailsURL + id;

/* Axios
  .get(url)
  .then(response => {
    console.log("response ", response.data);
  })
  .catch(err => console.log("er", err)); */
