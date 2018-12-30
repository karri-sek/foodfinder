const axios = require("axios");
const config = require("../config/config");
const keys = require("../config/keys");
const cUtils = require("../utils/cUtils");

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
  callYelpApi(cUtils.getYelpParams(location, rName))
    .then(res => {
      const { total } = res.data;
      const fRes = cUtils.getShuffleRes(res.data);
      thisRef.setSessionAttribute("fRes", fRes);
      thisRef.setSessionAttribute("popRes", 1);
      if (total > 1) {
        thisRef.ask(
          thisRef.t("FOUND_MORE_RES", cUtils.getMsgParams(total, fRes, rName))
        );
      } else {
        thisRef.ask(
          thisRef.t(
            "SORRY_NO_RES_FOUND",
            cUtils.getNoResParams(location, rName)
          )
        );
      }
    })
    .catch(err => console.log("error from getting yelp results:", err));
};
module.exports = { callYelpApi,
getBDetails,
sayFirstResult };
