"use strict";

const stateless = require("./handlers/stateless");
const locationHandler = require("./handlers/locationIntent");
const businessSearchHandler = require("./handlers/businessSearchIntent");
const moreHandler = require("./handlers/MoreIntent");
const nextHandler = require("./handlers/nextIntent");
const stopHandler = require("./handlers/stopIntent");
const nameState = require("../states/name");
const sprintf = "i18next-sprintf-postprocessor";
const gb = require("../app/i18n/en-GB.json");
const hearDetailsHandler = require("./handlers/HearDetailsIntent");
const { Webhook } = require("jovo-framework");

const languageResources = {
  "en-GB": gb
};
// =================================================================================
// App Configuration
// =================================================================================

const { App } = require("jovo-framework");

const config = {
  logging: true,
  i18n: {
    overloadTranslationOptionHandler: sprintf.overloadTranslationOptionHandler,
    load: "all",
    returnObjects: true,
    returnNull: false,
    fallbackLng: "en-GB",
    resources: languageResources
  },
  intentMap: {
    "AMAZON.StopIntent": "StopIntent",
    "AMAZON.YesIntent": "YesIntent",
    "AMAZON.NoIntent": "NoIntent",
    "AMAZON.NextIntent": "NextIntent"
  }
};

const app = new App(config);
app.setHandler(
  stateless,
  locationHandler,
  nameState,
  businessSearchHandler,
  moreHandler,
  hearDetailsHandler,
  nextHandler,
  stopHandler
);

// =================================================================================
// Server Configuration
// =================================================================================

/* Const port = process.env.PORT || 3000;
Webhook.listen(port, () => {
  console.log(`Example server listening on port ${port}!`);
});
Webhook.post("/webhook", (req, res) => {
  app.handleWebhook(req, res);
}); */

exports.handler = (event, context, callback) => {
  app.handleLambda(event, context, callback);
};
module.exports.app = app;
