const { callYelpApi } = require("../../utils/yelpApiHelper");
const sl = require("../../utils/stringLiterals");
const { getZomatoClient, handleNoLocResults } = require("../../utils/cUtils");
const { getLocationParams, getNoResParams } = require("../../utils/paramUtils");
const { sayFirstResult } = require("../../utils/yelpApiHelper");
module.exports = {
  LocationIntent(location) {
    const sLoc = location.value;
    this.setSessionAttribute("location", sLoc);
    const rName = this.getSessionAttribute("recipeName");
    console.log("LI:rName:location=", rName, sLoc);
    if (sLoc && rName) sayFirstResult(this, sLoc, rName);
    else {
      switch (this.requestObj.request.locale) {
        case sl.en_IN:
          handleRequest(this, sLoc);
          break;
        case sl.en_GB:
          callYelpApi({ location: sLoc })
            .then(res => passRes(this, res, sLoc))
            .catch(err => handleNoLocResults(err, this, sLoc, rName));
          break;
        case sl.en_US:
          handleRequest(this, sLoc);
          break;
        default:
          console.log("you should not be here!!!");
      }
    }
  }
};

const passRes = (ref, { data }, sLoc) => {
  if (data.total > 0) {
    ref.ask(ref.t("LOCATION_RES_SEARCH", getLocationParams(data, sLoc)));
  }
};

const handleRequest = (ref, sLoc) => {
  getZomatoClient().getCities({ q: sLoc }, (err, result) => {
    console.log(result);
    console.log(err);
    ref.ask(ref.t("ASK_FOR_RECIPE", { sLoc }));
  });
};
