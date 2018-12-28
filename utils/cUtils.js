const _ = require("lodash");
const getShuffleRes = sRes => _.shuffle(sRes.businesses)[0];
const SORT_BY = "best_match";
const zomato = require("zomato");
const keys = require("../config/keys");
const sl = require("../config/stringLiterals");

const getZomatoClient = () => zomato.createClient({
    userKey: keys.zomato_key
  });
const getYelpParams = (location, term) => ({
  location,
  term,
  sort_by: SORT_BY
});

const getMsgParams = (total, fRes, rName) => ({
  n_restaurants: total,
  search_term: rName,
  res_name: fRes.name
});

const getLocationParams = ({ total }, sLoc) => ({
  n_restaurants: total,
  word: total > 1 ? sl.P_RES : sl.RES,
  sLoc
});

const getNextParams = r_name => ({
  r_name
});
module.exports = {
  getShuffleRes,
  getYelpParams,
  getZomatoClient,
  getMsgParams,
  getLocationParams,
  getNextParams
};
