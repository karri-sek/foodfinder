"use strict";

const stateless = require("../handlers/stateless");
const locationHandler = require("../handlers/locationIntent");
const businessSearchHandler = require("../handlers/businessSearchIntent");
const nameState = require("../states/name");
// =================================================================================
// App Configuration
// =================================================================================

const { App } = require("jovo-framework");

const config = {
  logging: true
};

const app = new App(config);
app.setHandler(stateless, locationHandler, nameState, businessSearchHandler);
exports.handler = (event, context, callback) => {
  app.handleLambda(event, context, callback);
};
module.exports.app = app;
