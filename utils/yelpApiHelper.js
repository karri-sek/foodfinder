const axios = require("axios");
const config = require("../config/config");
const keys = require("../config/keys");
const cUtils = require("../utils/cUtils");
const paramUtils = require("../utils/paramUtils");
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
const sayFirstResult = (thisRef, location, rName) => {
  callYelpApi(paramUtils.getYelpParams(location, rName))
    .then(res => {
      const { total } = res.data;
      const fRes = cUtils.getShuffleRes(res.data);
      thisRef.setSessionAttribute("fRes", fRes);
      thisRef.setSessionAttribute("popRes", 1);
      if (total > 1) {
        thisRef.ask(
          thisRef.t(
            "FOUND_MORE_RES",
            paramUtils.getMsgParams(total, fRes, rName)
          )
        );
      } else {
        cUtils.handleNoLocResults(undefined, thisRef, location, rName);
      }
    })
    .catch(err => cUtils.handleNoLocResults(err, thisRef, location, rName));
};
module.exports = { callYelpApi,
getBDetails,
sayFirstResult };
