const { callYelpApi } = require("../../utils/yelpApiHelper");
const sl = require("../../config/stringLiterals");
const { getZomatoClient } = require("../../utils/cUtils");
module.exports = {
  LocationIntent(location) {
    const sLoc = location.value;
    console.log("location:", sLoc);
    this.setSessionAttribute("location", sLoc);
    switch (this.requestObj.request.locale) {
      case sl.en_IN:
        handleRequest(this, sLoc);
        break;
      case sl.en_GB:
        callYelpApi({ location: sLoc }).then(res => passRes(this, res, sLoc));
        break;
      case sl.en_US:
        handleRequest(this, sLoc);
        break;
      default:
        console.log("you should not be here!!!");
    }
  }
};

const passRes = (ref, { data }, sLoc) => {
  if (data.total > 0) {
    ref.ask(ref.t("LOCATION_RES_SEARCH", getParams(data, sLoc)));
  } else {
    ref.ask(ref.t("NO_RES_LOCATION", getParams(data, sLoc)));
  }
};

const handleRequest = (ref, sLoc) => {
  getZomatoClient().getCities({ q: sLoc }, (err, result) => {
    console.log(result);
    console.log(err);
    ref.ask(ref.t("ASK_FOR_RECIPE", { sLoc }));
  });
};

const getParams = ({ total }, sLoc) => ({
  rCount: total,
  word: total > 1 ? sl.P_RES : sl.RES,
  sLoc
});
