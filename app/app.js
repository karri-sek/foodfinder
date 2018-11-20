"use strict";

const stateless = require("../handlers/stateless");
const locationHandler = require("../handlers/locationIntent");
const businessSearchHandler = require("../handlers/businessSearchIntent");
const moreHandler = require("../handlers/MoreIntent");
const nameState = require("../states/name");
const sprintf = "i18next-sprintf-postprocessor";
const gb = require("../app/i18n/en-GB");
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
  }
};

const app = new App(config);
app.setHandler(
  stateless,
  locationHandler,
  nameState,
  businessSearchHandler,
  moreHandler
);

exports.handler = (event, context, callback) => {
  app.handleLambda(event, context, callback);
};
module.exports.app = app;
