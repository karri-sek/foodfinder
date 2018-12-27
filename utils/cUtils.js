const _ = require("lodash");
const getShuffleRes = sRes => _.shuffle(sRes.businesses)[0];
const SORT_BY = "best_match";

const getYelpParams = (location, term) => ({
  location,
  term,
  sort_by: SORT_BY
});

module.exports = { getShuffleRes,
getYelpParams };
