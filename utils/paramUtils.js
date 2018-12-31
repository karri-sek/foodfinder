const SORT_BY = "best_match";

const sl = require("../config/stringLiterals");
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

const getNoResParams = (loc, r_name) => ({
  loc,
  r_name
});

const getMoreParams = data => ({
  postcode: data.location.zip_code,
  cnumber: data.phone
});

const getAddressParams = data => ({
  address: `${data.location.address1}, ${data.location.zip_code}`,
  cnumber: data.phone
});

const hearDetailsParams = ({ rating, review_count }) => ({
  rating,
  rcount: review_count
});

module.exports = {
  getYelpParams,
  getMsgParams,
  getLocationParams,
  getNextParams,
  getNoResParams,
  getAddressParams,
  getMoreParams,
  hearDetailsParams
};
