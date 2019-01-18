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

const getCardDetails = resJSON => ({
  title: resJSON.name,
  content: resJSON.location.display_address,
  imageUrl: resJSON.image_url
});
module.exports = {
  getShuffleRes,
  getZomatoClient,
  handleNoLocResults,
  getCardDetails
};
