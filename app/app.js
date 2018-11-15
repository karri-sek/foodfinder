"use strict";
const stateless = require("../handlers/stateless");
// =================================================================================
// App Configuration
// =================================================================================

const { App } = require("jovo-framework");

const config = {
  logging: true
};

const app = new App(config);

// =================================================================================
// App Logic
// =================================================================================

app.setHandler(stateless);

module.exports.app = app;
