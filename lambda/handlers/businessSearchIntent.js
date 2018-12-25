const { callYelpApi } = require("../../utils/yelpApiHelper");
const { getBestRestaurants } = require("../../utils/getBestRestaurants");
const noRestaurant = require("../handlers/NoRestaurantHandler");
const SORT_BY = "best_match";
module.exports = {
  BusinessSearchIntent(recipe) {
    const location = this.getSessionAttribute("location");
    const rName = recipe.value;
    this.setSessionAttribute("recipeName", rName);
    console.log("recipeName ", rName);
    console.log("location from session ", location);

    callYelpApi(getYelpParams(location, rName)).then(res => {
      const { total } = res.data;
      console.log("total : ", total);
      const fRes = getFirstResturant(res.data);
      this.setSessionAttribute("fRes", fRes);
      if (total > 1) {
        this.ask(this.t("FOUND_MORE_RES", getMsgParams(total, fRes, rName)));
      }
    });
  }
};

const getFirstResturant = sRes => sRes.businesses[0];
const getMsgParams = (total, fRes, rName) => ({
  n_restaurants: total,
  search_term: rName,
  res_name: fRes.name
});

const getYelpParams = (location, term) => ({
  location,
  term,
  sort_by: SORT_BY
});
