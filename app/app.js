"use strict";
const stateless = require("../handlers/stateless");
const locationHandler = require("../handlers/locationIntent");
// =================================================================================
// App Configuration
// =================================================================================

const { App } = require("jovo-framework");

const config = {
  logging: true
};

const app = new App(config);
app.setHandler(stateless, locationHandler);
exports.handler = (event, context, callback) => {
  app.handleLambda(event, context, callback);
};
module.exports.app = app;
