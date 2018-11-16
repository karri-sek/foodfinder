const lodash = require("lodash");

/**
 * This method returns the restaurants based on the review and ratings
 * @param {Array} restaurants - arrays of business object
 * @returns {JSON} contains the best restaurant details object
 */
const getBestRestaurants = restaurants => {
  if (restaurants.length > 10) {
    const maxReviewCount = lodash.maxBy(restaurants, "review_count")
      .review_count;
    const maxRating = lodash.maxBy(restaurants, "rating").rating;

    const maxReviewRestaurants = applyReviewFilter(restaurants, maxReviewCount);
    const maxRatingRestaurants = applyRatingFilter(restaurants, maxRating);

    const reviewRatMaxRestaurants = applyRatingFilter(
      applyReviewFilter(restaurants)
    );
    return getListOfRestaurants(
      reviewRatMaxRestaurants,
      maxReviewRestaurants,
      maxRatingRestaurants
    );
  }
  return null;
};
const applyReviewFilter = (restaurants, review) => restaurants.filter(business => business.review_count === review);
const applyRatingFilter = (restaurants, rating) => restaurants.filter(business => business.rating === rating);

const getListOfRestaurants = (maxRes, maxRevRes, maxRatRes) => {
  if (maxRes.length > 1) {
    return lodash.shuffle(maxRes).slice(0, 10);
  } else if (maxRes.length === 1) {
    return maxRes;
  } else if (maxRevRes.length > 1) {
    return lodash.maxBy(maxRevRes, "rating");
  } else if (maxRevRes.length === 1) {
    return maxRevRes;
  } else if (maxRatRes > 1) {
    return lodash.maxBy(maxRevRes, "review_count");
  }
  return maxRatRes;
};
module.exports = {
  getBestRestaurants
};
