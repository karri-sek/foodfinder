const _ = require("lodash");
const zomato = require("zomato");
const keys = require("../config/keys");
const { getNoResParams } = require("../utils/paramUtils");
const getZomatoClient = () => zomato.createClient({
    userKey: keys.zomato_key
  });

const getShuffleRes = sRes => _.shuffle(sRes.businesses)[0];

const handleNoLocResults = (err, ref, loc, rname) => {
  ref.ask(ref.t("SORRY_NO_RES_FOUND", getNoResParams(loc, rname)));
  console.log("No Results found for location response from yelp:", err);
};

module.exports = {
  getShuffleRes,
  getZomatoClient,
  handleNoLocResults
};
