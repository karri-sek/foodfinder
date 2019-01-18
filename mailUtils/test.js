const json = require("./response");
const main = require("./main");
// Console.log(json.businesses);

const res = main.getEmailHtml(json.businesses);

console.log(res);
