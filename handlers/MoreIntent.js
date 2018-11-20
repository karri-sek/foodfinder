const lodash = require("lodash");
const { getBestRestaurants } = require("../utils/getBestRestaurants");
module.exports = {
  MoreIntent() {
    const restaurants = this.getSessionAttribute("restaurants");
    const namesSaid = this.getSessionAttribute("namesSaid");
    lodash.remove(restaurants, res => res.name === namesSaid);
    const bestRestaurants = getBestRestaurants(restaurants);
    const [restaurant] = bestRestaurants;
    console.log("Second best Restaurant ", restaurant);
    this.setSessionAttribute("namesSaid", namesSaid.push(restaurant));
    const speech = `How about ${
      restaurant.name
    } restaurant . Say hear the details, or more to go for next restaurant.`;
    const reprompt =
      "Say hear the details, or more to go for next restaurant or begin new search ";
    this.ask(speech, reprompt);
  }
};
