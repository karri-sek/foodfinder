const _ = require("lodash");
const getShuffleRes = sRes => _.shuffle(sRes.businesses)[0];
const SORT_BY = "best_match";
const zomato = require("zomato");
const keys = require("../config/keys");
const getZomatoClient = () => zomato.createClient({
    userKey: keys.zomato_key
  });
const getYelpParams = (location, term) => ({
  location,
  term,
  sort_by: SORT_BY
});

module.exports = { getShuffleRes,
getYelpParams,
getZomatoClient };
