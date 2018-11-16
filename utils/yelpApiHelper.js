const axios = require("axios");
const config = require("../config/config");
axios.defaults.headers.common.Authorization = config.accessToken;

const callYelpApi = inputParams => {
  if (!inputParams) throw Error("Sorry I need input params to call API");

  return axios.get(config.bsURL, { params: inputParams });
};
module.exports = callYelpApi;
