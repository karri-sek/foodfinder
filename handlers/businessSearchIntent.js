const yelpApiHelper = require("../utils/yelpApiHelper");
const { getBestRestaurants } = require("../utils/getBestRestaurants");
const noRestaurant = require("../handlers/NoRestaurantHandler");
module.exports = {
  BusinessSearchIntent(recipe) {
    const userPrefLocation = this.getSessionAttribute("location");
    const recipeName = recipe.value;
    this.setSessionAttribute("recipeName", recipeName);
    console.log(" recipeName ", recipeName);
    console.log("location from session ", userPrefLocation);

    yelpApiHelper({
      location: userPrefLocation,
      term: recipeName,
      sort_by: "best_match"
    }).then(response => {
      const allRestaurants = response.data.businesses;
      const namesSaid = [];
      if (allRestaurants.length > 0) {
        this.setSessionAttribute("restaurants", allRestaurants);
        const bestRestaurants = getBestRestaurants(allRestaurants);
        console.log("no of best restaurants found ", bestRestaurants.length);
        const restaurant = bestRestaurants[0];
        console.log("First best Restaurant ", restaurant);
        this.setSessionAttribute("namesSaid", namesSaid.push(restaurant));
        const speech = `How about ${
          restaurant.name
        } restaurant . Say hear the details, or more to go for next restaurant.`;
        const reprompt =
          "Say hear the details, or more to go for next restaurant or begin new search ";
        this.ask(speech, reprompt);
      } else {
        noRestaurant(this);
      }
    });
  }
};
