const axios = require("axios");
const config = require("../config/config");
const keys = require("../config/keys");
axios.defaults.headers.common.Authorization = keys.accessToken;

const callYelpApi = inputParams => {
  if (!inputParams) throw Error("Sorry I need input params to call API");

  return axios.get(config.bsURL, { params: inputParams });
};

const getBDetails = id => {
  if (!id) throw Error("Sorry I need id to search the business");
  const url = config.bDetailsURL + id;
  return axios.get(url);
};
module.exports = { callYelpApi,
getBDetails };
